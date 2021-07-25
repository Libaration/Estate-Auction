json.user do |user|
    json.id @user.id
    json.username @user.username
    json.url @user.url
    json.created_at @user.created_at  
    json.bids @bids do |bid|
        json.id bid.id
        json.amount bid.amount
    end
end
json.token @token