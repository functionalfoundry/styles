const insertFont = () => {
  window.WebFontConfig = {
    google: { families: [ 'Open+Sans:400:latin', 'Khula:400,300,700:latin', 'Roboto+Mono:400,500:latin' ] }
  }
  const wf = document.createElement('script')
  wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js'
  wf.type = 'text/javascript'
  wf.async = 'true'
  const s = document.getElementsByTagName('script')[0]
  s.parentNode.insertBefore(wf, s)
}

export default insertFont
