(function(module) {
  var makeitController = {};

  makeitController.drinkPlaceHold = '';

  $('#testbtn').click(function() {
    makeitController.drinkPlaceHold = Drink.all[0];

    $.ajax({
      url: '/drinks/' + 'lookup.php?i=' + makeitController.drinkPlaceHold.idDrink,
      success: function(drink) {
        makeitController.drinkPlaceHold = drink.drinks[0];
        console.log('Drink name =', makeitController.drinkPlaceHold.strDrink);
      }
    });
  });


  makeitController.index = function(){};

  module.makeitController = makeitController;
})(window);
