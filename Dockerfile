FROM node
EXPOSE 3000

WORKDIR /home/app

COPY package.json /home/app/
COPY yarn.* /home/app/

RUN yarn

COPY . /home/app

RUN chmod +x ./init.sh

CMD ./init.sh
