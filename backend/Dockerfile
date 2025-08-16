FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install
RUN npm install nodemon --save-dev

COPY . .

EXPOSE 5001

CMD ["npm", "run", "dev"]