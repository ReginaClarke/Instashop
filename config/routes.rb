Rails.application.routes.draw do
  resources :comments

  post "/auth/login", to: "authentication#login"
  get "/auth/verify", to: "authentication#verify"
  resources :users
  resources :posts

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
