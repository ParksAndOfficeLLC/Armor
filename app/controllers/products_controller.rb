class ProductsController < ApplicationController
    def index
        products = Product.all 
        render json:products
    end

    
    def update
        product = Product.find(params[:id])
        product.update(product_params)
        if product.valid?
            render json: product
        else
            render json: product.errors, status: 422
        end
    end
end