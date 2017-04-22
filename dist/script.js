var amazon = require('amazon-product-api');


var client = amazon.createClient({
  awsId: "",
  awsSecret: "",
  awsTag: ""
});

function search() {
  console.log("Searching");
  client.itemSearch({
    director: 'Quentin Tarantino',
    actor: 'Samuel L. Jackson',
    searchIndex: 'DVD',
    audienceRating: 'R',
    responseGroup: 'ItemAttributes,Offers,Images'
  }).then(function(results){
    console.log(results);
  }).catch(function(err){
    console.log(err);
  });
};

function alert() {
  alert("Hello! I am an alert box!!");
};
