FROM node:14-alpine
WORKDIR /service

RUN npm install
RUN npm build
COPY . .

## Add the wait script to the image
ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.10.0/wait /wait
RUN chmod +x /wait

CMD npm start