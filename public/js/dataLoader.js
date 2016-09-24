function readCSV(csv) {
  companies = d3.csvParse(csv).map((c) => [
        obj['Symbol']
    ]);
    return companies;
}

function companyPerformance(companies, cb) {
    const Aladdin = new blk.API();
    let dataOut = {};
    Aladdin.performanceData({
      identifiers: company_names_list.join(',')
    }, function(data) {
      newData = {};
      resultList = data['resultMap']['RETURNS'];
      newData['name'] = resultList.map(
        (obj) => [obj['ticker']]
      )
      newData['oneYearAnnualized'] = resultList.map(
        (obj) => [obj['oneYearAnnualized']]
      )
      fn(newData);
    })
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