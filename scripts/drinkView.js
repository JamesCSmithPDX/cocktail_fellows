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

  //add selected drinks to carousel
  var appendDrinks = function() {
    Drink.all.forEach(function (ele) {
      var carouselTemplate = $('#carousel-template').html();
      var compiledTemplate = Handlebars.compile(carouselTemplate);
      var html = compiledTemplate(ele);
      $('.carousel-inner').append(html);
    });
  };

  //add chosen drink to modal
  var appendRecipe = function(id) {
    Drink.all.forEach(function(ele) {
      if (ele.idDrink == id) {
        var modalTemplate = $('#modal-template').html();
        var compiledTemplate = Handlebars.compile(modalTemplate);
        var html = compiledTemplate(ele);
        $('.modal-body').append(html);
      };
    });
  };

  drinkView.showModal = function() {
    $('.carousel-inner').on('click', function(e) {
      var idDrink = '';
      $('.modal-body').empty();
      $('#myModal').modal('show');
      var idDrink = $('.carousel-inner div.active img').attr('data-drinkid');
      console.log(idDrink);
      appendRecipe(idDrink);
      drinkView.loadMakeIt(idDrink);
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

  drinkView.loadMakeIt = function(idDrink) {
    $('.makeIt a').on('click', function(e) {
      console.log('in makeit button event');
      event.preventDefault();
      console.log(e);
      makeitController.idInfoFetch(idDrink);
      drinkView.page4();
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
