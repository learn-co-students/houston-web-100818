class TweetsApp

  def call
    puts 'Welcome to Twitter'

    puts 'Enter a username:'
    username = gets.chomp

    puts 'Enter a message:'
    message = gets.chomp

    # tweet = Tweet.new({'username' => username, 'message' => message})
    # tweet.save

    Tweet.create({'username' => username, 'message' => message})

    tweets = Tweet.all
    render(tweets)
  end

  private

  def render(tweets)
    tweets.each.with_index(1) do |tweet, i|
      puts "#{i}. #{tweet.username} says: #{tweet.message}"
    end
  end
end


# 2 goals

# 1) Tweet.all
# 2) Tweet.save
# 3) Tweet.create
