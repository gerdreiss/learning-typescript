npm install -g parcel

mkdir src

mkdir build

touch src/index.ts

echo 'console.log("hello there");' > src/index.ts

parcel index.html

npm install -g json-server
npm install axios