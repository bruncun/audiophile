const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");

const middlewaresOptions =
  process.env.NODE_ENV === "production" ? { static: "./build" } : null;
const middlewares = jsonServer.defaults(middlewaresOptions);

server.use(middlewares);
server.use(router);

const port = process.env.PORT || 3004;

server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
