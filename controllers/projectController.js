(function(module) {
  var projectController = {};

  projectController.reveal = function() {
    $('#projects').fadeIn();
  };

  module.projectController = projectController;
})(window);
