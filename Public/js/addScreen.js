$(document).ready(function() {
    $(".addScreen").click(function() {
        var nom = $("#screenName").val();
        var description = $("#screenLocation").val();
        var ligne = "<tr><td><input type='checkbox' name='select'></td><td>" + nom + "</td><td>"+ description + "</td></tr>";
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