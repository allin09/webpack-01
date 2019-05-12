FROM ubuntu

LABEL name="webpack-01" version="1.0.0"

ENV work_dir=/home/www/webpack-01

RUN apt-get update\
    && apt-get install -y curl \
    && curl -sL https://deb.nodesource.com/setup_8.x | bash - \
    && apt-get install -y\
    apt-utils\
    nano\
    tree\
    nodejs\
    dumb-init\
    && apt-get clean \
    && apt-get autoclean \
    && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

WORKDIR ${work_dir}

COPY . ${work_dir}

RUN npm install

EXPOSE 9999

ENTRYPOINT [ "/usr/bin/dumb-init" ]

CMD npm run start