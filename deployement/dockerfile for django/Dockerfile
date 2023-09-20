# Use an official Python runtime as a parent image
FROM python:3.8-slim

# Set environment variables
ENV PYTHONUNBUFFERED 1

# Set the working directory inside the container
WORKDIR /app

# Copy the Pipfile and Pipfile.lock into the container
COPY Pipfile Pipfile.lock /app/

# Install dependencies
RUN pip install pipenv && pipenv install --deploy --ignore-pipfile

# Copy the Django project files into the container
COPY . /app/

# Expose the port that Django runs on (default is 8000)
EXPOSE 8000

# Start the Django development server
CMD ["pipenv", "run", "python", "manage.py", "runserver", "0.0.0.0:8000"]