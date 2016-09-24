$(function() {

  function parseDate(dateInt) {
    var dateStr = dateInt.toString();
    var year = parseFloat(dateStr.slice(0, 4));
    var month = parseFloat(dateStr.slice(4, 6)) - 1;
    var day = parseFloat(dateStr.slice(6, 8));
    var date = new Date(year, month, day);
    return date;
  }

  function formatDate(date) {
    return date.toISOString().substring(0, 10);
  }

	var $search = $('#search');
  window.searchTimeout = null;
  $search.on('input', function() {
    var query = this.value;
    window.clearTimeout(window.searchTimeout);
    window.searchTimeout = window.setTimeout(function() {
      var Aladdin = new blk.API();
      Aladdin.searchSecurities({
        query: query,
        responseFields: JSON.stringify(['description', 'securityId', 'ticker'])
      }, function(data) {
        var sec = data.resultMap.SEARCH_RESULTS[0].resultList[0];
        $('#description').html(sec.description + ' (' + sec.ticker + ')');
        Aladdin.performanceData({
          identifiers: sec.securityId,
          outputDataExpression: 'resultMap[\'RETURNS\'][0].latestPerf'
        }, function(data) {
          $('#asOfDate').html(formatDate(parseDate(data.asOfDate)));
          $('#oneDay').html(data.oneDay ? (data.oneDay * 100).toFixed(2) + '%' : '-');
          $('#oneMonth').html(data.oneMonth ? (data.oneMonth * 100).toFixed(2) + '%' : '-');
          $('#oneYear').html(data.oneYear ? (data.oneYear * 100).toFixed(2) + '%' : '-');
        });
      });
    }, 250);
  });
  $search.trigger('input');
});