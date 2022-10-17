import('./news-item.js')
class NewsList extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  render () {
    for (let i = 0; i < 10; i++) {
      const newsItem = document.createElement('news-item')
      this.appendChild(newsItem)
    }
  }
}

customElements.define('news-list', NewsList)
