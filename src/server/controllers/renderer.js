import React from "react";
import { renderToString } from "react-dom/server";
import Home from "../../client/components/Home";

const renderer = (req, res) => {
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
};

module.exports = renderer;
