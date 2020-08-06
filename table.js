// STEP 3 : Check Wiki

var jsonSource = "https://spreadsheets.google.com/feeds/list/1tJA9kK9jhGtoCXBSgvWHrJ9I0DH1srVMVd9xR2MTI44/1/public/values?alt=json"
  
  $.getJSON( jsonSource, function() {
    $("<p>json request successful</p>").prependTo("#container");
  })

  .done(function(data) { 
    if (data.feed.entry.length > 0) {
      $.each( data.feed.entry, function( i, item ) {
        var $horodateur = item.gsx$horodateur.$t;
        var $friendcode = item.gsx$friendcode.$t;
        var $pseudo = item.gsx$pseudo.$t;
        var $team = item.gsx$team.$t;
        var $lvl = item.gsx$lvl.$t;
        
        $("<tr><td>" + $horodateur + 
            "</td><td>" + $pseudo+ 
            "</td><td>" + $friendcode + 
            "</td><td>" + $team + 
            "</td><td>" + $lvl + 
            "</td></tr>").appendTo("#table");
      });
    } else {
      $("<p>JSON request succeeded but no data returned.</p>").prependTo("#container");
    }
  })
  
  .fail(function() {
    $("<p>JSON request fail</p>").prependTo("#container");
  })
  
  .error(function() {
    $("<p>JSON request error</p>").prependTo("#container");
  });