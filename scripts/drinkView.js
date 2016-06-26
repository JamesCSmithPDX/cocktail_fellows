 (function(module){

   drinkView = [];
   drinkView.showPage3 = false;

   drinkView.showCarousel = function(){
     if(Drink.all.length){
       console.log(Drink.all.length);

       Drink.getTemplate('/templates/handlebarsCarousel.hbs', {drinks: Drink.all}, function(html){
         $('.carousel-inner').append(html);
       });
       console.log({drinks: Drink.all} ,'inside showCarousel');

     } else {
       var locStoreArray = JSON.parse(localStorage.getItem ('drinks'));
       locStoreArray.forEach(function(drink){
         Drink.all.push(drink);
         console.log(drink, 'drink');
       });
       Drink.getTemplate('/templates/handlebarsCarousel.hbs', {drinks: Drink.all}, function(html){
         $('.carousel-inner').append(html);
       });
     };
   };


   drinkView.showModal = function() {
     $('.carousel-inner').on('click', function(e) {
       var idDrink = '';
       $('.modal-body').empty();
       var idDrink = $('.carousel-inner div.active img').attr('data-drinkid');
       console.log(idDrink);
       $.ajax({
         url: '/drinks/' + 'lookup.php?i=' + idDrink,
         success: function(data) {
           console.log('inside showModal ajax');
           $('#myModal').modal('show');
           appendRecipe(data.drinks[0]);
         }
       });
       console.log(idDrink);
       console.log('showModal working');
     });
   };

   var appendRecipe = function(tmpDrinkObject) {
     console.log('appendRecipe called with', tmpDrinkObject);
     drinkView.drinkObject = tmpDrinkObject;
     Drink.getTemplate('../templates/handlebarsModal.hbs', drinkView.drinkObject, function(html){
       $('.modal-body').append(html);
     });
   };

   drinkView.carousel = function() {
     $('.liTwo, .liThree, .liFour').hide();
     $('select').change(function() {
       $('#page3, .liTwo, .liThree, .liFour').show();
       $('#page2').hide();
     });
   };

   $('.makeIt a').on('click', function(e) {
     var drinkString = 'how to make '+ drinkView.drinkObject.strDrink + ' drink';
    //console.log('in makeit button event');
     console.log('drinkString in makeIt', drinkString);
     e.preventDefault();
    //console.log(e);
     makeitController.infoFilter(drinkView.drinkObject);
     drinkView.page4();
     ytApi.ytApiCall(drinkString);
   });

   drinkView.buttonClick = function() {
     $('.jumbotron').hide();
     $('.myButton').on('click', function() {
       $('.jumbotron').show();
     });
   };

   drinkView.jumbotronClick = function() {
     $('#preference, #drinktype, #liquor, #dropdownMenus').hide();
     $('.jumbotron').on('click', function() {
       $('.jumbotron').hide();
       $('#preference, #drinktype, #liquor, #dropdownMenus').show();
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



   module.drinkView = drinkView;
 })(window);
