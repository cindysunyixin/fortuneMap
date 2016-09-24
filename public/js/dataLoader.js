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
    	identifiers: companies.join(',')
  	}, data => {
  		cb(data);
  	});
}

function securityData() {
	// query = "blackrock assetType:Stock"
   //  Aladdin.searchSecurities({
   //      query: query,
   //      responseFields: JSON.stringify(['description', 'securityId', 'ticker'])
   //    }, function(data) {
  	// 	console.log(data)
   //  })
}