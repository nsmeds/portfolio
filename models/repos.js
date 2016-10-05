(function(module) {
  var reposObj = {};

  reposObj.allRepos = [];

  reposObj.requestRepos = function(callback) {
    $.ajax({
      url: '/github/users/nsmeds/repos',
      headers: {Authorization: 'token ' + process.env.GITHUB_TOKEN},
      success: successHandler
    });
    function successHandler(data) {
      reposObj.allRepos = data;
      callback();
    };
  };

  reposObj.withTheAttribute = function(myAttr) {
    return reposObj.allRepos.filter(function(aRepo) {
      return aRepo[myAttr];
    });
  };

  module.reposObj = reposObj;
})(window);
