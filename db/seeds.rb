user = User.where(email: "test@example.com").first_or_create(password: "password", password_confirmation: "password")

products_seeds = [
  {
    name: "",
    price: 10.22,
    cost: 8.55
  },
  {
    name: "",
    price: 8.72,
    cost: 6.55
  },
  {
    name: "",
    price: 20.22,
    cost: 15.53
  }

]

products_seeds.each do |products|
  user.products.create(products)
  p "creating: #{products}"
end
