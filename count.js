chrome.tabs.query({}, function(tabs){
    var count = tabs.length;
    chrome.browserAction.setBadgeText({text: count.toString()});
});
