// fotocctv effect
$('.fotocctv').hover(function() {
  $(this).removeClass('img-circle');
}, function() {
  $(this).addClass('img-circle');
});

// rotate snapshot
// http://stackoverflow.com/a/18479995
var angle = 0;
var rotated = false;
$('#rotateSnapshotRight').on('click', function() {
    angle += 90;
    $('#snapshotimg').rotate(angle);

    if (rotated) {
      $( "#snapshotimg" ).each( function( index, element ){
          $(this).closest("div").height(this.height);
          $(this).css('margin-top', '0');
      });
      rotated = false;
    } else {
      $( "#snapshotimg" ).each( function( index, element ){
          $(this).closest("div").height(this.width);
          $(this).css('margin-top', '12%');
      });
      rotated = true;
    }
});
$('#rotateSnapshotLeft').on('click', function() {
    angle -= 90;
    $('#snapshotimg').rotate(angle);

    if (rotated) {
      $( "#snapshotimg" ).each( function( index, element ){
          $(this).closest("div").height(this.height);
          $(this).css('margin-top', '0');
      });
      rotated = false;
    } else {
      $( "#snapshotimg" ).each( function( index, element ){
          $(this).closest("div").height(this.width);
          $(this).css('margin-top', '12%');
      });
      rotated = true;
    }
});

// flip snapshot 
var flippedV = false;
var flippedH = false;
$('#flipSnapshotV').on('click', function() {

    if (flippedV) {
      $('#snapshotimg').removeClass('flipVer');
      flippedV = false;
    } else {
      $('#snapshotimg').addClass('flipVer');
      flippedV = true;
    }
});
$('#flipSnapshotH').on('click', function() {

    if (flippedH) {
      $('#snapshotimg').removeClass('flipHor');
      flippedH = false;
    } else {
      $('#snapshotimg').addClass('flipHor');
      flippedH = true;
    }
});

// rotate streaming
var anglestream = 0;
var rotatedstream = false;
$('#rotateStreamingRight').on('click', function() {
    anglestream += 90;
    $('#streamingimg').rotate(anglestream);

    if (rotatedstream) {
      $( "#streamingimg" ).each( function( index, element ){
          $(this).closest("div").height(this.height);
          $(this).css('margin-top', '0');
      });
      rotatedstream = false;
    } else {
      $( "#streamingimg" ).each( function( index, element ){
          $(this).closest("div").height(this.width);
          $(this).css('margin-top', '12%');
      });
      rotatedstream = true;
    }
});
$('#rotateStreamingLeft').on('click', function() {
    anglestream -= 90;
    $('#streamingimg').rotate(anglestream);

    if (rotatedstream) {
      $( "#streamingimg" ).each( function( index, element ){
          $(this).closest("div").height(this.height);
          $(this).css('margin-top', '0');
      });
      rotatedstream = false;
    } else {
      $( "#streamingimg" ).each( function( index, element ){
          $(this).closest("div").height(this.width);
          $(this).css('margin-top', '12%');
      });
      rotatedstream = true;
    }
});