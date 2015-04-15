var request     = require('request')
  , express     = require('express')
  , app         = express()
  , bodyParser  = require('body-parser')
  , cheerio     = require('cheerio')
  , mongoose    = require('mongoose')
  , cors        = require('cors')
  , searchParams= require('./server/searchParams.js')
  , urlParams   = require('./server/urlParams.js')
  , url         = require('./server/url.js')
  , Ad          = require('./server/ads/ad.schema.js')


app.use(bodyParser.json());
app.use(cors());
mongoose.connect('mongodb://localhost/db_name');


//----------Routes-------------

app.get('/', function(req,res) {
  getAds(url, function(ads) {
    res.send(ads);
    console.log(url);
  })
});

app.get('/classifieds', function(req,res) {
  res.send("Hello from the server");
});

//---------Methods-------------

function getAds(url, callback) {
  request(url, function(error, response, html) {
    if(!error && response.statusCode === 200) {
      
      var $ = cheerio.load(html);
      var adsArray = []; 

      $('div.adBox').each(function(i, element) {
        var ad = createAd($(this));
        adsArray.push(ad);
      });

      callback(adsArray);
    
    }
  })
}

function createAd(self) {
  var baseUrl = 'http://www.ksl.com/index.php'

  var classifiedAd = 
    {
        title       :  self.find('.adTitle').text().trim()
      , link        :  baseUrl + self.find('.listlink').attr('href') 
      , description :  self.find('.adDesc').text().trim()
      , price       :  self.find('.priceBox').find('span').first().text().trim()
      , location    :  self.find('.adTime').find('span').text().trim()
      , imgUrl      :  self.find('img').attr('src')
      // , adTime      :  getTextNodesIn($(this).find('.adTime'))
    }
  //remove dollar signs from price and trailing cents
  classifiedAd.price = Number(classifiedAd.price.replace(/[^0-9\.]+/g,"") / 100);

  return classifiedAd;
}

function getTextNodesIn(element) {
  element.filter(function() {
      return this.nodeType == 3;
  });
}







var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});