
$(function() {

  $("body").append(makeGrid(4,4));
  randomiseTiles();
});


function randomiseTiles(){
  var ids = [ 'orange', 'blue' ];

  $('.tile').each(function(i) {
    $(this).attr("id", ids[Math.floor( Math.random()*ids.length)]);
  });

};

function invert(clicked){
  $('.tile').each(function(i) {

    if (this != clicked){

      if ($(this).attr("id") == "blue"){
        $(this).attr("id", "orange");
      }else{
        $(this).attr("id", "blue");
      };
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
            return $("<td/>").html("<div class=\"tile\" onclick=\"invert(this);\"></div>");
        }));
    };

    return $("<table/>")
    .append(numRows.times(row));
}
