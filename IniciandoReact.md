yarn create react-app letmeask --template typescript

remoção de todos os arquivos dentro do public, e deixar apenas o index.html

na pasta SRC, deixar apenas {
app.tsx,
index.tsx,
react-app-env.d.ts
}

dentro de index.html deixar assim {

  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>letmeask</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>
}

no index.tsx {

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
<React.StrictMode>
<App />
</React.StrictMode>,
document.getElementById('root')
);
}

app.tsx {
function App() {
return (

<h1>Hello World</h1>
);
}

export default App;
}

yarn start

instalação do firebase

- yarn add firebase
