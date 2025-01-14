FROM ruby:3.2

# Install dependencies
RUN apt-get update -qq && apt-get install -y nodejs postgresql-client

# Set working directory
WORKDIR /app

# Add Gemfile and install dependencies
COPY Gemfile* ./
RUN bundle install

# Copy application code
COPY . .

# Set Rails environment
ENV RAILS_ENV production
ENV RAILS_SERVE_STATIC_FILES true

# Precompile assets
RUN bundle exec rake assets:precompile

# Start the server
CMD ["rails", "server", "-b", "0.0.0.0"]
