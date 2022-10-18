class NewsItem extends HTMLElement {
  connectedCallback () {
    this._singleNews = ''
  }

  // eslint-disable-next-line accessor-pairs
  set singleNews (singleNews) {
    this._singleNews = singleNews
    this.render()
    // console.log(this._singleNews.author)
  }

  render () {
    this.innerHTML = `
      <div class="news-photo"><img src="${this._singleNews.imageUrl}"></img></div>
      <div class="news">
        <h2 class="mb-0 mt-0">${this._singleNews.title}</h2>
        <p class="mb-0 mt-025">Short by ${this._singleNews.author} / ${this._singleNews.date}</p>
        <p class="news-content">${this._singleNews.content}</p>
        <a class="mb-0 mt-0" href="${this._singleNews.readMoreUrl}">read more...</a>
      </div>
    `
  }
}

customElements.define('news-item', NewsItem)
