const cardsjson = require('./cardinfo.json')

//console.log(cardsjson.data[0].name)

/*for(i = 0; i < cardsjson.data.length; i++){
    console.log('Name: ', cardsjson.data[i].name);
    console.log('');
    console.log('Type: ', cardsjson.data[i].type);
    console.log('');
    console.log('Desc: ', cardsjson.data[i].desc);
    console.log('');
    console.log('Race: ', cardsjson.data[i].Race);
    console.log('');
    console.log('');
    console.log('archtype: ', cardsjson.data[i].archtype);
    console.log('');
    console.log('');
    console.log('card_images: ', cardsjson.data[i].card_images);
    console.log('');
    console.log('--------------------------------------------------');
    console.log('');
}*/

function JsonData(json){
    console.log('{"data":');
    for(i = 0; i < cardsjson.data.length; i++){
        console.log('[{"id":', cardsjson.data[i].id,  ',');
        console.log('"name":"', cardsjson.data[i].name, '",');
        console.log('"type":"', cardsjson.data[i].type, '",');
        console.log('"desc":"', cardsjson.data[i].desc, '",');
        console.log('"race":"', cardsjson.data[i].race, '",');
        console.log('"archetype":"', cardsjson.data[i].archetype, '",');
        console.log('"card_images":[{"id":'. cardsjson.data[i].card_images.id, ',');
        console.log('"image_url":"', cardsjson.data[i].card_images.image_url, '",');
        console.log('"image_url_small":"'. cardsjson.data[i].card_images.image_url_small, '"}]');
    }
}

JsonData(cardsjson)

