(function(module){

  drinkView = [];

  drinkView.showCarousel = function(){
    if(Drink.all.length){
      appendDrinks();
    } else {
      var locStoreArray = JSON.parse(localStorage.getItem ('drinks'));
      locStoreArray.forEach(function(drink){
        Drink.all.push(drink);
      });
      appendDrinks();
    };
  };

  var appendDrinks = function(){
    Drink.all.forEach(function(){
      var carouselTemplate = $('#carousel-template').html();
      var compiledTemplate = Handlebars.compile(carouselTemplate);
      $('.carousel-inner').append(compiledTemplate);
    });
  };

  module.drinkView = drinkView;
})(window);
