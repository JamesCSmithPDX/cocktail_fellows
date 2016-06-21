(function(module) {
  var makeitController = {};

  makeitController.drinkPlaceHold = '';

  makeitController.ingredients = [];
  makeitController.instructions = [];
  makeitController.measures = [];
  makeitController.glass = '';

  $('#testbtn').click(function() {


    makeitController.drinkPlaceHold = Drink.all[0];

    $.ajax({
      url: '/drinks/' + 'lookup.php?i=' + makeitController.drinkPlaceHold.idDrink,
      success: function(data) {
        makeitController.drinkPlaceHold = data.drinks[0];
        //console.log('key name =', Object.keys(makeitController.drinkPlaceHold));

        makeitController.infoFilter(makeitController.drinkPlaceHold);

      }
    });

  });

  makeitController.infoFilter = function(object) {
    var instruct = '';

    for (var prop in object) {
      if (prop.substring(0, 6) == 'strIng' && object[prop].length > 0) {
        //console.log(object[prop]);
        makeitController.ingredients.push(object[prop]);

      } else if (prop.substring(0, 6) == 'strMea' && object[prop].length > 1) {
        makeitController.measures.push(object[prop]);

      } else if (prop.substring(0, 6) == 'strIns') {
        instruct = object[prop];
      }
    }

    var re = /\d\./;

    var arr = instruct.split(re);
    arr.shift();
    makeitController.instructions = arr;
  };


  makeitController.index = function(){};

  module.makeitController = makeitController;
})(window);
