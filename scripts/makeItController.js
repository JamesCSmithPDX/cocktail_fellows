(function(module) {
  var makeitController = {};

  makeitController.drinkPlaceHold = '';

  makeitController.ingredients = [];
  makeitController.instructions = [];
  makeitController.measures = [];
  makeitController.glass = '';

  // Function will take the id of the selected drink and call to the db again,
  // Filters through the returned json object and sorts out the ingredient,
  // instruction, measurement, and glass information.
  makeitController.idInfoFetch = function(idDrink) {

    //makeitController.drinkPlaceHold = Drink.all[0];

    $.ajax({
      // Ajax call using individual drink id.
      url: '/drinks/' + 'lookup.php?i=' + idDrink,
      success: function(data) {
        // Passed data will have the form of an object with a 'drinks' array with
        // another object inside.
        // Ex { "drinks": [{"idDrink":"14029"...}]}
        // 0 index grabs the object within the array, which is the data you want.
        makeitController.drinkPlaceHold = data.drinks[0];
        //console.log('key name =', Object.keys(makeitController.drinkPlaceHold));

        makeitController.infoFilter(makeitController.drinkPlaceHold);

      }
    });

  };

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

      } else if (prop.substring(0, 6) == 'strGla' && object[prop].length > 1) {
        makeitController.glass = object[prop];
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
