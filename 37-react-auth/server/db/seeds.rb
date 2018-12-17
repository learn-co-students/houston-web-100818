# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

[
    { name: 'alan', email: 'alan@example.com', phone: '1-800-alan' },
    { name: 'joe', email: 'joe@example.com', phone: '1-800-joe' },
    { name: 'hannah', email: 'hannah@example.com', phone: '1-800-hannah' },
    { name: 'eddie', email: 'eddie@example.com', phone: '1-800-eddie' },
    { name: 'alex', email: 'alex@example.com', phone: '1-800-alex' },
    { name: 'bilikis', email: 'bilikis@example.com', phone: '1-800-bilikis' },
    { name: 'janet', email: 'janet@example.com', phone: '1-800-janet' },
    { name: 'robert', email: 'robert@example.com', phone: '1-800-robert' },
    { name: 'jordan', email: 'jordan@example.com', phone: '1-800-jordan' },
    { name: 'megan', email: 'megan@example.com', phone: '1-800-megan' },
    { name: 'barbara', email: 'barbara@example.com', phone: '1-800-barbara' },
    { name: 'josh', email: 'josh@example.com', phone: '1-800-josh' }
].each do | user_attributes | 
    User.create(user_attributes)
end