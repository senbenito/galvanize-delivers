$(document).ready(function(){
  console.log('Ready to Rock!');
  $(".button-collapse").sideNav({
    menuWidth: 300,
    edge: 'right',
    closeOnClick: true,
    });

    $("#submitBtn").click(function (event){
      event.preventDefault();

    });

  $('.fixed-action-btn').openFAB();
  $('.fixed-action-btn').closeFAB();
  $('.fixed-action-btn.toolbar').openToolbar();
  $('.fixed-action-btn.toolbar').closeToolbar();


});
