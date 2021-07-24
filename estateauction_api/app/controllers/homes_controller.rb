class HomesController < ApplicationController
    def index 
        if params[:id]
            @homes = User.find(params[:id]).homes
        elsif(params[:reversed] == "true" && params[:reversed].present?)
            @homes = Home.all.reverse
        else
            @homes = Home.all
        end
    end

    def show 
        @home = Home.find(params[:id])
        @bids = @home.bids
    end

    def create
        binding.pry
        @home = current_user.homes.create(home_params(params))
        
    end

    def home_params(params)
        params.require(:home).permit(:address,:url,:bathrooms,:bedrooms,:zoning,:endDate,:details, :current_user)
    end

    def current_user
        @token = request.headers['Authorization']
        @payload = decode(@token)
        @user = User.find(@payload["id"])
        @user
    end
end
