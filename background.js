chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  chrome.storage.local.get(["currentTab"], function(result) {
    if (result.currentTab != undefined) {
      const tid = result.currentTab.id;
      console.log(tid);
      if (result.currentTab.active) {
        chrome.tabs.executeScript(tid, {
          file: "contentScript.js"
        });
      }
    }
  });
});
