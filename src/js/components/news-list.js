import('./news-item.js')
class NewsList extends HTMLElement {
  connectedCallback () {
    this._news = ''
    this.render()
  }

  // eslint-disable-next-line accessor-pairs
  set news (news) {
    this._news = news
    this.render()
  }

  render () {
    this.innerHTML = ' '
    if (this._news.length) {
      this._news.forEach(element => {
        const newsItemElement = document.createElement('news-item')
        newsItemElement.singleNews = element
        this.appendChild(newsItemElement)
      })
    }
  }
}

customElements.define('news-list', NewsList)
