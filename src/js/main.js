// import moment from 'moment'

const main = () => {
  const appBarElement = document.querySelector('app-bar')
  const newsListElement = document.querySelector('news-list')

  const fetchNews = (newsCategory) => {
    fetch(`https://inshorts.deta.dev/news?category=${newsCategory}`)
      .then(response => response.json())
      .then(responseJson => {
        newsListElement.news = responseJson.data
      })
      .catch(message => { console.log(message) })
  }

  fetchNews('all')

  const newsCategory = (e) => {
    if (!e.target.childElementCount && e.target.text) {
      fetchNews(`${e.target.text}`)
    }
  }
  appBarElement.addEventListener('click', newsCategory)
}
export default main
