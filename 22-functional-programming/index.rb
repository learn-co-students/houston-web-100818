# Procedural
sandwich = []
sandwich << 'Bread'
sandwich << 'Ham'
sandwich << 'Provelone'

# Object Oriented
class Sandwich

    def initialize
        @ingredients = []
    end

    def addIngredient(ingredient)
        @ingredients << ingredient
    end

end

sandwich = Sandwich.new
sandwich.addIngredient('Bread')
sandwich.addIngredient('Hame')