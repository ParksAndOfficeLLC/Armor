require 'rails_helper'

RSpec.describe "Orders", type: :request do
  describe "GET /index" do
    it "gets a list of orders" do
      order = Order.new(user: User.first, product: Product.first)
      order.save
      # need fake order at least 1
      get '/orders'
      expect(response).to have_http_status(200)
      p response
      # expect(response.body).to eq 1 
    # pending "add some examples (or delete) #{__FILE__}"
    end
  end
  describe "POST /create" do
    it "creates a order" do
      user = User.where(email: "test@example.com").first_or_create(password: "password", password_confirmation: "password")

      product = Product.where(name: "shirt").first_or_create(price: "10.22", cost: "8.55", user_id: 1)  
      
      orders_params = { 
        order:{
          user_id: user.id,
          product_id: product.id
      }}

      post '/orders', params: orders_params
        expect(response).to have_http_status(200)
        # order = order.first
        # expect(order.user_id).to eq user.id
        # expect(order.product_id).to eq 1
    end  
  end

  describe "PATCH /update" do
    it "updates an order" do
      orders = Order.create(user_id: 1, product_id: 1)
      orders_params = {
        orders:
          {
            name: 'T-Shirt',
            price: 10.22,
            cost: 8.55,
            user_id: 1
          }
      }
      patch "/orders/#{order.id}", params: orders_params
      updated_orders = Order.find(order.id)
      expect(response).to have_http_status(200)
      expect(updated_order.user_id:).to eq 2
    end
  end
end
