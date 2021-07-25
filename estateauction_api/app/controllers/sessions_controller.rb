class SessionsController < ApplicationController
    def create
        @user = User.find_by(username: params[:user][:username])
        if @user && @user.authenticate(params[:user][:password])
            @token = encode({id: @user.id})
           @bids = @user.bids
        else
            render json: {Error: "Incorrect username or password"}
        end
    end

    def authenticate_token
        if @token = request.headers['Authorization']
        @payload = decode(@token)
        @user = User.find(@payload["id"])
        @bids = @user.bids
            
        else
            render json: {Error: "Invalid JWT token"}
        end
    end

    def user_params
        params.require(:user).permit(:username, :password)
      end
end
