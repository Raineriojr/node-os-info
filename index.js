import http from 'http';

import { OSInfo } from './status.js';

const baseurl = 'http://localhost';
const port = 3000;

http.createServer((req, res) => {
  let url = req.url;

  if (url === '/status') {
    res.end(JSON.stringify(OSInfo, null, 2))
  } else {
    res.end('<h1>Bem vindo</h1>')
  }

}) .listen(port, () => {
  console.log(`Server running in ${baseurl}:${port}`)
})