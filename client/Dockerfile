FROM node:16-alpine

WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies, mdb-react-ui-kit, and Font Awesome
RUN npm install && \
    npm install mdb-react-ui-kit && \
    npm install @fortawesome/fontawesome-free

# Copy the rest of your application code
COPY . .

EXPOSE 3000

CMD ["npm", "start"]
