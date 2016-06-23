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
  makeitController.idInfoFetch = function(drinkObject) {
    console.log('drinkObject:' + drinkObject);
    //makeitController.drinkPlaceHold = Drink.all[0];

    // $.ajax({
    //   // Ajax call using individual drink id.
    //   url: '/drinks/' + 'lookup.php?i=' + idDrink,
    //   success: function(data) {
    //     console.log(data);
        // Passed data will have the form of an object with a 'drinks' array with
        // another object inside.
        // Ex { "drinks": [{"idDrink":"14029"...}]}
        // 0 index grabs the object within the array, which is the data you want.

        //console.log('key name =', Object.keys(makeitController.drinkPlaceHold));

    makeitController.infoFilter(drinkObject);

      // }
    // });

  };

  makeitController.infoFilter = function(object) {
    console.log('in makeitController.infoFilter');
    var instruct = '';
    var name = object.strDrink;
    for (var prop in object) {
      if (prop.substring(0, 6) == 'strIng' && object[prop].length > 0) {
        //console.log(object[prop]);
        makeitController.ingredients.push(object[prop]);
        makeitController.ingredientsObj = makeitController.ingredients.reduce(function(o, v, i){
          o[i] = v;
          return o;
        }, {});
        console.log(makeitController.ingredientsObj);
      } else if (prop.substring(0, 6) == 'strMea' && object[prop].length > 1) {
        makeitController.measures.push(object[prop]);
        makeitController.measuresObj = makeitController.measures.reduce(function(o, v, i){
          o[i] = v;
          return o;
        }, {});
        console.log(makeitController.measuresObj);
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
      makeitController.ingredientsObj = makeitController.instructions.reduce(function(o, v, i){
        o[i] = v;
        return o;
      }, {});
      console.log(makeitController.ingredientsObj);
    } else {
      makeitController.instructions = instruct;
      var ourDrink = new FinalDrink(name, makeitController.glass, makeitController.instructions);
      console.log(ourDrink);
    }
    makeitController.ourDrink = new FinalDrink(name, makeitController.glass);
    makeitDrink.appendFinalDrink(makeitController.ourDrink);

  };


  makeitController.index = function(){};

  module.makeitController = makeitController;
})(window);
