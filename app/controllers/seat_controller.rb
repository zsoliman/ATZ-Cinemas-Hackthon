class SeatController < ApplicationController

    skip_before_action :verify_authenticity_token

    def index
        render json: Seat.all
    end

    def show
        seat = Seat.find_by!(id: params[:id])
        render json: seat
    end

    def update
        seat = Seat.find_by!(id: params[:id])
        if seat.update(seat_params)
            render json: seat
        else 
            render json: {error: blog.errors.full_messages}, status: 422
        end
    end

    private

    def seat_params
        params.permit(:is_available, :ticket_id)
    end

end
