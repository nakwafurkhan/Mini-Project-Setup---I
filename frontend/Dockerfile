# Use Node.js Alpine image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all frontend files
COPY . .

# Expose frontend port (Vite default is 5173, but we'll map to 3000)
EXPOSE 5173

# Start Vite dev server with host flag
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
