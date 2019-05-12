FROM nginx
ENV html_dir=/Users/employee/Desktop/work/h5/dist/ project_dir=/home/www/mynginx
# WORKDIR ${project_dir}

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

COPY ${html_dir}  /usr/share/nginx/html/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]