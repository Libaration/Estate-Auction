json.array! @homes do |home|
    json.id home.id
    json.address home.address
    json.bid home.bid
    json.url home.url
    json.details home.details
    json.bathrooms home.bathrooms
    json.bedrooms home.bedrooms
  end