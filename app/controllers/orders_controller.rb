class OrdersController < ApplicationController
    def index
        orders = Order.all 
        render json: orders
    end
    def create
        order = order.create(order_params)
        if order.valid?
        render json: order
        else render json: order.errors, status:422
    end  
    end
    private 
    def orders_params
        params.require(:order).permit(:user_id, :product_id)
    end
end



