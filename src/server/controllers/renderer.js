import "babel-polyfill";
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { Provider } from "react-redux";
import reduxStore from "../createStore";
import Routes from "../../client/Routes";

const renderer = (req, res) => {
  const content = renderToString(
    <Provider store={reduxStore()}>
      <StaticRouter location={req.path} context={{}}>
        <Routes />
      </StaticRouter>
    </Provider>
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
