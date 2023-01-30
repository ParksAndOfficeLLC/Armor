Welcome to Armor!

Armor is a cutting-edge e-commerce solution empowering individuals and businesses to effortlessly establish and manage their online stores. With a focus on user-friendliness and accessibility, Armor enables anyone to effortlessly create, manage and sell their products with ease. 

Features: 

In This appliocation you can, 

Create products
Edit Produts 
Update Products 
Acess inventory 
Edit and Update inventroy 
View Your Orders 

Lets Get Started 

Running this project.....
Below documentation were the steps taken to get the
application up and running.
*******************************************************

*******************************************************
 3048  rails new store -d postgresql -T
 3049  ls
 3050  cd store
 3051  rails db:create
 3052  bundle add rspec-rails
 3053  rails generate rspec:install
 3054  bundle add webpacker
 3055  bundle add react-rails
 3056  rails webpacker:install
 3057  rails webpacker:install:react
 3058  yarn add @babel/preset-react
 3059  yarn add @rails/activestorage
 3060  yarn add @rails/ujs
 3061  rails generate react:install
 3063  bundle add devise
 3064  rails generate devise:install
 3070  bundle add bootstrap
 3072  yarn add reactstrap
 3073  rails g resource Order user_id:integer product_id:integer
 3074  rails db:migrate
 3075  rails g resource Product name:string price:float cost:float 
 3076  rails db:migrate
 3077  rails s
************************************************************************************

Understanding Aassociations

************************************************************************************
 
 Users 
 has_many :products, through: :orders
 has_many :orders
 
 Order
 belongs_to :user
 belongs_to :product
 
 Product
 has_many :users, through: :orders 
 has_many :orders
 












