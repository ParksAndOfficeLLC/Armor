require 'rails_helper'

RSpec.describe Product, type: :model do
    it "validates a product has a name" do
        product = Product.create
        expect(product.errors).to be_empty
    end
    it "validates a product has a price" do
        product = Product.create
        expect(product.errors).to be_empty
    end
    it "validates a product has a cost" do
        product = Product.create
        expect(product.errors).to be_empty
    end
    it "validates a product has a user id" do
        product = Product.create
        expect(product.errors).to be_empty
    end
    it "validates a product has a order id" do
        product = Product.create
        expect(product.errors).to be_empty
    end
    it "validates a product has a created at datetime" do
        product = Product.create
        expect(product.errors).to be_empty
    end
    it "validates a product has a updated at datetime" do
        product = Product.create
        expect(product.errors).to be_empty
    end
end 