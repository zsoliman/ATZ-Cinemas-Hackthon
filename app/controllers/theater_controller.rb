class TheaterController < ApplicationController

    def index
        render json: Theater.all.to_json(methods: [:movies])
    end

    def show
        theater = Theater.find_by(id: params[:id])
        render json: theater.to_json(methods: [:movies])
    end
end
