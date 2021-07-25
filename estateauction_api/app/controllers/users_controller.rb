class UsersController < ApplicationController
    def show
        if @token = request.headers['Authorization']
        @payload = decode(@token)
        @user = User.find(@payload["id"])
        @bids = @user.bids
           
        else
            render json: {Error: "Invalid JWT token"}
        end
    end

    def index
        @users = User.all
        render json: {users: @users.as_json(except: :password_digest)}
    end
end
