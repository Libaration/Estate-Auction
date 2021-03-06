json.array! @homes do |home|
    json.id home.id
    json.address home.address
    json.bid home.bid
    json.url home.url
    json.details home.details
    json.bathrooms home.bathrooms
    json.bedrooms home.bedrooms
    json.zoning home.zoning
    json.createdAt home.created_at
    json.bids home.bids.reverse do |bid|
        json.id bid.id
        json.amount bid.amount
        json.user bid.user.username
    end
    if home.endDate.present?
      json.endDate Home.time_to_js(home.endDate)
  else 
      json.endDate nil
  end
  
  end