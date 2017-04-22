var amazon = require('amazon-product-api');

var client = amazon.createClient({
  awsId: "",
  awsSecret: "",
  awsTag: ""
});

function search() {
  alert("Hello! I am an alert box!!");
  client.itemLookup({
    idType: 'UPC',
    itemId: '635753490879',
    responseGroup: 'ItemAttributes,Offers,Images'
  }, function(err, results, response) {
    if (err) {
      console.log(err);
    } else {
      console.log(results);
    }
  });
};

function alert() {
  alert("Hello! I am an alert box!!");
};
