
function Drink(opts) {
  // TODO: need to make an object constructor?
  Object.keys(opts).forEach(function(e, index, keys) {
    this[e] = opts[e];
  },this);
};

//setup Drink.all array
Drink.all = [];

//ask the server to make the ajax call
Drink.fetch = function(queryType) {
  $.ajax({
    type: 'GET',
    url: '/drinks/' + queryType,
    success: function(data, message, xhr){
      console.log(data);
      data.drinks.forEach(function(drink){
        Drink.all.push(drink);
        Drink.all.forEach(function(drink){
          console.log(drink);
          var newDrink = new Drink(drink);
        });
      });
    },
    error: function(xhr, status, error){
      console.log('inside fetchAll ajax error');
      console.log('ajax error', {xhr: xhr, status: status, error: error});
    }
  });
};

//a test function for the ajax call
Drink.fetch('search.php?s=margarita');
