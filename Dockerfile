# Use an official Node.js runtime as the base image
FROM node:18-alpine
# Set the working directory inside the container
WORKDIR /usr/src/app
# Copy package.json and package-lock.json to the container
COPY package*.json ./
# Install dependencies
RUN npm install
# Copy the rest of the application code to the container
COPY . .
RUN npm run build
EXPOSE 3000
# Start the Next.js application using npm start
CMD ["npm", "start"]
