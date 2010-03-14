function runDelicious() {
    var url = 'http://delicious.com/save?url='+encodeURIComponent(window.location.href)+'&title='+encodeURIComponent(document.title)+'&v=5&noui=1&jump=doclose';
    chrome.extension.sendRequest({handler: "makePopup",
                                  url: url,
                                  left: -10,
                                  width: 550,
                                  height: 550});
}
