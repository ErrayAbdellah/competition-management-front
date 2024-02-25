FROM node:16.16.0 as build

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm install -g @angular/cli@16.2.0

COPY . .

RUN ng build --configuration=production

EXPOSE 4200

CMD ["ng","serve"]
