class Tweet
  attr_accessor :message, :username
  # ALL = []

  def self.all
    # ALL
    query = <<-SQL
      SELECT * FROM tweets
    SQL

    # Array of tweet hashes, but want tweet instances
    results = DB[:conn].execute(query)

    results.map do |tweet_hash|
      # return tweet instance
      Tweet.new(tweet_hash)
    end
  end

  def initialize(props={})
    @message = props['message']
    @username = props['username']
    @id = props['id']
    # ALL << self
  end
  
  def save
    # remember Little Bobby Drop Tables
    query = <<-SQL
      INSERT INTO tweets (username, message) VALUES (?, ?) 
    SQL

    DB[:conn].execute(query, self.username, self.username)
  end

  def self.create(props={})
    tweet = Tweet.new(props)
    tweet.save
  end
end
