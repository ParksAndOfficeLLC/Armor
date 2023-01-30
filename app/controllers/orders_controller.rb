class OrdersController < ApplicationController
  def index
    orders = Order.all
    render json: orders
  end

  def create
    @orders = Order.new(user_id: params[:user_id], product_id: params[:product_id])
    if orders.valid?
      render json: orders
    else
      render json: order.errors, status: 422
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
    order = Order.find(params[:id])
    if order.destroy
      render json: order
    else
      render json: order.errors
    end
  end

  private

  def orders_params
    params.require(:order).permit(:product_id)
  end
end
