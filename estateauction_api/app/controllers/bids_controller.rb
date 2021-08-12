class BidsController < ApplicationController
    require 'stripe'
    Stripe.api_key = ENV['STRIPE_KEY']
    def create
        @home = Home.find(params[:id])
        @token = request.headers['Authorization']
        @bid = params[:bid].to_i
        @payload = decode(@token)
        @user = User.find(@payload["id"])
        if @home.endDate > Time.now
        @user.bids.create(amount: @bid, home: @home)
        @home.update(bid: @home.bid + @bid)
        end
        @bids = @home.bids
      
    end
end
