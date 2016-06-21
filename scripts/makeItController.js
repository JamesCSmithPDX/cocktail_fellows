(function(module) {
  var makeitController = {};

  makeitController.drinkPlaceHold = '';

  $('#testbtn').click(function() {
    var ingredients, instructions, measure;

    makeitController.drinkPlaceHold = Drink.all[0];

    $.ajax({
      url: '/drinks/' + 'lookup.php?i=' + makeitController.drinkPlaceHold.idDrink,
      success: function(data) {
        makeitController.drinkPlaceHold = data.drinks[0];
        //console.log('key name =', Object.keys(makeitController.drinkPlaceHold));
        makeitController.ingredientsFilter(makeitController.drinkPlaceHold);
      }
    });

  });

  makeitController.ingredientsFilter = function(object) {
    for (var prop in object) {
      if (prop.substring(0, 6) == 'strIng' && object[prop].length > 0) {
        console.log(object[prop]);
      }
    }
  };

  // makeitController.ingredientsFilter = function(drink) {
  //   var ingredients = [];
  //   drink.forEach(function(key) {
  //
  //   });
  // };


  makeitController.index = function(){};

  module.makeitController = makeitController;
})(window);
