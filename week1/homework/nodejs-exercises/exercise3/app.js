var http = require('http');

//create a server
let server = http.createServer(function (req, res) {
  if (req.url === '/script.js') {
    res.setHeader('Content-Type', 'text/javascript')
    res.write(
      `
      document
      .getElementById('content')
      .appendChild(document.createTextNode('Welcome to Server-land!'))
      `
    )
  } else if (req.url === '/style.css') {
    res.setHeader('Content-Type', 'text/css')
    res.write(
      `
    h1 { color : blue;
          background-color: red;
        }
    div {
        color: red;
        background-color: blue;
    } 
    * {
      padding: 10px;
    }
    `
    )
  } else {
    res.setHeader('Content-Type', 'text/html');
    res.write(
      `
    <html>
      <head>
        <title>My First Web Server</title>
        <link rel="stylesheet" type="text/css" href="style.css" />
      </head>
      <body>
        <h1>Hello, anyone there?</h1>
        <div id="content"></div>
        <script src="script.js"></script>
        </body>
    </html>
  `
    )
  }

  ; //send a response back to the client

  res.end(); //end the response
});

server.listen(3000); //the server listens on port 3000