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


  module.makeitController = makeitController;
})(window);
