chrome.tabs.onUpdated.addListener(
    function (tabId, changeInfo, tab) {
        window.console.log('updated from contentscript');
    }
);
