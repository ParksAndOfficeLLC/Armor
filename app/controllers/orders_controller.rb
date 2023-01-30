class OrdersController < ApplicationController
  def index
    @orders = Order.all
    render json: @orders
  end

  def create
    order = Order.create(product_id: params[:product_id], user_id: params[:user_id])
    if order.valid?
      render json: order
    else
      p order.errors
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
    params.permit(:product_id, :user_id)
  end
end
