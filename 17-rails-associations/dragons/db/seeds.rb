# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


DragonAbility.destroy_all
Dragon.destroy_all
Ability.destroy_all
Master.destroy_all

eddie = Master.create(name: 'Eddie')
smaug = eddie.dragons.create(name: 'Smaug')
fire_breathing = smaug.abilities.create(name: 'Fire Breathing')