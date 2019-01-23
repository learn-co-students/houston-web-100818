# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
seeds = [
        {
            "id":1,
            "content": "Sleep in or nah?",
            "options_attributes":[
                {
                    "content": "Sleep in",
                    "next_question_id": 2
                },
                {
                    "content": "Nah",
                    "next_question_id": 3
                }
            ]
        },
        {
            "id":2,
            "content": "Sorry, you have died of disentary...",
            "options_attributes": []
        },
        {
            "id":3,
            "content": "Would you like to have cereal or eggs?",
            "options_attributes":[
                {
                    "content":"Cereal",
                    "next_question_id":2
                },
                {
                    "content":"Eggs",
                    "next_question_id": 4
                }
            ]
        },
        {
            "id":4,
            "content":"You have won at life",
            "options_attributes":[]
        }
]


seeds.each do | seed |
    Question.create(seed)
end