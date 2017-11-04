// https://developer.chrome.com/extensions/tabs#method-query
function applyFilter(){
    chrome.tabs.query({}, function(tabs){
        var count = tabs.length;
        chrome.browserAction.setBadgeText({text: count.toString()});
    });
}

setInterval(function(){
    applyFilter();
}, 100);
