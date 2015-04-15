var urlParams = require('./urlParams')

var url = 'http://www.ksl.com/index.php?nid=231' 
  // + '&nid=' + urlParams.nid
  + '&sid=' + urlParams.sid
  + '&cat=' + urlParams.cat
  + '&search=' + urlParams.search
  + '&zip=' + urlParams.zip
  + '&distance=' + urlParams.distance
  + '&min_price=' + urlParams.min_price
  + '&max_price=' + urlParams.max_price
  + '&type=' + urlParams.type
  + '&category=' + urlParams.category
  + '&subcat=' + urlParams.subcat
  + '&sold=' + urlParams.sold
  + '&city=' + urlParams.city
  + '&addisplay=' + urlParams.addisplay
  + '&sort=' + urlParams.sort
  + '&userid=' + urlParams.userid
  + '&markettype=' + urlParams.markettype
  + '&adsstate=' + urlParams.adsstate
  + '&nocache=' + urlParams.nocache
  + '&o_facetSelected=' + urlParams.o_facetSelected
  + '&o_facetKey=' + urlParams.o_facetKey
  + '&o_facetVal=' + urlParams.o_facetVal
  + '&viewSelect=' + urlParams.viewSelect
  + '&viewNumResults=' + urlParams.viewNumResults
  + '&sort=' + urlParams.sort;


// parse url and extract params object
function getUrlParamsObject(url) {
  var params = url.match(/(\w*\d*?)=/gmi);
  var urlParamsObj = {} 
  params.map(function(param) {
    urlParamsObj[param] = ''
  })
  return urlParamsObj;
}


module.exports = url;