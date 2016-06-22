(function(module){

  drinkView = [];

  drinkView.showCarousel = function(){
    if(Drink.all.length){
      console.log(Drink.all.length);
      appendDrinks();
      // appendRecipe();
      console.log('inside showCarousel');

    } else {
      var locStoreArray = JSON.parse(localStorage.getItem ('drinks'));
      locStoreArray.forEach(function(drink){
        Drink.all.push(drink);
      });
      appendDrinks();
      // appendRecipe();
    };
  };

  // var appendDrinks = function(id){
  //   Drink.all.forEach(function(ele){
  //     for(var prop in object) {
  //       if (object[prop] == 'idDrink' && )
  //     }
  //
  //     var carouselTemplate = $('#carousel-template').html();
  //     console.log(carouselTemplate);
  //     var compiledTemplate = Handlebars.compile(carouselTemplate);
  //     var html = compiledTemplate(ele);
  //     $('.carousel-inner').append(html);
  //   });
  // };
  var appendDrinks = function() {
    Drink.all.forEach(function (ele) {
      var carouselTemplate = $('#carousel-template').html();
      var compiledTemplate = Handlebars.compile(carouselTemplate);
      var html = compiledTemplate(ele);
      $('.carousel-inner').append(html);
    });
  };

  var appendRecipe = function() {
    Drink.all.forEach(function(ele) {
      var modalTemplate = $('#modal-template').html();
      var compiledTemplate = Handlebars.compile(modalTemplate);
      var html = compiledTemplate(ele);
      $('.modal-body').append(html);
    });
  };

  drinkView.showModal = function() {
    $('.carousel-inner').on('click', function(e) {
      console.log(e);
      $('#myModal').modal('show');
      var idDrink = $(this).attr('data-drinkID');
      console.log('showModal working');
    });
  };

  drinkView.carousel = function() {
    // $('#myCarousel').hide();
    $('select').change(function() {
      $('#page3').show();
      $('#page2').hide();
    });
  };

  drinkView.page1 = function() {
    $('#page1').show();
    $('#page2').hide();
    $('#page3').hide();
    $('#page4').hide();
    $('#page5').hide();
  };

  drinkView.page2 = function() {
    $('#page1').hide();
    $('#page2').show();
    $('#page3').hide();
    $('#page4').hide();
    $('#page5').hide();
  };

  drinkView.page3 = function() {
    $('#page1').hide();
    $('#page2').hide();
    $('#page3').show();
    $('#page4').hide();
    $('#page5').hide();
  };

  drinkView.page4 = function() {
    $('#page1').hide();
    $('#page2').hide();
    $('#page3').hide();
    $('#page4').show();
    $('#page5').hide();
  };

  drinkView.page5 = function() {
    $('#page1').hide();
    $('#page2').hide();
    $('#page3').hide();
    $('#page4').hide();
    $('#page5').show();
  };







  drinkView.carousel();
  drinkView.showModal();
  drinkView.page1();
  drinkView.page2();
  drinkView.page3();
  drinkView.page4();
  drinkView.page5();



  module.drinkView = drinkView;
})(window);
