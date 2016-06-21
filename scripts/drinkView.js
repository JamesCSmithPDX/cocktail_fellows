(function(module){

  drinkView = [];

  drinkView.showCarousel = function(){
    if(Drink.all.length){
      console.log(Drink.all.length);
      appendDrinks();
      console.log('inside showCarousel');

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
      console.log(carouselTemplate);
      var compiledTemplate = Handlebars.compile(carouselTemplate);
      console.log(compiledTemplate);
      $('.carousel-inner').append(compiledTemplate);
    });
  };


  module.drinkView = drinkView;
})(window);
