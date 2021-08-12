class BidsController < ApplicationController
    require 'stripe'
    require 'money'
    Stripe.api_key = ENV['STRIPE_KEY']
    def create
        @bid = params[:bid].to_i   
        @home = Home.find(params[:id])
        @token = request.headers['Authorization']
        @payload = decode(@token)
        @user = User.find(@payload["id"])
        if @home.endDate > Time.now
        @user.bids.create(amount: @bid, home: @home)
        @home.update(bid: @home.bid + @bid)
        end
        @bids = @home.bids

        #I don't use this method anymore extracted to the Hooks method to check payment success
        #TODO: delete method make sure it isn't still being used elsewhere
    end

    def checkout
        domain = 'http://localhost:3000'
        @bid = params[:bid].to_i   
        @home = Home.find(params[:id])
        @bidInCents = (100 * params[:bid].to_r).to_i
        @token = request.headers['Authorization']
        @payload = decode(@token)
        @user = User.find(@payload["id"])
        stripe_session = Stripe::Checkout::Session.create({
            payment_method_types: [
              'card',
            ],
            line_items: [{
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: "Bid for #{@home.address}"
                    },
                    unit_amount: @bidInCents,
                },
                quantity: 1,
              }],
              mode: 'payment',
              success_url: "#{domain}#{params[:url]}?id=#{@user.id}&home=#{@home.id}&success=true&session_id={CHECKOUT_SESSION_ID}",
              cancel_url: "#{domain}#{params[:url]}?canceled=true",
            })
        render json: {url: "#{stripe_session.url}"}
    end

    def hooks 
    endpoint_secret = ENV['ENDPOINT_SECRET']
        begin
            sig_header = request.env['HTTP_STRIPE_SIGNATURE']
            payload = request.body.read
            event = Stripe::Webhook.construct_event(payload, sig_header, endpoint_secret)
          rescue JSON::ParserError => e
            return status 400
          rescue Stripe::SignatureVerificationError => e
            return status 400
          end
          if event['type'] == 'checkout.session.completed'
            checkout_session = event['data']['object']
        
            fulfill_order(checkout_session)
          end
    end

    def fulfill_order(checkout_session)
        puts "Fulfilling order method hit inside bids controller for #{checkout_session.inspect}"
        uri = URI.parse(checkout_session.success_url)
        params = CGI.parse(uri.query)
        if checkout_session.payment_status == "paid"
            puts "Status marked as paid begin db changes"
            @home = Home.find(params["home"]).first
            @user = User.find(params["id"]).first
            @bid = Money.from_cents(checkout_session.amount_total, "USD").to_i
            puts "Placing bid #{@bid} current bid is #{@home.bid} so total should be #{@home.bid + @bid}"
            if @home.endDate > Time.now
                @user.bids.create(amount: @bid, home: @home)
                @home.update(bid: @home.bid + @bid)
            else
                return status 400
            end
        end
    end
end
