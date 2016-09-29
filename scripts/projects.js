// Create a constructor function for project data.
(function(module) {

  function Project (opts) {
    for (var key in opts) {
      this[key] = opts[key];
    }
  }

  Project.all = [];

  // Create a handlebars template and populate the project descriptions
  Project.prototype.toHtml = function() {
    var source = $('#template').html();
    var template = Handlebars.compile(source);
    this.daysAgo = parseInt((new Date() - new Date(this.date))/60/60/24/1000);
    this.publishStatus = this.date ? 'published ' + this.daysAgo + ' days ago' : '(draft)';
    return template(this);
  };

  // Sort projects by date, with the most recently published projects at the top.
  Project.loadAll = function(dataToSort) {
    dataToSort.sort(function(a,b) {
      return (new Date(b.date)) - (new Date(a.date));
    }).forEach(function(ele) {
      Project.all.push(new Project(ele));
    });
  };

  // Fetch the data (from localStorage if possible, with an ajax call if not), then call the loadAll and renderIndex functions to display it.

  Project.fetchAll = function(callback) {
    if (localStorage.projectData) {
      Project.loadAll(JSON.parse(localStorage.getItem('projectData')));
      callback();
    } else {
      $.ajax('data/projectData.json', {
        method: 'GET',
        success: successHandler,
        error: errorHandler
      });

      function successHandler(data) {
        localStorage.setItem('projectData', JSON.stringify(data));
        Project.loadAll(data);
        callback();
      }

      function errorHandler(data) {
        $('#projects').html('<h3>Error</h3><p> :0 :0 :0 Mistakes were made. :( :( :( </p>');
      }
    }

  };
  module.Project = Project;
})(window);
