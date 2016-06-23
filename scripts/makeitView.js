(function(module){
  var makeitDrink = {};

  // Handlebars.registerHelper('list', function(items, options) {
  //   var out = '<ul>';
  //
  //   for(var i=0, l=items.length; i<l; i++) {
  //     out = out + '<li>' + options.fn(items[i]) + '</li>';
  //   }
  //
  //   return out + '</ul>';
  // });
  //

  makeitDrink.appendFinalDrink = function(object) {
    console.log('in appendFinalDrink');
    console.log(object);
    var objectTemplate = $('#makeit-template').html();
    console.log(objectTemplate);
    var compiledTemplate = Handlebars.compile(objectTemplate);
    console.log(compiledTemplate);
    var html = compiledTemplate(object);
    console.log(html);
    $('.makeit-body').append(html);
  };

  module.makeitDrink = makeitDrink;

})(window);
