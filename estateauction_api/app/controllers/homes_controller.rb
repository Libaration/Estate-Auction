class HomesController < ApplicationController
    def index 
        if params[:id]
            @homes = User.find(params[:id]).homes
        else
            @homes = Home.all
        end
        render json: @homes
    end
end
