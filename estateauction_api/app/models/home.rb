class Home < ApplicationRecord
    belongs_to :user
    has_many :bids
    before_create :change_time

    def self.time_to_js(time)
        return DateTime.parse(time).strftime("%Y-%m-%eT%H:%M")
    end
    def self.time_to_rails(time)
        return time.to_datetime
    end

    def change_time
        if self.endDate
            self.endDate = Home.time_to_rails(self.endDate)
        end
    end
end
