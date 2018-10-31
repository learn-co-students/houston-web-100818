Dog.destroy_all
Leash.destroy_all

dog1 = Dog.create(name: 'Beethoven', breed: 'St Bernard', weight:200)

dog2 = Dog.create(name: 'Cujo', breed: 'Demon Dog', weight:30)

dog3 = Dog.create(name: 'Chomper', breed: 'Boston Terrier', weight:12)

leash1 = Leash.create(color: 'Red', length: 8, dog: dog1)
leash2 = Leash.create(color: 'Blue', length: 8, dog: dog1)

leash3 = Leash.create(color: 'Green', length: 8, dog: dog3)