const form = document.forms.login_form;

chrome.tabs.query({ currentWindow: true, active: true }, function(tabs) {
  console.log(tabs[0]);
  // Save tab id
  chrome.storage.local.set(
    {
      currentTab: tabs[0]
    },
    function() {
      console.log("tab id is: " + tabs[0].id);
    }
  );
});

chrome.storage.local.get(["user_name"], function(result) {
  user_name.value = result.user_name;
});

chrome.storage.local.get(["password"], function(result) {
  password.value = result.password;
});

form.addEventListener("submit", function(e) {
  e.preventDefault();
  console.log(user_name.value, password.value);
  //   Save Username and password in local storage
  chrome.storage.local.set({ user_name: user_name.value }, function() {
    console.log("Username is set to " + user_name.value);
  });

  chrome.storage.local.set({ password: password.value }, function() {
    console.log("Password is set to " + user_name.value);
  });
  error.innerHTML = "Saved!";
});

login.addEventListener("click", function(event) {
  const un = user_name.value;
  const pw = password.value;
  //   chrome.runtime.sendMessage({ greeting: "hello" }, function(response) {
  //     console.log(response.farewell);
  //   });
  chrome.tabs.executeScript({
    file: "contentScript.js"
  });
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { data: [un, pw] }, function(response) {
      if (response.logged) {
        error.innerHTML = "Already Logged In!";
      }
      if (response.errorMsg) {
        error.innerHTML = response.errorMsg;
      }
      if (response.success) {
        error.innerHTML = response.success;
      }
    });
  });
});
