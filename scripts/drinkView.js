(function(module){

  drinkView = [];
  drinkView.showPage3 = false;

  drinkView.showCarousel = function(){
    if(Drink.all.length){
      console.log(Drink.all.length);

      getTemplate('handlebarsCarousel', data, function(html) {
        $('.carousel-inner').append(html);
      });
      // appendDrinks();
      // appendRecipe();
      console.log('inside showCarousel');

    } else {
      var locStoreArray = JSON.parse(localStorage.getItem ('drinks'));
      locStoreArray.forEach(function(drink){
        Drink.all.push(drink);
      });
      getTemplate();
      // appendDrinks();
      // appendRecipe();
    };
  };
  // var appendDrinks = function() {
  //   Drink.all.forEach(function (ele) {
  //     var carouselTemplate = $('#carousel-template').html();
  //     var compiledTemplate = Handlebars.compile(carouselTemplate);
  //     var html = compiledTemplate(ele);
      // $('.carousel-inner').append(html);
  //   });
  // };

  var appendRecipe = function(drinkObject) {
    var modalTemplate = $('#modal-template').html();
    var compiledTemplate = Handlebars.compile(modalTemplate);
    var html = compiledTemplate(drinkObject);
    $('.modal-body').append(html);
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
    $('.liTwo, .liThree, .liFour').hide();
    $('select').change(function() {
      $('#page3, .liTwo, .liThree, .liFour').show();
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

  drinkView.buttonClick = function() {
    $('.jumbotron').hide();
    $('.myButton').on('click', function() {
      $('.jumbotron').show();
    });
  };

  drinkView.jumbotronClick = function() {
    $('#preference, #drinktype, #liquor').hide();
    $('.jumbotron').on('click', function() {
      $('.jumbotron').hide();
      $('#preference, #drinktype, #liquor').show();
    });
  };

  drinkView.page1 = function() {
    $('#page1').show();
    $('#topNav, #page2, #page3, #page4, #page5').hide();
  };

  drinkView.page2 = function() {
    $('#topNav').show();
    $('#page1, #page3, #page4, #page5').hide();
    $('#page2').show();
  };

  drinkView.page3 = function() {
    $('#topNav').show();
    $('#page1, #page2, #page4, #page5').hide();
    $('#page3').show();
  };

  drinkView.page4 = function() {
    $('#topNav').show();
    $('#page1, #page2, #page3, #page5').hide();
    $('#page4').show();
  };

  drinkView.page5 = function() {
    $('#topNav').show();
    $('#page1, #page2, #page3, #page4').hide();
    $('#page5').show();
  };


  drinkView.carousel();
  drinkView.showModal();
  drinkView.buttonClick();
  drinkView.jumbotronClick();
  // drinkView.page1();
  // drinkView.page2();
  // drinkView.page3();
  // drinkView.page4();
  // drinkView.page5();



  module.drinkView = drinkView;
})(window);
