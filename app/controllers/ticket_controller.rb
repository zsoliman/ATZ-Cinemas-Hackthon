class TicketController < ApplicationController

    skip_before_action :verify_authenticity_token

    def index 
        render json: Ticket.all
    end

    def purchase
        t = Ticket.find_by!(id: params[:id])
        if t.update(ticket_params)
            render json: t
        else
            render json: {error: blog.errors.full_messages}, status: 422
        end
        
    end


    private

    def ticket_params
        params.permit(:theater_id, :seat_id)
    end

end
