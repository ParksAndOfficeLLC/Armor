require 'rails_helper'

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
