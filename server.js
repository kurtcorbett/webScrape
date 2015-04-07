var request     = require('request')
  , express     = require('express')
  , app         = express()
  , bodyParser  = require('body-parser')
  , cheerio     = require('cheerio')
  , searchParams= require('./searchParams.js');

app.use(bodyParser.json());

var urlParams = 

  {   nid             : searchParams.nid             || ''
    , sid             : searchParams.sid             || ''
    , cat             : searchParams.cat             || ''
    , search          : searchParams.search          || ''
    , zip             : searchParams.zip             || ''
    , distance        : searchParams.distance        || ''
    , min_price       : searchParams.min_price       || ''
    , max_price       : searchParams.max_price       || ''
    , type            : searchParams.type            || ''
    , category        : searchParams.category        || ''
    , subcat          : searchParams.subcat          || ''
    , sold            : searchParams.sold            || ''
    , city            : searchParams.city            || ''
    , addisplay       : searchParams.addisplay       || ''
    , sort            : searchParams.sort            || ''
    , userid          : searchParams.userid          || ''
    , markettype      : searchParams.markettype      || ''
    , adsstate        : searchParams.adsstate        || ''
    , nocache         : searchParams.nocache         || ''
    , o_facetSelected : searchParams.o_facetSelected || ''
    , o_facetKey      : searchParams.o_facetKey      || ''
    , o_facetVal      : searchParams.o_facetVal      || ''
    , viewSelect      : searchParams.viewSelect      || ''
    , viewNumResults  : searchParams.viewNumResults  || ''
    , sort            : searchParams.sort            || ''
  }



// parse url and extract params object

function getUrlParamsObject(url) {
  var params = url.match(/(\w*\d*?)=/gmi);
  var urlParamsObj = {} 
  params.map(function(param) {
    urlParamsObj[param] = ''
  })

  return urlParamsObj;
}


function getData(urlParams, callback) {
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


  request(url, function(error, response, html) {
    if(!error && response.statusCode === 200) {
      var $ = cheerio.load(html);

      var adsArray = []  

      $('div.adBox').each(function(i, element) {

        var classifiedAd = 
        {
            adTitle     :  $(this).find('.adTitle').text().trim()
          , description :  $(this).find('.adDesc').text().trim()
          , price       :  $(this).find('.priceBox').find('span').first().text().trim()
          , location    :  $(this).find('.adTime').find('span').text().trim()
          ,  img        :  $(this).find('img').attr()
        }
        console.log(classifiedAd.price);
        adsArray.push(classifiedAd);

      });
      console.log(url);
      callback(adsArray);
    }
  })
}

app.get('/', function(req,res) {
  getData(urlParams, function(ads) {
    res.send(ads)
  })
});






var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});