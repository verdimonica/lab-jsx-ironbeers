const React = require('react');

function Layout(props) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>JSX Ironbeers</title>
      </head>
      <body>
        <nav>
          <a href="/"> Home </a>
          <a href="/beers"> Beers </a>
          <a href="/random-beers"> Random Beer </a>
        </nav>
        {/* This is the only page that will have full html setup */}

        {props.children}

      </body>
    </html>
  );
}

module.exports = Layout;
