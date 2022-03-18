docker run \
  --name postgres \
  -p 5432:5432 \
  -e POSTGRES_PASSWORD=postgres \
  -d postgres 

docker run \
  --name pgadmin4 \
  -p 8000:80 \
  -e PGADMIN_DEFAULT_EMAIL=admin@postgres.org \
  -e PGADMIN_DEFAULT_PASSWORD=admin \
  -d dpage/pgadmin4

