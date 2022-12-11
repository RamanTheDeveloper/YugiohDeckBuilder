const cardsjson = require('./cardinfo.json')
const fs = require('fs')
let length = cardsjson.data.length

//let cardsJsonFiltered = cardsjson.data.filter(card => cardsjson.key )

//console.log(cardsjson);
for(i = 0; i < length; i++){
    //console.log(cardsjson.data[i])
    delete cardsjson.data[i]["card_sets"]
    delete cardsjson.data[i]["card_prices"]
}
//console.log(cardsjson);

var cards = JSON.stringify(cardsjson)

fs.appendFile('FormattedData.json', cards, function(err, result){ if(err) console.log('error', err)})
