var projects = [];

// Create a constructor function for project data.
function Project (opts) {
  for (var key in opts) {
    this[key] = opts[key];
  }
}

// Create a handlebars template and populate the project descriptions
Project.prototype.toHtml = function() {
  var source = $('#template').html();
  var template = Handlebars.compile(source);
  this.daysAgo = parseInt((new Date() - new Date(this.date))/60/60/24/1000);
  this.publishStatus = this.date ? 'published ' + this.daysAgo + ' days ago' : '(draft)';
  return template(this);
};

// Sort projects by date, with the most recently published projects at the top.
projectArray.sort(function(curElem, nextElem) {
  return (new Date(nextElem.date)) - (new Date(curElem.date));
});

// Loop through projects and append each to the DOM.
projectArray.forEach(function(ele) {
  projects.push(new Project(ele));
});

projects.forEach(function(a) {
  $('#projects').append(a.toHtml());
});
