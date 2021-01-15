const express = require('express');
const apiMetrics = require('prometheus-api-metrics');
const client = require('prom-client');

const counter = new client.Counter({
  name: 'greeting_counter',
  help: 'metric_help',
});

// visit localhost:3001/metrics or localhost:3001/metrics.json to view metrics

const app = express();

app.use(apiMetrics());

app.get('/hello', (req, res) => {
    counter.inc();  // increment by 1
    res.send('Hello, world!');
});

app.get('/hello10', (req, res) => {
    counter.inc(10);    // increment by 10
    res.send('Hello, world x10!');
});



app.listen(3001, (err) => {
    if (err) {
        console.log('Error: ', err);
    }
    console.log('listening on 3001');
});
