require_relative '../config/environment.rb'

thor = Hero.new([ 
    {
        name: 'Super Strength',
        coolness: 3
    },
    {
        name:'Flight',
        coolness: 5
    },
    {
        name: 'Lighting Blast',
        coolness: 10
    }
])

binding.pry