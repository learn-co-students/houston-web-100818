require 'pry'
require 'rest-client'
require 'json'

def get_title(book_hash)
    book_hash['volumeInfo']['title']
end

def get_description(book_hash)
    book_hash['volumeInfo']['description']
end

def get_books(search_term)
    response = RestClient.get("https://www.googleapis.com/books/v1/volumes?q=#{search_term}")
    decoded = JSON.parse(response.body)
    decoded['items']
end

def get_authors(book_hash)
    if book_hash['volumeInfo']['authors'].class == Array
        book_hash['volumeInfo']['authors']
    else 
        []
    end
end

while true
    puts "Please Enter a Search Term (or type q to quit):"
    user_input = gets.chomp
    
    books = get_books(user_input)
    
    if user_input == 'q'
        break
    end

    books.each do | book_hash |
        puts get_title(book_hash)
        puts 'Description: '
        puts get_description(book_hash)
        puts 'Authors: '
        get_authors(book_hash).each do | author_name |
            puts author_name
        end
        puts '==============================================================='
    end
end