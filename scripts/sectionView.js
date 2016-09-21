var sectionView = {};

sectionView.tabToggle = function () {
  $('.menu-items').on('click', '.tab', function() {
    $('.tab-content').hide();
    var $selectedTab = $(this).attr('data-content');
    $('section#' + $selectedTab).fadeIn();
  });
  $('.menu-items .tab:first').click();
};

sectionView.tabToggle();
