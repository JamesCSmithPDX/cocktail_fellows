(function(module) {
  var inputController = {};

  var $timeofDay = null;
  var $alcohoPreference = null;
  var $skill = null;
  var $taste = null;

  inputController.storeSelection = function() {
    $('select').change(function() {
      $timeofDay = $('#time').val();
      $timeofDay = $('#preference').val();
      $timeofDay = $('#skill').val();
      $timeofDay = $('#taste').val();
    });
  };

  inputController.index = function() {};

  module.inputController = inputController;
})(window);
