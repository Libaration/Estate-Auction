# Screenshots

#### Login
![Login](https://i.gyazo.com/88a570d303856a99d9976c62493493a5.jpg)

#### Accepts payments using Stripe
![Payments](https://i.gyazo.com/6d07521491c7b4e2fee690e323ac2de2.png)

#### Viewing Home/Auction Page
![Viewing](https://i.gyazo.com/341f181f0639b9d270196704617b0e5d.png)

#### Bidding
![Bidding](https://i.gyazo.com/91712b6a910d5e91aeee9c8d3ed01080.png)

#### Adding a New Auction
![Add](https://i.gyazo.com/990c31baf95739d21f1d752db043a034.png)

#### Auctions List
![Listing](https://i.gyazo.com/cb6555c88881886223832dc61e3c7bff.jpg)

# Estate-Auction
Estate Auction is a basic CRUD example of using a Ruby/Rails as a backend API to serve a React/Typescript frontend.
The login uses a basic JWT authentication stored in the browsers localstorage to authenticate routes on the frontend.
Bidding/Countdown works as intended although needs an after action for after countdowns have ended.







##### Prerequisites

The setups steps expect following tools installed on the system.

- Github
- Ruby 2.6.1
- Rails Rails 6.0.3.4
- React
- npm
- node

# Backend setup

##### 1. Check out the repository

```bash
git clone git@github.com:Libaration/Estate-Auction.git
```

##### 2. Navigate to the estateauction_api Directory and Create and setup the database

Run the following commands to create and setup the database.

```ruby
bundle exec rake db:create
bundle exec rake db:setup
```

##### 3. Start the Rails server

You can start the rails server using the command given below. (All API endpoints calls from the frontend are on port 3030)

```ruby
bundle exec rails s --port 3030
```


And now you can visit the API via an endpoint with the base URL being http://localhost:3030
Endpoints : /users /homes

# Frontend setup

##### Installation:
(You will need node and npm installed globally on your machine.) 

```
npm install
```


##### To Start Server:

```
npm start
```

##### To Visit App:

```localhost:3000```
