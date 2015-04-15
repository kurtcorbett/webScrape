var Ad  = require('./server/ads/ad.js');
  , sampleAds = require('./sampleAds.js')

function saveAd(adObject) {
  var newAd = Ad({
    title: adObject.title,
    link: adObject.link,
    description: adObject.description,
    price: adObject.price,
    location: adObject.location,
    imgUrl: adObject.imgUrl,
  })

  newAd.save(function(err) {
    if (err) throw err;

    console.log('Ad Created!')
  }); 
}

saveAd(sampleAds[0]);
saveAd(sampleAds[1]);
saveAd(sampleAds[2]);


















