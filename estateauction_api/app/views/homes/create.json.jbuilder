json.id @home.id
json.address @home.address
json.bid @home.bid
json.url @home.url
json.details @home.details
json.bathrooms @home.bathrooms
json.bedrooms @home.bedrooms
json.zoning @home.zoning
if @home.endDate.present?
    json.endDate Home.time_to_js(@home.endDate)
else 
    json.endDate nil
end