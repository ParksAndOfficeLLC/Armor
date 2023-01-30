class ProductsController < ApplicationController
    def index
        @products = Product.all 
        render json: @products
    end

    def create
        @product = Product.create(product_params)
        if @product.valid?
        render json: @product
        else 
            p @product.errors
            render json: @product.errors, status:422
        end
    end
    
    def update
        @product = Product.find(params[:id])
        @product.update(product_params)
        if @product.valid?
            render json: @product
        else
            render json: @product.errors, status: 422
        end
    end

    def destroy
        @product = Product.find(params[:id])
        if @product.destroy
            render json: @product
        else
            render json: @product.errors
        end 
    end
    
    private 
    def product_params
        p params.inspect
        params.permit(:name, :price, :cost, :user_id, :order_id)
    end
    
    def product_params_create
        params.require(:product).permit(:name, :price, :cost, :user_id)
    end
end