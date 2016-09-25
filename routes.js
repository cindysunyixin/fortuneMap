'use strict';


function readCSV(csv) {
    companies = d3.csvParse(csv).map((c) => [
        obj['Symbol']
    ]);
    return companies.join(',');
}

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

            var successCallback = function (data) {

                let newData = [];
                data = data['resultMap']['RETURNS'];
                // console.log(data)
                data.forEach(d => {
                    // console.log(d)
                    let entry = {};
                    entry['name'] = d['ticker'];
                    entry['value'] = d['performanceChart'][d['performanceChart'].length - 1][0];
                    newData.push(entry);
                });
                console.log("start stringify")
                console.log("start post")                
                res.json(newData);
                console.log("finished post")
            };


            var url = "https://www.blackrock.com/tools/hackathon/performance?identifiers=AAPL&useCache=true";
            
            // $.getJSON(url, successCallback);
            $.ajax({
              url: url,
              dataType: 'json',
              success: successCallback
              // success: function(result){
              //   console.log(result)
              //   alert("token recieved: " + result.token);
              // },
              // error: function(request, textStatus, errorThrown) {
              //   console.log(request)
              //   console.log(textStatus)
              //   console.log(errorThrown)
              //   alert(textStatus);
              // },
              // complete: function(request, textStatus) { //for additional info
              //   alert(request.responseText);
              //   alert(textStatus);
              // }
            });

            });
        }
    })
};