// Create a constructor function for project data.
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

// ...

Project.fetchAll = function() {
  if (localStorage.projectData) {
    // Project.loadAll(JSON.parse(localStorage.getItem(projectData)));
    var getData = localStorage.getItem('projectData');
    var parsedData = JSON.parse(getData);
    Project.loadAll(parsedData);
    sectionView.renderIndex();
  } else {
    $.ajax('data/projectData.json', {
      method: 'GET',
      success: successHandler,
      error: errorHandler
    });

    function successHandler(data) {
      console.log('success');
      localStorage.setItem('projectData', JSON.stringify(data));
      Project.loadAll(data);
      sectionView.renderIndex();
    }

    function errorHandler(data) {
      console.log('error here');
      $('#projects').html('<h3>Error</h3><p> :0 :0 :0 Mistakes were made. :( :( :( </p>');
    }
  }

};
