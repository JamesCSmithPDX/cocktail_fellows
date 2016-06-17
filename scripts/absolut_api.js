addb.init({
  appId: 9090
});

function Drink() {
  // need to make an object constructor
};

Drink.all = [];

addb.drinks()
    .withIngredient('lemon')
    .and('apples')
    .tasting('sweet')
    .loadSet(function(query) { });

// Drink.fetch = function(filter) {
//   $.ajax({
//     type: 'GET',
//     url: 'http://addb.absolutdrinks.com/tastes/' + '?apiKey=' + absApi,
//     success: function(data, message, xhr){
//       console.log(data);
//     },
//     error: function(xhr, status, error){
//       console.log('inside fetchAll ajax error');
//       console.log('ajax error', {xhr: xhr, status: status, error: error});
//     }
//   });
// };

//Drink.fetch();
