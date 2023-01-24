class ProductsController < ApplicationController
    def index
        products = Product.all 
        render json:products
    end
    def create
        product = Product.create(product_params)
        if product.valid?
        render json: product
        else render json: product.errors, status:422
        end
    end
    private 
    def product_params
        params.require(:product).permit(:name, :price, :cost)
    end
end
