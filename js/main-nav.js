$(function () {

  $('#api-nav-item-dashboard').click(function() {
      if ($(this).hasClass('selected')) {
        $('#api-nav-menu-shade').click();
      } else {
        $('#api-nav-menu-shade').show();
        $(this).siblings().removeClass('selected');
        $(this).addClass('selected');
        $('#api-nav-detail-dashboard').siblings().hide();
        $('#api-nav-detail-dashboard').show();
        $('#api-vertical-nav-details').show();
      }
  });

  $('#api-nav-item-apis').click(function() {
      if ($(this).hasClass('selected')) {
        $('#api-nav-menu-shade').click();
      } else {
        $('#api-nav-menu-shade').show();
        $(this).siblings().removeClass('selected');
        $(this).addClass('selected');
        $('#api-nav-detail-apis').siblings().hide();
        $('#api-nav-detail-apis').show();
        $('#api-vertical-nav-details').show();
      }
  });

  $('#api-nav-item-mappings').click(function() {
      if ($(this).hasClass('selected')) {
        $('#api-nav-menu-shade').click();
      } else {
        $('#api-nav-menu-shade').show();
        $(this).siblings().removeClass('selected');
        $(this).addClass('selected');
        $('#api-nav-detail-mappings').siblings().hide();
        $('#api-nav-detail-mappings').show();
        $('#api-vertical-nav-details').show();
      }
  });
  
  $('#api-nav-menu-shade').click(function() {
      $('#api-nav-menu-shade').hide();
      $('#api-vertical-nav-details').hide();
      $('#api-nav-item-dashboard').removeClass('selected');
      $('#api-nav-item-dashboard').siblings().removeClass('selected');
  });

});
