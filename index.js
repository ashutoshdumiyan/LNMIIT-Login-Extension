const form = document.forms.login_form;
chrome.storage.local.get(["user_name"], function(result) {
  user_name.value = result.user_name;
});

chrome.storage.local.get(["password"], function(result) {
  password.value = result.password;
});

form.addEventListener("submit", function(e) {
  e.preventDefault();
  //   Save Username and password in local storage
  chrome.storage.local.set({ user_name: user_name.value }, function() {
    console.log("Username is set to " + user_name.value);
  });

  chrome.storage.local.set({ password: password.value }, function() {
    console.log("Password is set to " + user_name.value);
  });

  saved.style.transform = "scale(1)";
  setInterval(() => {
    saved.style.transform = "scale(0)";
  }, 1500);

  //   Retrieve username and password from local storage
  chrome.storage.local.get(["user_name"], function(result) {
    console.log("Username currently is " + result.user_name);
  });

  chrome.storage.local.get(["password"], function(result) {
    console.log("Password currently is " + result.password);
  });
});
