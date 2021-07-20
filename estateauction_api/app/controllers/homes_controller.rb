class HomesController < ApplicationController
    def index 
        if params[:id]
            @homes = User.find(params[:id]).homes
        elsif(params[:reversed] == "true" && params[:reversed].present?)
            @homes = Home.all.reverse
        else
            @homes = Home.all
        end
        render json: @homes
    end

    def show 
        @home = Home.find(params[:id])

        render json: @home
    end
end
