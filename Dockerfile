FROM node:latest

RUN apt-get update

RUN mkdir -p /usr/src/myself
WORKDIR /usr/src/myself
COPY ./build /usr/src/myself/app
RUN npm install -g serve

EXPOSE 3000
CMD ["serve", "-s", "app", "-l", "3000"]
