$(document).ready(function() {
    $(".add").click(function() {
        var nom = $("#nom").val();
        var description = $("#description").val();
        var ligne = "<tr><td><input type='checkbox' name='select'></td><td>" + nom + "</td><td>"+"</td><td>" + description + "</td></tr>";
        $("table.test").append(ligne);
    });
    $(".delete").click(function() {
        $("table.test").find('input[name="select"]').each(function() {
            if ($(this).is(":checked")) {
                $(this).parents("table.test tr").remove();
            }
        });
    });
});
function addSelect(){
    // create a new select element
    var select = document.createElement('select');
    // add the options to the select
    for (var i = 1; i <= 3; i++) {
        var option = document.createElement('option');
        option.value = 'Ecran ' + i;
        option.text = 'Ecran ' + i;
        select.appendChild(option);
    }
    // add the select to the other select
    document.getElementById('selectPlace').appendChild(select);
}