(function(module) {
  var repoView = {};
  var repoCompiler = function(repo) {
    var source = $('#repos-template').text();
    var template = Handlebars.compile(source);
    return template(repo);
  };

  repoView.renderRepos = function() {
    $('#repos ul').empty().append(
      reposObj.withTheAttribute('fork')
      .map(repoCompiler)
    );
  };

  reposObj.requestRepos(repoView.renderRepos);
  module.repoView = repoView;
})(window);
