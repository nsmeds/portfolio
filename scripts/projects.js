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
Project.loadAll = function(data) {
  data.sort(function(a,b) {
    return (new Date(nextElem.date)) - (new Date(curElem.date));
  }).forEach(function(ele) {
    Project.all.push(new Project(ele));
  });
};

// ...

Project.fetchAll = function() {
  if (localStorage.projects) {
    Project.loadAll(JSON.parse(localStorage.getItem(projects)));
    sectionView.
  } else {

  }

};
