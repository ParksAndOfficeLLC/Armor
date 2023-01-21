README Park5 & 0ffice Store app

Below documentation were the steps taken to get the
application up and running.

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
 3062  rails generate react:component App
 3063  bundle add devise
 3064  rails generate devise:install
 3065  rails generate devise User
 3066  rails db:migrate
 3067  code .
In config/environments/development.rb added: 
    config.action_mailer.default_url_options = { host: 'localhost', port: 3000 }
In config/initializers/devise.rb 
    Found this line:
        config.sign_out_via = :delete
    And replaced it with this:
        config.sign_out_via = :get
 3068  rails generate controller Home index
In app/views/home/index.html.erb added:
    <%= react_component 'App', {
    logged_in: user_signed_in?,
    current_user: current_user,
    new_user_route: new_user_registration_path, sign_in_route: new_user_session_path, sign_out_route: destroy_user_session_path
    } %>
In app/views/layouts/application.html.erb 
    Found this line:
        <%= javascript_importmap_tags %>
    And replaced it with this:
        <%= javascript_pack_tag 'application', 'data-turbolinks-track': 'reload' %>
In config/routes.rb added:
    get '*path', to: 'home#index', constraints: ->(request){ request.format.html? }
    root 'home#index'
 3069  yarn add react-router-dom
In app/javascript/components/App.js added import below:
    import { BrowserRouter, Routes, Route } from "react-router-dom"
 3070  bundle add bootstrap
 3071  mv app/assets/stylesheets/application.css app/assets/stylesheets/application.scss\n
 3072  yarn add reactstrap
In app/assets/stylesheets/application.scss added:
    @import "bootstrap";
 3073  rails g resource Order user_id:integer product_id:integer
 3074  rails db:migrate
 3075  rails g resource Product name:string price:float cost:float 
 3076  rails db:migrate
 3077  rails s
In app/models/ user & order & product, added below associations appropriately:
    has_and_belongs_to_many :users
    has_and_belongs_to_many :orders
    has_and_belongs_to_many :products

Server up and running on local host ;)

************************************************************************************************

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...