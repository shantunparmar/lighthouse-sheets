const express = require('express');
const app = express();
const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');

app.get('/', async (req, res) => {
    if(req.query && req.query.url) {
        console.log(req.query.url)
        const url = decodeURIComponent(req.query.url)
        console.log(url)
        const chrome = await chromeLauncher.launch({chromeFlags: ['--headless', '--no-sandbox','--disable-gpu']});
        const options = {logLevel: 'info', output: 'html', port: chrome.port};
        const runnerResult = await lighthouse(url, options);

        await chrome.kill();
        res.json(runnerResult.lhr)
    }
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
