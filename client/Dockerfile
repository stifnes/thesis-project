# Use official Node.js LTS image
FROM node:18

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the app
COPY . .

# Build the Next.js app
RUN npm run build

# Use a lightweight web server for production (e.g., Next.js's built-in)
EXPOSE 3000
CMD ["npm", "start"]
