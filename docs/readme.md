docker run -d --name postgresql -e POSTGRES_USER=admin -e POSTGRES_PASSWORD=admin -p 5432:5432 -v $PWD/data:/var/lib/postgresql/data postgres
