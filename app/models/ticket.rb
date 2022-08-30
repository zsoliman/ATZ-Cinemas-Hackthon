class Ticket < ApplicationRecord
    belongs_to :theater
    has_many :seats
end
