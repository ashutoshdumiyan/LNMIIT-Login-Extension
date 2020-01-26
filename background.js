chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  chrome.storage.local.get(["currentTab"], function(result) {
    const tid = result.currentTab;
    console.log(tid);
    chrome.tabs.executeScript(tid.id, {
      file: "contentScript.js"
    });
  });
});
