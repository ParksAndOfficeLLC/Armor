equire 'rails_helper'

RSpec.describe "Orders", type: :request do
  describe "GET /index" do
    
    it "gets a list of orders" do
        # need fake order at least 1
      get '/orders'
      orders = JSON.parse(response.body)
      expect(response).to have_http_status(200)
      expect(orders.length).to eq 1
    # pending "add some examples (or delete) #{__FILE__}"
    end
  end
  describe "POST /create" do
    it "creates a order" do
      user = User.where(email: "test@example.com").first_or_create(password: "password", password_confirmation: "password")
      order_params = { 
        order:{
          user_id: 1,
          product_id: 1,
      }}
      post '/orders', params: order_params
        expect(response).to have_http_status(200)
        order = order.first
        expect(order.user_id).to eq 1
    end  
  end
end
