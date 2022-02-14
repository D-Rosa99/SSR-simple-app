const express = require("express");
const React = require("react");
const { renderToString } = require("react-dom/server");
const Home = require("./client/component/Home").default;

const app = express();

const PORT = 3000;

app.use(express.static("public"));
app.get("/", (req, res) => {
  const content = renderToString(<Home />);
  const htmlScript = `
    <html>
      <head></head>
      <body>
        <div id="root">${content}</div>
      </body>
      <script src="bundle.js"></script>
    </html>
  `;

  res.status(200).send(htmlScript);
});

app.listen(PORT, console.log(`Server is running in port ${PORT}`));
