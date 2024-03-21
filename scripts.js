function FormSubmit() {
    debugger;
    let emailField = document.getElementById("email_field");
    let password = document.getElementById("password");
    let ErrorMsg = document.getElementById("error_msg");

    let errHtml = "";


    if (!emailField.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        errHtml += "<li><span>Please enter a valid username</span></li>";
    }

    if (password.value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@])[A-Za-z\d@$!%*?&]{0,}$/)) {
        if (password.value != "SmartServTest@123") {
            errHtml += "<li><span>Please enter a valid password</span></li>";
        }
    } else {
        errHtml += "<li><span>Entered password must be contain an uppercase letter and a number and  should not contain any special character other than @ </span></li>";
    }

    if (errHtml != "") {
        ErrorMsg.innerHTML = errHtml;
    } else {
        window.location.href = "/3rd_-_4th_Task_Zentrades/dashboard.html"
    }

}