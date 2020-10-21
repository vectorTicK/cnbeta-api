// module.exports = () => {
//   var request = require("sync-request");
//   let abc = [];
//   var result = request("get", "https://www.cnbeta.com/backend.php");
//   var titles = [];
//   var parseString = require("xml2js").parseString;
//   parseString(result.getBody(), function (err, result) {
//     var data = result.rss.channel[0].item;
//     var reformattedArray = data.map((obj) => {
//       var rObj = {};
//       rObj.title = obj.title;
//       rObj.link = obj.link;
//       return rObj;
//     });
//     abc = reformattedArray;
//   });
//   return abc;
// };

module.exports = async (link) => {
  var request = require("request");
  return new Promise((resolve) => {
    request(link, function (error, response, body) {
      var titles = [];
      var parseString = require("xml2js").parseString;
      parseString(body, function (err, result) {
        var data = result.rss.channel[0].item;
        reformattedArray = data.map((obj) => {
          var rObj = {};
          rObj.title = obj.title;
          rObj.link = obj.link;
          return rObj;
        });
        resolve(reformattedArray);
      });
    });
  });
};
