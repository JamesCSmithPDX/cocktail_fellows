(function(module) {
  var makeitController = {};

  function FinalDrink(name, glass, instructions){
    this.name = name;
    this.glass = glass;
    this.instruct = instructions;
  };

  makeitController.ingredients = [];
  makeitController.instructions = [];
  makeitController.measures = [];
  makeitController.glass = '';

  // Function will take the id of the selected drink and call to the db again,
  // Filters through the returned json object and sorts out the ingredient,
  // instruction, measurement, and glass information.
  // makeitController.idInfoFetch = function(drinkObject) {
  //   console.log('drinkObject:' + drinkObject);
  //   //makeitController.drinkPlaceHold = Drink.all[0];
  //
  //   // $.ajax({
  //   //   // Ajax call using individual drink id.
  //   //   url: '/drinks/' + 'lookup.php?i=' + idDrink,
  //   //   success: function(data) {
  //   //     console.log(data);
  //       // Passed data will have the form of an object with a 'drinks' array with
  //       // another object inside.
  //       // Ex { "drinks": [{"idDrink":"14029"...}]}
  //       // 0 index grabs the object within the array, which is the data you want.
  //
  //       //console.log('key name =', Object.keys(makeitController.drinkPlaceHold));
  //
  //   makeitController.infoFilter(drinkObject);
  //
  //     // }
  //   // });
  //
  // };

  makeitController.infoFilter = function(object) {
    console.log('in makeitController.infoFilter');
    var instruct = '';
    var name = object.strDrink;
    for (var prop in object) {
      if (prop.substring(0, 6) == 'strIng' && object[prop].length > 0) {
        makeitController.ingredients.push(object[prop]);
        makeitController.ingredientsObj = {'ingredients': makeitController.ingredients };
      } else if (prop.substring(0, 6) == 'strMea' && object[prop].length > 1) {
        makeitController.measures.push(object[prop]);
        makeitController.measuresObj = {'measures': makeitController.measures};
      } else if (prop.substring(0, 6) == 'strIns') {
        instruct = object[prop];
      } else if (prop.substring(0, 6) == 'strGla' && object[prop].length > 1) {
        makeitController.glass = object[prop];
      }
    }
    var re = /\d\./;
    console.log(instruct.match(re));
    if (instruct.match(re)){
      var arr = instruct.split(re);
      arr.shift();
      console.log(arr);
      makeitController.instructions = arr;
      makeitController.instructionsObj = {'instructions': makeitController.instructions};
      console.log(makeitController.instructionsObj);
    } else {
      console.log('in single instruction');
      makeitController.instructionsObj = {'instructions': [instruct]};
    };
    makeitController.ourDrink = new FinalDrink(name, makeitController.glass);
    makeitDrink.appendFinalDrink('#makeit-template', makeitController.ourDrink, '#drinkRecipe');
    makeitDrink.appendFinalDrink('#ingredient-template', makeitController.ingredientsObj, '#ingredients');
    makeitDrink.appendFinalDrink('#measurement-template', makeitController.measuresObj, '#measures');
    makeitDrink.appendFinalDrink('#instructions-template', makeitController.instructionsObj, '#drinkInstruc');
  };


  makeitController.index = function(){};

  module.makeitController = makeitController;
})(window);
