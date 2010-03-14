function runDelicious() {
    var url = 'http://delicious.com/save?url='+encodeURIComponent(window.location.href)+'&title='+encodeURIComponent(document.title)+'&v=5&noui=1&jump=doclose';
    chrome.extension.sendRequest({handler: "makePopup",
                                  url: url,
                                  winName: 'deliciousuiv5',
                                  options: 'location=yes,links=no,scrollbars=no,toolbar=no,width=550,height=550',
                                });
}
