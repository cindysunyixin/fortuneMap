function readCSV(csv) {
    companies = d3.csvParse(csv).map((c) => [
        obj['Symbol']
    ]);
    return companies;
}

function companyPerformance(companies) {
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
        return newData;
    });
}

function securityData() {
    // query = "blackrock assetType:Stock"
    //  Aladdin.searchSecurities({
    //      query: query,
    //      responseFields: JSON.stringify(['description', 'securityId', 'ticker'])
    //    }, function(data) {
    //  console.log(data)
    //  })
}