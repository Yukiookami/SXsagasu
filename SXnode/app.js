const http = require('http');
const yearSa = require('./public/yearSagasu')
const querystring=require('querystring');

http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.setHeader('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    
    let str = ''
    req.on('data', data => {
        str += data
    })

    req.on('end', () => {
        let {year} = querystring.parse(str)
        res.write('{"err": 0, "year":' + yearSa(year) + '}')
        res.end()
    })
}).listen(8089)