FROM ruby:3.2

# Install system dependencies
RUN apt-get update -qq && \
    apt-get install -y \
    build-essential \
    libpq-dev \
    nodejs \
    postgresql-client

# Set working directory
WORKDIR /app

# First, copy just the Gemfile and Gemfile.lock
COPY api/Gemfile api/Gemfile.lock ./

# Install gems
RUN bundle install

# Now copy the rest of the application
COPY api .

# Set Rails environment
ENV RAILS_ENV=production
ENV RAILS_SERVE_STATIC_FILES=true

# Precompile assets
RUN bundle exec rake assets:precompile

# Start the server
CMD ["rails", "server", "-b", "0.0.0.0"]
