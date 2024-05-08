function LIGHTHOUSE(url) {
  const BASE_URL = "https://lighthouse-sheets-public-v4e5t2rofa-nw.a.run.app"
  var request_url = BASE_URL+"?url="+encodeURIComponent(url)
  var response = UrlFetchApp.fetch(request_url)
  var result = JSON.parse(response.getContentText())
  return(result.categories.performance.score * 100)
}
