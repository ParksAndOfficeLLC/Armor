class OrdersController < ApplicationController
    def index
        orders = Order.all 
        render json: orders
    end


    def update
        orders = Order.find(params[:id])
        orders.update(order_params)
        if order.valid?
            render json: order
        else
            render json: product.errors, status: 422
        end
    end
end
