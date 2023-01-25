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

  describe "PATCH /update" do
    it "updates a product" do
      product = Product.create(name: 'shirt', price: 10.22, cost: 8.55, user_id: 1)
      product_params = {
        products:
          {
            name: 'T-Shirt',
            price: 10.22,
            cost: 8.55,
            user_id: 1
          }
      }
      patch "/products/#{product.id}", params: product_params
      updated_product = Product.find(product.id)
      expect(response).to have_http_status(200)
      expect(updated_product.name).to eq 'T-Shirt'
    end
  end
end