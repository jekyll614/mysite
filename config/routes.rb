Rails.application.routes.draw do
  root 'home#index'
  get 'note' => 'note#index', as: 'notes'
  get 'photo' => 'photo#index', as: 'photos'
end
