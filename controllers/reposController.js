(function(module) {
  var reposController = {
    index: function() {
      $('#repos').fadeIn().siblings().hide();
    }
  };

  module.reposController = reposController;
})(window);
