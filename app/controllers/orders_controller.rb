class OrdersController < ApplicationController
    def index
        orders = Order.all 
        p orders
        render json: orders
    end
    def create
        @user = User.first
        @product = Product.first
        # in the future you will have to get the user dynamically from the product dynamically.
        order = Order.new(user: User.first, product: Product.first)
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



