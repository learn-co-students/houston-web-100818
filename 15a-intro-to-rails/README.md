### What is Rails

Rails was created in 2003 by David Heinemeier Hansson, while working on the code base for Basecamp, a project management tool by 37signals. David extracted Ruby on Rails and officially released it as open source code in July of 2004. Despite rapid iteration of the Rails code base throughout the years, it has stuck to three basic principles:

* Ruby Programming Language
* Model-View-Controller Architecture
* Programmer Happiness

Rails was created with the goal of increasing programmers' happiness and productivity levels. In short, with Rails you can get started with a full-stack web application by quickly creating pages, templates and even query functions.

Rails heavily emphasizes _**"Convention over Configuration."**_ This means that a programmer only needs to specify and code out the non-standard parts of a program. Even though Rails comes with its own set of tools and settings, you're certainly not limited to library of rails commands and configurations. Developers are free to configure their applications however they wish, though adopting conventions is certainly recommended.

![](https://s3-us-west-2.amazonaws.com/student-resources/uploads/lecture/Screen+Shot+2017-06-09+at+10.04.20+AM.png)

#### A Look Back

As we look back at the history of Rails, let's review some of the more significant releases over the years.

* Rails 1.0 \(Dec 2005\) - Mostly polishing up and closing pending tickets from the first release along with the inclusion of Scriptaculous 1.5 and Prototype 1.4.
* Rails 1.2 \(Jan 2007\) - REST and generation HTTP appreciation
* Rails 2.0 \(Dec 2007\) - Better routing resources, multi-view, HTTP basic authentication, cookie store sessions
* Rails 2.0 \(Nov 2008\) - i18n, thread safe, connection pool, Ruby 1.9, JRuby
* Rails 2.3 \(Mar 2009\) - Templates, Engines, Rack
* Rails 3.0 \(Aug 2010\) - New query engine, new router for controller, mailer controller, CRSF protection
* Rails 3.1 \(Aug 2011\) - jQuery, SASS, CoffeeScript, Sprockets with Assets Pipeline
* Rails 3.2 \(Jan 2012\) - Journey routing engine, faster development mode, automatic query explains, tagged loggin for multi-user application
* Rails 4.0 \(June 2013\) - Rails 4.2: Active Job, Asynchronous Mails, Adequate Record, Web Console, Foreign Keys.
* Rails 5.0 \(June 2016\) - Notable additions in Rails 5.0 include an option for an API-only application suitable for use as a backend to JavaScript or mobile applications. Also Action Cable for live features such as chat and notifications.

Over the years, Rails has indeed made it easier for beginners to dive into web development and build large complex applications. Some popular websites built on Rails include Twitter \(at one point\), GitHub and, of course, 37signals' very own Basecamp. Although it has often been criticized for performance and bloat, Rails continues its iterations with an ever-growing developer community and a vibrant ecosystem.

[Built With Rails](https://skillcrush.com/2015/02/02/37-rails-sites/)

---
Outline
1. Create Rails app
`rails new rails_app`
`cd rails_app`
`rails generate scaffold Post title:string content:text author:string`
`rake db:migrate`
`rails s`
- Navigate to `localhost:3000/posts`

2. Generate a Controller
`rails g controller pets index show`

3. Create Views

4. Generate a Model
`rails g model pets name:string animal:string`

5. Generate a Migration
`rails g migration AddAgeToPets age:integer`
