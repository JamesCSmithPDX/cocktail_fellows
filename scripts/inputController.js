(function(module) {
  var inputController = {};

  var $timeofDay = null;
  var $alcoholPreference = null;
  var $skill = null;
  var $taste = null;

  inputController.storeSelection = function() {
    $('select').change(function() {
      $timeofDay = $('#time').val();
      $alcoholPreference = $('#preference').val();
      $skill = $('#skill').val();
      $taste = $('#taste').val();
    });
  };

  inputController.index = function() {};

  module.inputController = inputController;
})(window);
