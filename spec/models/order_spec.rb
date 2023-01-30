require 'rails_helper'

RSpec.describe Order, type: :model do

  let(:user) { User.create }
  let(:product) { Product.create }

  it "validates an order has a user_id" do
    order = Order.new(user_id: user.id, product_id: product.id)
    expect(order.errors).to be_empty
  end

  it "validates an order has a product_id" do
    order = Order.new(user_id: user.id, product_id: product.id)
    expect(order.errors).to be_empty
  end
  it "validates a product has a created at datetime" do
    order = Order.new
    expect(order.errors).to be_empty
end
  it "validates a product has a updated at datetime" do
    order = Order.new
    expect(order.errors).to be_empty
end
end

