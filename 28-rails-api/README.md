# Rails API

## Vocabulary

* Cross Origin Resource Sharing (CORS)
* rails `--api` option
* `render` method
* `json: ` option
*  `methods: ` option

## Deliverables

* The ability to list `abilities` seperately from dragons

## Outline

* Introduction
    * How would we have accomplished this with Rails?
        * Associations are defined on the server
        * JSON server has served us well until now, but is not a robust tool for API development
* Creating a Rails API 
    * We don't want to use all of the features of a rails application
    * the **`--api`** option allows us to create a Rails API with only the features we need
* Rails Refresher
    * Creating Models
    * Creating Controllers
        * Using **`render json:`** to send JSON to the client
* Associations with Rails API
    * Using **`methods`**  and/or **`includes`** to include nested resources when sending a response
* Best practices: fetching data only when we need it
    * Refactoring our front end to get a dragons abilities only when we show its details



