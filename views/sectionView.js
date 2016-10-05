(function(module) {
  var sectionView = {};

  // Show only the first paragraph of each project description, then reveal hidden paragraphs when 'more' is clicked.
  sectionView.showMore = function() {
    $('.project *:nth-of-type(n+3)').hide();
    $('.read-more').on('click', function(e) {
      e.preventDefault();
      var $selectedProject = $(this).parent();
      if ($(this).text() === 'More ...') {
        $selectedProject.find('p').show();
        $(this).html('Less ...');
      } else {
        $selectedProject.find('*:nth-of-type(n+3)').hide();
        $(this).html('More ...');
      }
    });
  };

  module.sectionView = sectionView;
})(window);
