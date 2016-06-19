addb.init({
  appId: 9090
});

function Drink() {
  // need to make an object constructor
};

Drink.all = [];


Drink.fetch = function(queryType) {
  $.ajax({
    type: 'GET',
    url: '/drinks/' + queryType,
    success: function(data, message, xhr){
      console.log(data);
    },
    error: function(xhr, status, error){
      console.log('inside fetchAll ajax error');
      console.log('ajax error', {xhr: xhr, status: status, error: error});
    }
  });
};
