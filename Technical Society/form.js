const reset = () => {
  $("#tabform")[0].reset();
};

console.log("HI");
const submit = () => {
  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  var filter = /^[0-9-+]+$/;

  if ($("#name").val().trim() == "") {
    $("#nameErr").html("Please enter required field!");

    return false;
  }
  if ($("#mail").val().trim() == "") {
    $("#mailErr").html("Please enter required field!");
    return false;
  }
  if ($("#mail").val().trim() == "") {
    $("#mailErr").html("Please enter required field!");
    return false;
  }
  if (reg.test($("#mail").val().trim()) == "") {
    $("#mailErr").html("Email address is invalid");
    // $("#email").addClass('form-error-input');
    return false;
  }

  if ($("#programme").val().trim() == "") {
    $("#programmeErr").html("Please enter required field!");
    return false;
  }
  if ($("#branch").val().trim() == "") {
    $("#branchErr").html("please enter required field!");
    return false;
  }
  if ($("#semester").val().trim() == "") {
    $("#semesterErr").html("Please enter required field!");
    return false;
  }
  if ($("#number").val().trim() == "") {
    $("#numberErr").html("Please enter required field!");
    return false;
  }
  // if (filter.test($("#number").val().trim()) ) {
  //       $("#numberErr").html("Invalid contact number !!!");

  //       return false;
  //   }
  if ($("#interests").val().trim() == "") {
    $("#interestErr").html("Please enter required field!");
    return false;
  }
  return true;
};
$("input").on("keydown", function () {
  $(".form-group").find("span").html("");
});
$("input").on("focus", function () {
  submit();
});
