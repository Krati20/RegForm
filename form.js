function Registration_form() {
    var first_name = document.forms["RegForm"]["First Name"];
    var last_name = document.forms["RegForm"]["Last Name"];
    var email = document.forms["RegForm"]["Email-id"];
    var address = document.forms["RegForm"]["Address"];
    var phone = document.forms["RegForm"]["Contact Number"];


    if (first_name.value == "") {
        window.alert("Please enter your first name.");
        first_name.focus();
        return false;
    }
    if (last_name.value == "") {
        window.alert("Please enter your last name.");
        last_name.focus();
        return false;
    }
    if (email.value == "") {
        window.alert("Please enter your valid email address.");
        first_name.focus();
        return false;
    }
    if (address.value == "") {
        window.alert("Please enter your address.");
        first_name.focus();
        return false;
    }
    if (phone.value ==
        "") {
        window.alert("Please enter your current contact number.");
        first_name.focus();
        return false;
    }

    function check_check_box(form) {
        if (form.checkbox.checked == false) {
            alert('You did not confirm!');
            return false;
        } else {
            return true;
        }
    }
}