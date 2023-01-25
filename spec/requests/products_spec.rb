require 'rails_helper'

RSpec.describe "Products", type: :request do
  # let(:user) User.first
  describe "GET /index" do
   
  it "gets a list of products" do
   get '/products'
   p response.body
   expect(response).to have_http_status(200)
    end
  end
  describe "POST /create" do
    it "creates a product" do
      user = User.where(email: "test@example.com").first_or_create(password: "password", password_confirmation: "password")
      product_params = { 
        product:{
          name: "shirt",
          price: 10.22,
          cost: 8.55,
          user_id: user.id
        }}
      post '/products', params: product_params
        expect(response).to have_http_status(200)
        product = Product.first
        expect(product.name).to eq "shirt"
    end  
  end
end