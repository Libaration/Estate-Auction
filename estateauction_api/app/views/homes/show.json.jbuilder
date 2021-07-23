json.id @home.id
json.address @home.address
json.bid @home.bid
json.url @home.url
json.details @home.details
json.bathrooms @home.bathrooms
json.bedrooms @home.bedrooms
json.bids @home.bids do |bid|
    json.id bid.id
    json.amount bid.amount
    json.user bid.user.username
end