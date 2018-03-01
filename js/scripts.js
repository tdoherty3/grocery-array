$(document).ready(function() {
  $("form#groceries").submit(function(event) {
    event.preventDefault();

    var item1 = $("input#item1").val();
    var item2 = $("input#item2").val();
    var item3 = $("input#item3").val();

    $(".results").show();

    var arrays = [item1, item2, item3];
    var newArray = arrays.map(function(array) {
      return array.toUpperCase();
    });

    $(".return").text(newArray);

  });
});
