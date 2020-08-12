var jsonSource = "https://spreadsheets.google.com/feeds/list/1tJA9kK9jhGtoCXBSgvWHrJ9I0DH1srVMVd9xR2MTI44/1/public/values?alt=json"

$.getJSON( jsonSource, function() {
  $("<p>json request successful</p>").prependTo("#container");
})

.done(function(data) { 
  if (data.feed.entry.length > 0) {
    $.each( data.feed.entry, function( i, item ) {
      var $player = item.gsx$player.$t;
      var $percentage = item.gsx$percentage.$t;

      $("<p>" + $player+ 
        "</p><p>" + $percentage+ 
        "</p>").appendTo("#stat");
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