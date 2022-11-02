import moment from 'moment'

const main = () => {
  const appBarElement = document.querySelector('app-bar')
  const newsListElement = document.querySelector('news-list')
  let weatherData = ''

  const fetchNews = (newsCategory) => {
    fetch(`https://inshorts.deta.dev/news?category=${newsCategory}`)
      .then(response => response.json())
      .then(responseJson => {
        newsListElement.news = responseJson.data
      })
      .catch(message => { console.log(message) })
  }

  const newsCategory = (e) => {
    if (!e.target.childElementCount && e.target.text) {
      fetchNews(`${e.target.text}`)
      if (window.innerWidth < 991.99) {
        appBarElement.toggleStatusMenu()
      }
    }
  }
  appBarElement.addEventListener('click', newsCategory)

  navigator.geolocation.getCurrentPosition((position) => {
    fetch(`https://api.open-meteo.com/v1/forecast?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&hourly=temperature_2m`)
      .then(response => response.json())
      .then(responseJson => {
        weatherData = responseJson
        const timeNow = moment().utc().format('YYYY-MM-DDTHH:00')
        const { time } = weatherData.hourly
        const timeIndex = time.indexOf(timeNow)
        const weatherNow = weatherData.hourly.temperature_2m[timeIndex] || ''
        document.querySelector('.weather').innerHTML = `<i class="fa-solid fa-cloud"></i>${weatherNow}0&#8451;`
      })
  })

  fetchNews('all')

  window.addEventListener('pageshow', function (event) {
    const historyTraversal = event.persisted || (typeof window.performance !== 'undefined' && window.performance.navigation.type === 2)
    if (historyTraversal) {
      // Handle page restore.
      window.location.reload()
    }
  })
}
export default main
