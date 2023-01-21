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
end
