
$(function() {

  $("body").append(makeGrid(4,4));
  randomiseTiles();
});


function randomiseTiles(){
  $('.tile').each(function(i) {
    //wipe classes
    $(this).removeClass();
    //add tile class again.
    $(this).addClass("tile")
    //add either orange or blue
    if (Math.random() > 0.5){
      $(this).addClass("blue");
    }else{
      $(this).addClass("orange");
    };
  });

};

function toggleColour(element){

  //If the tile has the class of blue
  if ($(element).attr('class').indexOf("blue") !== -1){
    $(element).addClass("orange").removeClass("blue");

  }else{
    $(element).addClass("blue").removeClass("orange");

  };

}

function invert(clicked){
  $('.tile').each(function(i) {

    if (this != clicked){
        toggleColour(this);
    };
  });
};

function invertRow(rowNumber){

  $('.tile').each(function(i) {
    if ($(this).attr("id")[0] != rowNumber){
        toggleColour(this);
    };
  });

};

Number.prototype.times = function(fn) {
    for(var r = [], i = 0; i < this; i++)
        r.push(fn(i));
    return r;
}

function makeGrid(numRows, numCols) {

    var row = function(r) {
        return $("<tr/>").append(numCols.times(function(c) {
            return $("<td/>").html("<div class=\"tile\" id=\"" + r + c + "\" onclick=\"invert(this);\"></div>");
        }));
    };

    return $("<table/>")
    .append(numRows.times(row));
}
