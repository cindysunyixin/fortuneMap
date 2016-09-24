'use strict';


module.exports = function (app) {
  var jsdom = require('jsdom');
  var html = '<html><body></body></html>';

  jsdom.env({
    html: html,
    scripts: ['https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.js'],
    done: function storeId(err, window) {
        var $ = window.jQuery;

        // render the index page
        app.get('/', (req, res) => {
            res.sendFile(__dirname + '/views/index.html');
        });

        app.get('/data', (req, res) => {

            var successCallback = function (err, data) {
                let newData = {};
                data = data['resultMap']['RETURNS'];
                data.forEach(d => {
                    let entry = {};
                    entry['name'] = d['ticker'];
                    entry['value'] = d['performanceChart'][d['performanceChart'].length - 1][0];
                    newData.push(entry);
                });
                res.send(json.stringify(newData));
            };

            var url = "https://www.blackrock.com/tools/api-tester/hackathon?apiType=performanceData&identifiers=AAPL&useCache=true";
            
            $.getJSON(url, successCallback);

            });
        }
    })
};