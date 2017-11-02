// https://developer.chrome.com/extensions/tabs#method-query
function applyFilter(filter){
    if (filter === 'all'){
        queryInfo = {};
    } else if (filter === 'window') {
        queryInfo = {currentWindow: true};
    } else if (filter === 'audible'){
        queryInfo = {audible: true};
    }

    chrome.tabs.query(queryInfo, function(tabs){
        var count = tabs.length;
        chrome.browserAction.setBadgeText({text: count.toString()});
    });
}


// Default filter
applyFilter('all')

// Update filter when dropdown value is changed.
document.addEventListener('DOMContentLoaded', () => {
    filter = document.getElementById("dropdown")
    filter.onchange = function () {applyFilter(filter.value);};
});
