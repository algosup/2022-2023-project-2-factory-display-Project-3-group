$(document).ready(function() {
    $(".addScreen").click(function() {
        var nom = $("#nom").val();
        var adresse = $("#adresse").val();
        var ligne = "<tr><td><input type='checkbox' name='select'></td><td>"+nom +"</td><td>"+ adresse + "</td></tr>";
        $("table.testEcran").append(ligne);
    });
    $(".delete").click(function() {
        $("table.testEcran").find('input[name="select"]').each(function() {
            if ($(this).is(":checked")) {
                $(this).parents("table.testEcran tr").remove();
            }
        });
    });
});