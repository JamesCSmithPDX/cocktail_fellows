(function(module){
  var makeitDrink = {};

  makeitDrink.appendFinalDrink = function(template, object, attr) {
    //console.log('in appendFinalDrink');
    //console.log(object);
    var objectTemplate = $(template).html();
    //console.log(objectTemplate);
    var compiledTemplate = Handlebars.compile(objectTemplate);
    //console.log(compiledTemplate);
    var html = compiledTemplate(object);
    //console.log(html);
    $(attr).append(html);
  };

  module.makeitDrink = makeitDrink;

})(window);
