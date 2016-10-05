(function(module) {
  var projectController = {
    index: function() {
      $('#projects').fadeIn().siblings().hide();
    }
  };

  sectionView.renderIndex = function() {
    Project.all.forEach(function(a) {
      $('#projects').append(a.toHtml());
    });
    sectionView.showMore();
  };

  Project.fetchAll(sectionView.renderIndex);
  module.projectController = projectController;
})(window);
