user = User.where(email: "test@example.com").first_or_create(password: "password", password_confirmation: "password")

product = Product.where(name: "shirt").first_or_create(price: "10.22", cost: "8.55", user_id: 1, order_id: 1)

order = Order.where(user_id: 1).first_or_create(product_id: 1)

products_seeds =
{
  name: "shirt",
  price: 10.22,
  cost: 8.55,
  user_id: user.id,
  order_id: order.id
},
{
  name: "hat",
  price: 8.72,
  cost: 6.55,
  user_id: user.id,
  order_id: order.id
},
{
  name: "hoodie",
  price: 20.22,
  cost: 15.53,
  user_id: user.id,
  order_id: order.id
}




# order = Orders.new(user: User.first, product: Product.first)

    products_seeds.each do |product|
    user.products.create(product)
    p "creating: #{product}"
  end
  
  # order = Orders.create(user: User.first, product: Product.first)
  # order.save
  
  # order = Order.new
  # order.user = User.first
  # order.product = Product.first