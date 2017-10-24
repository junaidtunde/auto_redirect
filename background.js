chrome.tabs.onUpdated.addListener(function () {
    // alert('updated from background');
    chrome.tabs.query({ 'active': true, 'lastFocusedWindow': true }, function (tabs) {
        var url = tabs[0].url;
        if (url.includes("nairaland.com")) {
            chrome.tabs.update(undefined, { url: "http://www.google.com" });
        }
    });
});
