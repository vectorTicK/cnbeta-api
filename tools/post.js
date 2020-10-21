module.exports = (num, abc) => {
  const cheerio = require("cheerio");
  var request = require("sync-request");
  let link = abc[num].link;
  console.log(link);
  var result = request("get", "https://m.cnbeta.com/wap/view/1042937.htm");
  const $ = cheerio.load(result.getBody().toString());
  return $(".content").html();
};
