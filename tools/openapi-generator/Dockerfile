FROM timbru31/java-node:jdk-14
RUN npm install @openapitools/openapi-generator-cli -g
RUN mkdir /local
WORKDIR /local
COPY . .

## Add the wait script to the image
ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.10.0/wait /wait
RUN chmod +x /wait

CMD ["sh", "generate.sh"]