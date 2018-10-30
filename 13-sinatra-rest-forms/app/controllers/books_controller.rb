class BooksController < ApplicationController
  get '/books' do
    @books = Book.all

    erb :'books/index'
  end

  get '/books/new' do
    erb :'books/new'
  end

  get '/books/:id' do
    @book = current_book

    erb :'books/show'
  end

  post '/books' do
    Book.create(params)

    redirect '/books'
  end

  get '/books/:id/edit' do
    @book = current_book

    erb :'books/edit'
  end

  patch '/books/:id' do
    book = current_book

    book.update(title: params[:title], author: params[:author], snippet: params[:snippet])

    redirect "/books/#{params[:id]}"
  end

  delete '/books/:id' do
    book = current_book

    book.destroy

    redirect '/books'
  end

  private

  def current_book
    Book.find(params[:id])
  end
end
