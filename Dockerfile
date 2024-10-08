FROM node

WORKDIR /app

COPY package.json .

RUN npm install

RUN npm install -g typescript

COPY . .

EXPOSE 80

CMD ["npm" , "run" , "dev"]
