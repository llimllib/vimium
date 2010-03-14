//TODO: this opens a real window, instead of a popup window
//      without a location bar or bookmarks bar, which would be
//      ideal to have
function runTumblr() {
    var d=document,
    w=window,
    e=w.getSelection,
    k=d.getSelection,
    x=d.selection,
    s=(e?e():(k)?k():(x?x.createRange().text:0)),
    f='http://www.tumblr.com/share',
    l=d.location,
    e=encodeURIComponent,
    p='?v=3&u='+e(l.href) +'&t='+e(d.title) +'&s='+e(s),
    u=f+p;
    chrome.extension.sendRequest({handler: "makePopup",
                                  url: u,
                                  left: -10,
                                  width: 450,
                                  height: 530});
}
