class ProductsController < ApplicationController
  def index
    @products = Product.all
    render json: @products
  end

  def create
    product = Product.create(name: params[:name], price: params[:price], cost: params[:cost],
                              user_id: params[:user_id])
    if product.valid?
      render json: product
    else
      p product.errors
      render json: product.errors, status: 422
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
    if @product.delete
      render json: @product
    else
      render json: @product.errors
    end
  end

  private

  def product_params
    params.permit(:name, :price, :cost, :user_id)
  end
end
