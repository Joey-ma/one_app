(function (doc, win) {
  var docEl = doc.documentElement
  function setFontSize () {
    var winWidth = docEl.clientWidth
    var size = (winWidth / 750) * 100
    doc.documentElement.style.fontSize = (size < 100 ? size : 100) + 'px'

    var beforeWidth = screen.availWidth
    win.onresize = function () {
      var currentWidth = screen.availWidth
      if ((currentWidth - beforeWidth) !== 0) {
        location.reload()
      }
      beforeWidth = screen.availWidth
    }
  }
  setFontSize()
  win.onresize = function () {
    setFontSize()
  }
})(document, window)
