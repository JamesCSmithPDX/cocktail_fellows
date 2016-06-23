(function(module) {
  var inputController = {};

  function Drink(opts) {
    Object.keys(opts).forEach(function(e, index, keys) {
      this[e] = opts[e];
    },this);
  };

  Drink.all = [];

  inputController.$valueSelect = null;


  // inputController.storeSelection = function() {
  $('select').change(function() {
    $timeofDay = $('#time').val();
    inputController.$valueSelect = $(this).val();
    Drink.fetch(inputController.$valueSelect);
  });
  //};

  Drink.fetch = function(queryType) {
    $.ajax({
      type: 'GET',
      url: '/drinks/' + queryType,
      success: function(data, message, xhr){
        console.log('pulled data = ', data);
        localStorage.setItem('drinks', JSON.stringify(data));
        Drink.loadAll(data);
      },
      error: function(xhr, status, error){
        console.log('inside fetchAll ajax error');
        console.log('ajax error', {xhr: xhr, status: status, error: error});
      }
    });
  };

//TODO: MAKE SURE THIS IS WORKING!!

  getTemplate = function(callback) {
    $.ajax({
      type: 'GET',
      url: 'handlebarsCarousel.hbs',
      success: function(data) {
        console.log(data, 'data','inside carousel ajax');
        // info = Drink.fetch();
        source = data;
        template = Handlebars.compile(source);
        $('.carousel-inner').append(template);
      },
      error: function(error) {
        console.log(data, 'data');
      }
    });
  };

  Drink.loadAll = function(data){
    data.drinks.forEach(function(drink){
      if (drink.strDrinkThumb == null) {
        drink.strDrinkThumb = 'images/ronb.jpg';
      }
      Drink.all.push(drink);
      // Drink.all.forEach(function(drink){
      //   console.log(drink);
      //   var newDrink = new Drink(drink);
      // });
    });
    console.log('Drink.all = ', Drink.all);
    drinkView.showCarousel();
  };





  inputController.index = function() {};

  module.inputController = inputController;
  module.Drink = Drink;
})(window);


//setup Drink.all array


//ask the server to make the ajax call
