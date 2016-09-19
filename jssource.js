
$(function() {
  $("body").append(makeGrid(4,4));
  randomiseTiles();
});


function randomiseTiles(){
  $('.tile').each(function(i) {
    //wipe classes
    $(this).removeClass();
    //add tile class again.
    $(this).addClass("tile");
    //add either orange or blue
    if (Math.random() > 0.5){
      $(this).addClass("blue");
    }else{
      $(this).addClass("orange");
    };
  });
};

function toggleColour(element){
  $(element).addClass("tile");

  //If the tile has the class of blue
  if ($(element).hasClass("blue") !== false){
    $(element).addClass("orange").removeClass("blue");
  }else{
    $(element).addClass("blue").removeClass("orange");
  };
};

function invert(clicked){
  $('.tile').each(function(i) {

    if (this != clicked){
        toggleColour(this);
    };
  });
};

function invertAdjecent(clicked){

  var up = parseInt($(clicked).attr("id")) - 10;
  var down = parseInt($(clicked).attr("id")) + 10;
  var left = parseInt($(clicked).attr("id")) - 01;
  var right = parseInt($(clicked).attr("id")) + 01;

  up = up < 0 ? NaN : up;
  down = down < 0 ? NaN : down;
  left = left < 0 ? NaN : left;
  right = right < 0 ? NaN : right;

  up = ('0' + up).slice(-2);
  down = ('0' + down).slice(-2);
  left = ('0' + left).slice(-2);
  right = ('0' + right).slice(-2);

  toggleColour($("#"+up));
  toggleColour($("#"+down));
  toggleColour($("#"+left));
  toggleColour($("#"+right));
  toggleColour(clicked);

};

Number.prototype.times = function(fn) {
    for(var r = [], i = 0; i < this; i++)
        r.push(fn(i));
    return r;
}

function makeGrid(numRows, numCols) {

    var row = function(r) {
        return $("<tr/>").append(numCols.times(function(c) {
            return $("<td/>").html("<div class=\"tile\" id=\"" + r + c + "\" onclick=\"invertAdjecent(this);\"></div>");
        }));
    };

    return $("<table/>")
    .append(numRows.times(row));
}
