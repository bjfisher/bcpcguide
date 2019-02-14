$(document).ready(function() {
  $('.mainbag').viewScroller({
      useScrollbar: false,
      changeWhenAnim: false, // Change views when they are changing
      beforeChange: null, // Callback which is called before views change
	    afterChange: null, // Callback which is called after views change
  });

  function maketable(path, divcontainer) {

    $.get(path, function(data) {

      // start the table
      var html = '<table">';

      // split into lines
      var rows = data.split("\n");

      // parse lines
      rows.forEach( function getvalues(ourrow) {

        // start a table row
        html += "<tr>";

        // split line into columns
        var columns = ourrow.split(",");

        html += "<td>" + columns[0] + "</td>";
        html += "<td>" + columns[1] + "</td>";
        html += "<td>" + columns[2] + "</td>";

        // close row
        html += "</tr>";
      })
      // close table
      html += "</table>";

      // insert into div
      $(divcontainer).append(html);

    });

  };

  maketable('../csv/cpu.csv', 'div-cpu');

  $('.box').click(function() {
    $.fn.viewScroller.showView('thirdview');
  });

});
