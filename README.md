# Rails5 + Webpack Sample

- Ruby 2.3.1
- Rails 5.0.0
- Node v6.2.2

# Run App

```
$ git clone git@github.com:ufotsuboi/rails-webpack-sample.git
$ cd rails-webpack-sample
$ bundle install --path vendor/bundle
$ npm install

# for production
$ npm run build
$ RAILS_ENV=production bundle exec rails server

# for development (run both)
$ RAILS_ENV=development bundle exec rails server 
$ npm run dev
```
