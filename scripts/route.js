page('/');
page('/', drinkView.page1);
page('/page2', drinkView.page2);
page('/page3', drinkView.page3);
page('/page4', drinkView.page4);
page('/page5', drinkView.page5);

$('#home').click(function(){
  location.reload();
});

$('#home').mouseover(function(){
  $('#warningMessage').fadeIn();
});

$('#home').mouseout(function() {
  $('#warningMessage').fadeOut();
});

page();
