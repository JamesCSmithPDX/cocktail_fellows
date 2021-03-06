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


  Drink.getTemplate = function(templateName, data, callback) {
    $.ajax({
      type: 'GET',
      url: templateName,
      success: function(source) {
        var template = Handlebars.compile(source);
        var html = template(data);
        callback(html);
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
    });
    console.log('Drink.all = ', Drink.all);
    drinkView.showCarousel();
  };

  inputController.index = function() {};

  module.inputController = inputController;
  module.Drink = Drink;
})(window);
