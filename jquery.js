$(document).ready(function() {
    $("#dat").datepicker();
});




$(document).ready(function(){
      $.getJSON("jquer.json", function(data){
     var tdata = '';
     $.each(data, function(key, value){
         tdata += '<tr>';
         tdata += '<td style="width:150px">'+value.name+'</td>';
         tdata += '<td style="">'+value.date+'</td>';
         tdata += '<td style="width:150px">'+value.assigned+'</td>';
         tdata += '</tr>'
     });
     $('#tb').append(tdata);
  });
});



$("#submit").click(function(){
    if($('#assign').val() == "" || $('#tn').val() == "" || $('#dat').val() == "" ){
        alert("PLEASE ENTER THE VALUE");
    }
    else if(!isNaN($('#assign').val()))
    {
        alert("PLEASE ENTER VALID VALUE");
    }
else
    {
        var x = $("#tn").val();
        var y= $("#dat").val();
        var z=$("#assign").val();
        //alert(x + y + z);

        var tdata = '';
        tdata += '<tr>';
        tdata += '<td style="width:150px">'+x+'</td>';
        tdata += '<td style="">'+y+'</td>';
        tdata += '<td style="width:150px">'+z+'</td>';
        tdata += '</tr>'
        $('#tb').prepend(tdata);
        $('#tb tr:last').remove();

    }
  });

