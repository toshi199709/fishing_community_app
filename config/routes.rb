# config/routes.rb
Rails.application.routes.draw do
  devise_for :users

  resources :posts, only: [:new, :create, :index, :show] # ← :show を追加！

  root "posts#index"
end
