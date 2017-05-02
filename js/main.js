$(document).ready(function(){
  console.log('Ready to Rock!');
  $(".button-collapse").sideNav({
    menuWidth: 300,
    edge: 'right',
    closeOnClick: true,
    });


  $(".ramens").click(function (event){
    var ramenType = ((event.target).className).slice(15);
      switch (ramenType) {
        case butao:
          var orderRow = $("<tr>");
          orderRow.className = ramenType;
          var ramenDetail = $("<td>");
          ramenDetail.attr("class", "col s6 offset-s1");
          ramenDetail.text("Original King (buta-o) ramen");
          ramenDetail.appendTo(orderRow);
          var qtyDetail = $("<td>");
          qtyDetail.attr("class", "col s2");
          qtyDetail.text("ichi (-)");
          qtyDetail.appendTo(orderRow);
          var priceDetail = $("<td>");
          priceDetail.attr("class", "col s2 offset-s1");
          priceDetail.text("$12.99");
          priceDetail.appendTo(orderRow);
          orderRow.appendTo($("tbody"));
          break;
        default:

      }


    var orderRow = $("<tr>");
    var orderDetail = $("<td>");
    orderDetail.attr("class", "col s6 offset-s1")
    orderRow.className += ` ${ramenType}`;
    orderDetail.text(ramenType);
    orderDetail.appendTo(orderRow);
    console.log(orderRow);
    orderRow.appendTo($("tbody"));
  });

  $("#submitBtn").click(function (event){
    event.preventDefault();
    });

  $('select').material_select();
  $('.fixed-action-btn').openFAB();
  $('.fixed-action-btn').closeFAB();





});
