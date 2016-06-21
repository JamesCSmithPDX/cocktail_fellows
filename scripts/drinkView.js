(function(module){

  drinkView = [];

  drinkView.showCarousel = function(){
    if(Drink.all.length){
      console.log(Drink.all.length);
      appendDrinks();
      appendRecipe();
      console.log('inside showCarousel');

    } else {
      var locStoreArray = JSON.parse(localStorage.getItem ('drinks'));
      locStoreArray.forEach(function(drink){
        Drink.all.push(drink);
      });
      appendDrinks();
      appendRecipe();


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

  var appendRecipe = function() {
    Drink.all.forEach(function() {
      var modalTemplate = $('#modal-template').html();
      var compiledTemplate = Handlebars.compile(modalTemplate);
      $('.modal-body').append(compiledTemplate);
    });
  };

  var images = function() {
    $('.carousel-inner').on('click', function() {
      $('#myModal').modal('show');
      // window.setTimeout('show_modal', 2000);
    });
  };
  
  var carousel = function() {
    $('#myCarousel').hide();
    $('select').change(function() {
      $('#myCarousel').show();
      $('#page2').hide();
    });
  };

  carousel();
  images();



  module.drinkView = drinkView;
})(window);
