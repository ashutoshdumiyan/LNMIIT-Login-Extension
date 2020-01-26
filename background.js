chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  chrome.storage.local.get(["currentTab"], function(result) {
    const tid = result.currentTab.id;
    console.log(tid);
    chrome.tabs.executeScript(tid, {
      file: "contentScript.js"
    });
  });
});
