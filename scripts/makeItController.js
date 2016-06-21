(function(module) {
  var makeitController = {};

  makeitController.drinkPlaceHold = '';

  makeitController.ingredients = [];
  makeitController.instructions = [];
  makeitController.measures = [];

  $('#testbtn').click(function() {


    makeitController.drinkPlaceHold = Drink.all[0];

    $.ajax({
      url: '/drinks/' + 'lookup.php?i=' + makeitController.drinkPlaceHold.idDrink,
      success: function(data) {
        makeitController.drinkPlaceHold = data.drinks[0];
        //console.log('key name =', Object.keys(makeitController.drinkPlaceHold));
        makeitController.ingredientsFilter(makeitController.drinkPlaceHold);
        makeitController.measureFilter(makeitController.drinkPlaceHold);
        makeitController.instructionsFilter(makeitController.drinkPlaceHold);

      }
    });

  });

  //Grabs ingredients from the passed drink object.
  makeitController.ingredientsFilter = function(object) {
    for (var prop in object) {
      if (prop.substring(0, 6) == 'strIng' && object[prop].length > 0) {
        //console.log(object[prop]);
        makeitController.ingredients.push(object[prop]);
      }
    }
  };

  makeitController.measureFilter = function(object) {
    for (var prop in object) {
      if (prop.substring(0, 6) == 'strMea' && object[prop].length > 1) {
        makeitController.measures.push(object[prop]);
      }
    }
  };

  //Grabs instructions and split into step by step.
  makeitController.instructionsFilter = function(object) {
    var instruct = '';
    for (var prop in object) {
      if (prop.substring(0, 6) == 'strIns') {
        instruct = object[prop];
        //console.log(instruct);
      }
    }

    var re = /\d\./;

    var arr = instruct.split(re);
    arr.shift();
    makeitController.instructions = arr;

    //console.log(arr);
  };


  makeitController.index = function(){};

  module.makeitController = makeitController;
})(window);
