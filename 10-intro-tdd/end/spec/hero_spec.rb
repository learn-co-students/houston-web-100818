require_relative '../config/environment.rb'

describe 'Hero Class' do 
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


    it 'Should return its coolest ability' do
        expect( thor.coolest_ability ).to( eq({
            name: 'Lighting Blast',
            coolness: 10
        }))
    end

    it 'Should be able to add_ability to .abilities' do
        thor.add_ability({
            name: 'Hammer Call',
            coolness: 10
        })

        expect(thor.abilities).to( include({
            name: 'Hammer Call',
            coolness: 10
        }) )
    end

    #Sad path
    it 'should not add malformed input' do 
        thor.add_ability(2)
        expect(thor.abilities).not_to include(2)
    end

    it 'testing let' do
        binding.pry
    end


end