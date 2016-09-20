var projects = [];

// Create a constructor function for project data.
function Project (opts) {
  this.title = opts.title;
  this.body = opts.body;
  this.date = opts.date;
}

// Clone the current project and populate it with data from projectArray
Project.prototype.toHtml = function() {
  var $newProject = $('section.template').clone();
  $newProject.find('h3').html(this.title);
  $newProject.find('p').html(this.body);
  $newProject.find('time[pubdate]').attr('title', this.date);
  $newProject.find('time').html('about ' + parseInt((new Date() - new Date(this.date))/60/60/24/1000) + ' days ago');

// Remove the template class and render the current project to the DOM
  $newProject.removeClass('template');
  return $newProject;
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
  console.log(a);
  $('#projects').append(a.toHtml());
});
