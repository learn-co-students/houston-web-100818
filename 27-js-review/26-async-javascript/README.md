# Asynchronous JavaScript and Promises

## Vocabulary

- Asynchronous
- Callback Hell
- `Promise`
-  `.then`
- AJAX
- json-server
- fetch
- Request Components:
  - method
  - url
  - headers
  - body

## Deliverables

- ~~Render a list of dog names~~

- ~~When the name of a dog is clicked, render the name, breed and image of that dog in "details" pane.~~

- ~~When you click delete, the dog should be removed from the list~~

- ~~When you click edit, turn the "details" pane into an "edit" form.~~

- ~~When you click "Create New Dog", it should turn the "details" pane into a form to create a new dog.~~

- ~~When the form is submitted, the information should reflect everywhere else in the app~~

- When the form is submitted the information should persist even if you refresh the browser.

## Outline

- Introduction
  - Review of outstanding deliverables from our dogs app
    - In Mod 2, how did we send data to the server?
    - Making requests to a server is asynchronous
- Introduction to Asynchronous Programming
  - What does asynchronous mean?
    - Asynchronous programming revolves around scheduling code to be run at a *later point in time*
    - *When have we done this so far?*
      - Alan's Quest led us into callback hell
  - Promises
    - Brief use of promises
    - Methods
      - The **`.then` ** method accepts a callback. The callback will be called when the promise is done
- What do we remember about using JSON APIs?
  - We can access JSON APIs from the browser using **A**synchronous **J**avaScript **A**nd **X**ML
  - First, we will need to have an API to talk to
    - **json-server** is a tool we will use to build very basic APIs during this mod
      - Installation
      - Usage
      - Testing from POSTMAN
- How can we talk to an API from the browser?
  - The browser has a built in method to make http requests for us called **fetch**
  - What does fetch return?
  - What does fetch resolve with?
    - The `.json()` method parses something useful from the response object fetch gives us
-  `fetch` options
  - url
  - method (*GET, POST, PATCH, PUT, or DELETE*)
  - headers (*an Object*)
    - Content-Type
  - body (*Must always be a string! Use `JSON.stringify`*)
- Implementing our deliverables `fetch`
  - Using `fetch` to render data
  - Using fetch to persist changes to data

