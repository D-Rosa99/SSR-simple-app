import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import Routes from "../../client/Routes";

const renderer = (req, res) => {
  const content = renderToString(
    <StaticRouter location={req.path} context={{}}>
      <Routes />
    </StaticRouter>
  );

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
};

module.exports = renderer;
