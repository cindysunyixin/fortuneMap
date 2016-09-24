'use strict';


module.exports = function (app) {
    // render the index page
    app.get('/', (req, res) => {
        res.sendFile(__dirname + '/views/index.html');
    });

    // fetch data from BlackRock API and return processed data
    app.get('/data', (req, res) => {
        const Aladdin = new blk.API();
        let dataOut = {};
        Aladdin.performanceData({
            identifiers: company_names_list.join(',')
        }, function (data) {
            let newData = {};
            data = data['resultMap']['RETURNS'];
            data.forEach(d => {
                let entry = {};
                entry['name'] = d['ticker'];
                entry['value'] = d['performanceChart'][d['performanceChart'].length - 1][0];
                newData.push(entry);
            });
            res.send(json.stringify(newData));
        });
    });
};