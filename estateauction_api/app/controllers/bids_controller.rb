class BidsController < ApplicationController
    def create
        @home = Home.find(params[:id])
        @token = request.headers['Authorization']
        @bid = params[:bid].to_i
        @payload = decode(@token)
        @user = User.find(@payload["id"])
        @user.bids.create(amount: @bid, home: @home)
        @home.update(bid: @home.bid + @bid)
        @bids = @home.bids
      
    end
end
