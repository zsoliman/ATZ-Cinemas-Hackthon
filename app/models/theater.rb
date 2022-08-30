class Theater < ApplicationRecord
    has_many :movies
    has_many :tickets
    has_many :seats, through: :tickets
end
