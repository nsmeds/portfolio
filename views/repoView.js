(function(module) {
  var repoView = {};
  var repoCompiler = function(repo) {
    var template = Handlebars.compile($('#repo-template').text());
    return template(repo);
  };

  repoView.renderRepos = function() {
    $('#repos ul').empty().append(
      reposObj.withTheAttribute('name')
      .map(repoCompiler)
    );
  };

  reposObj.requestRepos(repoView.renderRepos);
  module.repoView = repoView;
})(window);
