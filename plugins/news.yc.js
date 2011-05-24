function runNewsYCSubmit() {
  location.href='http://news.ycombinator.com/submitlink?u='+encodeURIComponent(location.href)+'&t='+encodeURIComponent(document.title);
}
