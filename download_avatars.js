var request = require('request');

console.log('Welcome to the GitHub Avatar Downloader!');
var repoOwner = 'jquery';
var repoName = 'jquery';
var GITHUB_USER = "ALOEMC2";
var GITHUB_TOKEN = "0eef002613ca18cfdc98f35d213007e887787c6a";
var requestURL = 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';
console.log (requestURL)
function getRepoContributors(repoOwner, repoName, cb) {
  getRepoContributors("jquery", "jquery", function(err, result) {
  console.log("Errors:", err);
  console.log("Result:", result);
});
}
//}https://api.github.com/repos/jquery/jquery/contributors