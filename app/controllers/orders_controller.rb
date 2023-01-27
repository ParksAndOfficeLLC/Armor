class OrdersController < ApplicationController
    def index
        orders = Order.all 
        # p orders
        render json: orders
    end

    def create
        @user = User.first
        @product = Product.first
        # in the future you will have to get the user dynamically from the product dynamically.
        orders = Order.new(user_id: User.first.id, product_id: Product.first.id)
        if orders.valid?
        render json: orders
        else render json: order.errors, status:422
        end
    end
    
    
    def update
        @orders = Order.find(params[:id])
        # p orders_params
        @orders.update(orders_params)
        # p @orders
        # if @orders.valid?
            render json: @orders
        # else
        #     render json: @orders.errors, status: 422
        # end
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