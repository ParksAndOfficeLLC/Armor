class OrdersController < ApplicationController
  def index
    @orders = Order.all
    render json: @orders
  end

  def create
    user = User.find(orders_params[:user_id])

    product = Product.find(orders_params[:product_id])

    @orders = Order.new(user: user, product_id: product.id)
    if @orders.save
      render json: @orders
    else
      render json: @orders.errors, status: 422
    end
  end

  def update
    @orders = Order.find(params[:id])
    @orders.update(orders_params)
    if @orders.valid?
      render json: @orders
    else
      render json: @orders.errors, status: 422
    end
  end

  def destroy
    p params
    @order = Order.find(params[:id])
    p @order
    if @order.delete
      render json: @order
    else
      render json: @order.errors
    end
  end

  private

  def orders_params
    params.permit(:user_id, :product_id)
  end
end
