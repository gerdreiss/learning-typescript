mkdir build
mkdir src
npm init -y
tsc --init
npm install nodemon concurrently express body-parser cookie-session 
npm install @types/express @types/cookie-session @types/body-parser
echo "import express, { Request, Response } from 'express';\n" >> src/index.ts
echo "const app = express();" >> src/index.ts
echo "app.get('/', (req: Request, res: Response) => {" >> src/index.ts
echo "  res.send('Hello World!');" >> src/index.ts
echo "});" >> src/index.ts
echo "app.listen(3000, () => {" >> src/index.ts
echo "  console.log('Listening on port 3000');" >> src/index.ts
echo "});" >> src/index.ts
npm start