(function(module) {
  var reposController = {};

  reposController.reveal = function() {
    $('#repos').fadeIn();
  };

  module.reposController = reposController;
})(window);
