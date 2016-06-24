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

  var appendDrinks = function() {
    Drink.all.forEach(function (ele) {
      var carouselTemplate = $('#carousel-template').html();
      var compiledTemplate = Handlebars.compile(carouselTemplate);
      var html = compiledTemplate(ele);
      $('.carousel-inner').append(html);
    });
  };

  var appendRecipe = function(drinkObject) {
    var modalTemplate = $('#modal-template').html();
    var compiledTemplate = Handlebars.compile(modalTemplate);
    var html = compiledTemplate(drinkObject);
    $('.modal-body').append(html);
    drinkView.loadMakeIt(drinkObject);
    // Drink.all.forEach(function(ele) {
    //   if (ele.idDrink == id) {
    //     var modalTemplate = $('#modal-template').html();
    //     var compiledTemplate = Handlebars.compile(modalTemplate);
    //     var html = compiledTemplate(ele);
    //     $('.modal-body').append(html);
    //   };
    // });
  //add chosen drink to modal
  };

  drinkView.showModal = function() {
    $('.carousel-inner').on('click', function(e) {
      var idDrink = '';
      $('.modal-body').empty();
      //$('#myModal').modal('show');
      var idDrink = $('.carousel-inner div.active img').attr('data-drinkid');
      //console.log(idDrink);
      $.ajax({
        url: '/drinks/' + 'lookup.php?i=' + idDrink,
        success: function(data) {
          appendRecipe(data.drinks[0]);
          $('#myModal').modal('show');
        }
      });
      console.log(idDrink);
      //appendRecipe(idDrink);
      //drinkView.loadMakeIt(idDrink);
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

  drinkView.loadMakeIt = function(drinkObject) {
    $('.makeIt a').on('click', function(e) {
      console.log('in makeit button event');
      e.preventDefault();
      console.log(e);
      makeitController.infoFilter(drinkObject);
      drinkView.page4();
    });
  };

  drinkView.pagerClick = function() {
    $('.jumbotron').hide();
    $('.pager').on('click', function() {
      $('.jumbotron').show();
    });
  };

  drinkView.jumbotronClick = function() {
    $('#preference').hide();
    $('#drinktype').hide();
    $('#liquor').hide();
    $('.jumbotron').on('click', function() {
      $('.jumbotron').hide();
      $('#preference').show();
      $('#drinktype').show();
      $('#liquor').show();
    });
  };


  drinkView.page1 = function() {
    $('#page1').show();
    $('#topNav').hide();
    $('#page2').hide();
    $('#page3').hide();
    $('#page4').hide();
    $('#page5').hide();
  };

  drinkView.page2 = function() {
    $('#topNav').show();
    $('#page1').hide();
    $('#page2').show();
    $('#page3').hide();
    $('#page4').hide();
    $('#page5').hide();
  };

  drinkView.page3 = function() {
    $('#topNav').show();
    $('#page1').hide();
    $('#page2').hide();
    $('#page3').show();
    $('#page4').hide();
    $('#page5').hide();
  };

  drinkView.page4 = function() {
    $('#topNav').show();
    $('#page1').hide();
    $('#page2').hide();
    $('#page3').hide();
    $('#page4').show();
    $('#page5').hide();
  };

  drinkView.page5 = function() {
    $('#topNav').show();
    $('#page1').hide();
    $('#page2').hide();
    $('#page3').hide();
    $('#page4').hide();
    $('#page5').show();
  };







  drinkView.carousel();
  drinkView.showModal();
  drinkView.pagerClick();
  drinkView.jumbotronClick();
  drinkView.page1();
  drinkView.page2();
  drinkView.page3();
  drinkView.page4();
  drinkView.page5();



  module.drinkView = drinkView;
})(window);
