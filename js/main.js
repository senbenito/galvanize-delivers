$(document).ready(function(){
  console.log('Ready to Rock!');
  $("#footer").hide();
  $(".button-collapse").sideNav({
    menuWidth: 300,
    edge: 'right',
    closeOnClick: true,
    });


  var $totalQty = 0;
  var $subtotal = 0;
  $(".ramens").click(function (event){
    $("#footer").show();
    var ramenType = ((event.target).className).slice(15);
    var orderRow = $("<tr>");
    var ramenDetail = $("<td>");
    var qtyDetail = $("<td>");
    var priceDetail = $("<td>");
      switch (ramenType) {
        case "butao":
          orderRow.className = ramenType;
          ramenDetail.attr("class", "col s5 offset-s1");
          ramenDetail.text("Original King (buta-o) ramen");
          ramenDetail.appendTo(orderRow);
          qtyDetail.attr("class", "col s3 centered");
          qtyDetail.text("ichi (1)");
          $totalQty += 1;
          qtyDetail.appendTo(orderRow);
          priceDetail.attr("class", "col s3");
          priceDetail.text("$12.99");
          $subtotal += 12.99;
          priceDetail.appendTo(orderRow);
          orderRow.appendTo($("tbody"));
          break;

        case "kuroo":
          orderRow.className = ramenType;
          ramenDetail.attr("class", "col s5 offset-s1");
          ramenDetail.text("Black King (kuro-o) ramen");
          ramenDetail.appendTo(orderRow);
          qtyDetail.attr("class", "col s3 centered");
          qtyDetail.text("ichi (1)");
          $totalQty += 1;
          qtyDetail.appendTo(orderRow);
          priceDetail.attr("class", "col s3");
          priceDetail.text("$13.99");
          $subtotal += 13.99;
          priceDetail.appendTo(orderRow);
          orderRow.appendTo($("tbody"));
          break;

        case "akao":
          orderRow.className = ramenType;
          ramenDetail.attr("class", "col s5 offset-s1");
          ramenDetail.text("Red King (aka-o) ramen");
          ramenDetail.appendTo(orderRow);
          qtyDetail.attr("class", "col s3 centered");
          qtyDetail.text("ichi (1)");
          $totalQty += 1;
          qtyDetail.appendTo(orderRow);
          priceDetail.attr("class", "col s3");
          priceDetail.text("$13.99");
          $subtotal += 13.99;
          priceDetail.appendTo(orderRow);
          orderRow.appendTo($("tbody"));
          break;

        default:
          orderRow.className = ramenType;
          ramenDetail.attr("class", "col s5 offset-s1");
          ramenDetail.text("Green King (midori-o) ramen");
          ramenDetail.appendTo(orderRow);
          qtyDetail.attr("class", "col s3 centered");
          qtyDetail.text("ichi (1)");
          $totalQty += 1;
          qtyDetail.appendTo(orderRow);
          priceDetail.attr("class", "col s3");
          priceDetail.text("$12.99");
          $subtotal += 12.99;
          priceDetail.appendTo(orderRow);
          orderRow.appendTo($("tbody"));
          break;
      }//closes ramen switch
      var $footerQty = `Total Quantity: ${$totalQty}`;
      var $footerSub = `Subtotal: $${Math.round(($subtotal + 0.00001) * 100) / 100}`;
      var $footerTax = `Yup, tax: $${Math.round((($subtotal * 0.0825) + 0.00001) * 100) / 100}`;
      var $footerTotal = `Total-total: $${Math.round((($subtotal * 1.0825) + 0.00001) * 100) / 100}`;
      $("#totalQty").text($footerQty);
      $("#subtotal").text($footerSub);
      $("#footerTax").text($footerTax);
      $("#footerTotal").text($footerTotal);
    });//closes ramens.click function



  $("#submitBtn").click(function (event){
    event.preventDefault();
    });

  $('select').material_select();
  $('.fixed-action-btn').openFAB();
  $('.fixed-action-btn').closeFAB();





});
