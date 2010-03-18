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
                                  url:     u,
                                  winName: 't',
                                  options: 'toolbar=0,resizable=0,status=1,width=450,height=480',
                                });
}
