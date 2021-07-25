Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  post '/login', to: 'sessions#create', :defaults => { :format => 'json' }
  get '/login', to: 'sessions#authenticate_token'
  resources :homes, :defaults => { :format => 'json' }, only: [:index, :show, :create]
  resources :users, :defaults => { :format => 'json' }, only: [:index,:show] do
    resources :homes, only: [:index, :show, :destroy]
  end
  post '/homes/:id/bid', to: 'bids#create', defaults: {format: :json}
end
