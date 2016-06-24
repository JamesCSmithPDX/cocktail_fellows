(function(module) {

  var ytApi = {};

  ytApi.tempRender = function(e,t){res=e;for(var n=0;n<t.length;n++){res=res.replace(/\{\{(.*?)\}\}/g,function(e,r){return t[n][r]})}return res};

  ytApi.ytApiCall = function(inputstring) {
    var request = gapi.client.youtube.search.list({
      part: 'snippet',
      type: 'video',
      q: encodeURIComponent(inputstring).replace(/%20/g, '+'),
      maxResults: 3,
      order: 'viewCount',
    });
    request.execute(function(response) {
      var results = response.result;
      $.each(results.items, function(index, item) {
        console.log(item);
        $.get('youtubeitem.html', function(data){
          $('#youtubeResults').append(ytApi.tempRender(data, [{'title':item.snippet.title, 'videoid':item.id.videoId}]));
        });
        //$('#results').append(item.id.videoId+ ' '+item.snippet.title+'<br>');
      });
    });
  };



  module.ytApi = ytApi;

})(window);
