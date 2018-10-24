require_relative '../config/environment'

describe "Hero class" do
  before(:each) do
    @thor = Hero.new([ 
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
  end

  it "should return the coolest ability" do
    expect(@thor.coolest_ability).to eq({
      name: "Lighting Blast",
      coolness: 10
    })
  end

  it "should return the ability names ordered alphabetically" do
    expect(@thor.ordered_abilities).to eq(["Flight", "Lighting Blast", "Super Strength"])
  end

  it "should add a new ability" do
    @thor.add_ability({ name: 'amazing hair', coolness: 11 })

    expect(@thor.abilities).to include({ name: 'amazing hair', coolness: 11 })
  end

  it "should handle dummies" do
    expect{@thor.add_ability("eating sandwiches quickly with style in the morning")}.to raise_error(ArgumentError)
  end
end
