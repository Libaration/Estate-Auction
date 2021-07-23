Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  post '/login', to: 'sessions#create'
  get '/login', to: 'sessions#authenticate_token'
  resources :homes, :defaults => { :format => 'json' }, only: [:index, :show]
  resources :users, only: [:index,:show] do
    resources :homes, only: [:index,:create, :show, :destroy]
  end
end
