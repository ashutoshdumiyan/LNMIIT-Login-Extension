chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  console.log(
    sender.tab
      ? "from a content script:" + sender.tab.url
      : "from the extension"
  );
  console.log(request.data);
  if (request.data[0] != "" && request.data[1] != "") {
    // var form = document.querySelector("#LoginUserPassword_auth_form");
    var name = document.querySelector("#LoginUserPassword_auth_username");
    var pass = document.querySelector("#LoginUserPassword_auth_password");
    var button = document.querySelector("#UserCheck_Login_Button");
    name.value = request.data[0];
    pass.value = request.data[1];
    console.log(name.value, pass.value);
    button.click();
    sendResponse({});
  } else {
    sendResponse({ msg: "Data is missing" });
  }
});
