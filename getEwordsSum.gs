function getEwordsSum(word) {
    var prop = PropertiesService.getScriptProperties().getProperties();

  var html = UrlFetchApp.fetch('http://e-words.jp/w/'+ word +'.html').getContentText("Shift_JIS");
  var doc = Parser.data(html)
                    .from("<div id=\"Summary\"><p>")
                    .to("</p></div>")
                    .build().replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, '');;
  return doc;
}
