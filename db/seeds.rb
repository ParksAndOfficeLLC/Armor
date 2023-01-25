user = User.where(email: "test@example.com").first_or_create(password: "password", password_confirmation: "password")

products_seeds ={
    name: "shirt",
    price: 10.22,
    cost: 8.55
  },
  {
    name: "hat",
    price: 8.72,
    cost: 6.55
  },
  {
    name: "hoodie",
    price: 20.22,
    cost: 15.53
  }


orders_seeds = {
user_id: 1, 
product_id: 1
}


orders_seeds.each do |order|
  user.orders.create(order)
  p "creating: #{order}"
end  

products_seeds.each do |product|
  user.products.create(product)
  


  p "creating: #{product}"
end