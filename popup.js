document.addEventListener('DOMContentLoaded', function () {
    var checkPageButton = document.getElementById('checkOut');
    checkPageButton.addEventListener('click', function () {
        
        chrome.tabs.query({ 'active': true, 'lastFocusedWindow': true }, function (tabs) {
            var url = tabs[0].url;
            alert(url);
        });

        // chrome.tabs.getSelected(null, function (tab) {
        //     d = document;
        //     chrome.tabs.update(undefined, {url: "http://www.google.com"});
        // });
    }, false);
}, false);
