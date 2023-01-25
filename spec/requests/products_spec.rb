require 'rails_helper'

RSpec.describe "Products", type: :request do
  describe "GET /index" do
    it "gets a list of products" do
      user = User.where(email: "test@example.com").first_or_create(password: "password", password_confirmation: "password")
      
      products = [
        {
          name: "shirt",
          price: 10.22,
          cost: 8.55
        },
        {
          name: "hat",
          price: 8.72,
          cost: 6.55
        },
        {
          name: "hoodie",
          price: 20.22,
          cost: 15.53
        }
      
      ]

      Products.create(
        name: 'hoodie',
        price: 20.22,
        cost: 15.53
      )

      gets '/products'

      products = JSON.parse(response.body)
      expect(response).to have_http_status(200)
      expect(products.length).to eq 3
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
