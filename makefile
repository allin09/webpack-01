a.txt: docker/nginx/log/access.log docker/nginx/log/error.log
	cat docker/nginx/log/access.log docker/nginx/log/error.log > a.txt
