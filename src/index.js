const express = require("express");
const React = require("react");
const { renderToString } = require("react-dom/server");
const Home = require("./client/component/Home").default;

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  const content = renderToString(<Home />);
  res.status(200).send(content);
});

app.listen(PORT, console.log(`Server is running in port ${PORT}`));
