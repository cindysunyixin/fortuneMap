function readCSV(csv) {
	company_names_list = d3.csvParse(csv)
	company_names_list = company_names_list.map(function(obj) {return {"symbol": obj['Symbol'], "name": obj["Name"]})
	return company_names_list
}


function companyPerformance(company_names_list, fn) {
    var Aladdin = new blk.API();
    var dataOut = {};
    Aladdin.performanceData({
    	identifiers: company_names_list.join(',')
  	}, function(data) {
  		fn(data);
  	})
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