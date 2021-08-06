const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");

const middlewares = jsonServer.defaults({ static: "./build" });

server.use(middlewares);
server.use("/api", router);
server.use(function ({ path }, res) {
  const hashPath = `/#${path}`;
  console.log(hashPath);
  res.redirect(hashPath);
});

const port = process.env.PORT || 3004;

server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
