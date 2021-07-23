class Bid < ApplicationRecord
    belongs_to :user
    belongs_to :home
    validates :amount, presence: true
    validates :amount, numericality: { only_integer: true }
    validates :amount, numericality: { greater_than: 0 }
end
