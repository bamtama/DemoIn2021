
let _mdatetime = new MDatetime()
renderDateTime()
setInterval(function(){
  _mdatetime.refreshTime()
  renderDateTime()
}, 1000)
function renderDateTime () {
  document.querySelector('.m-datetime .date').innerHTML = _mdatetime.getDate()
  document.querySelector('.m-datetime .time').innerHTML = _mdatetime.getTime()
}

getWeatherData()
function getWeatherData () {
  fetch('https://tianqiapi.com/api?version=v6&appid=78998664&appsecret=BgyC6tVL').then(data => data.json()).then(res => {
    if (res.errcode != 100) {
      document.querySelector('.m-weather .msg').innerHTML = `${res.city} ${res.wea} ${res.tem} ℃`
      document.querySelector('.m-weather .iconfont').classList.add(`icon-${res.wea_img}`)
    }
  })
}

document.querySelectorAll('.m-item-tabs >.item').forEach((ele, index) => {
  ele.addEventListener('click', event => {
    document.querySelector('.m-center').classList.add('z-show')
    document.querySelector('.m-item-pages >.z-show').classList.remove('z-show')
    document.querySelectorAll('.m-item-pages >.item')[index].classList.add('z-show')
    document.querySelector('body').className = 'color-' + (index + 1)
  })
})

document.querySelector('.m-back').addEventListener('click', event => {
  document.querySelector('.m-center').classList.remove('z-show')
  document.querySelector('body').className = ''
})