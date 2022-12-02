$(document).ready(function() {
    $(".addGroup").click(function() {
        var nom = $("#nomGroup").val();
        var description = $("#description").val();
        var ligne = "<tr><td><input type='checkbox' name='select'></td><td>" + nom + "</td><td>"+ count +"</td><td>" + description + "</td></tr>";
        $("table.testGroup").append(ligne);
    });
    $(".delete").click(function() {
        $("table.testGroup").find('input[name="select"]').each(function() {
            if ($(this).is(":checked")) {
                $(this).parents("table.testGroup tr").remove();
            }
        });
    });
});
function addSelect(){
    // create a new select element
    var select = document.createElement('select');
    select.classList.add('form-select');
    // add the options to the select
    for (var i = 1; i <= 3; i++) {
        var option = document.createElement('option');
        option.value = 'Ecran ' + i;
        option.text = 'Ecran ' + i;
        select.appendChild(option);
    }
    // add the select to the other select
    document.getElementById('essai').append(select);
}
function removeSelect(){
    // remove the last select
    document.getElementById('essai').lastChild.remove();
}

//count how many times the button is clicked
var count = 1;
//add a click event listener to the button
document.getElementById("add").addEventListener("click", function() {
    //increment the count
    count++;
});
document.getElementById("remove").addEventListener("click", function() {
    //increment the count
    if(count > 1){ 
    count--;
    }
});



