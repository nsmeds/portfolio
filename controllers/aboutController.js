(function(module) {
  var aboutController = {};

  aboutController.reveal = function() {
    $('#about').fadeIn();
  };

  module.aboutController = aboutController;
})(window);
