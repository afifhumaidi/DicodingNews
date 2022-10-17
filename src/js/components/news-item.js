class NewsItem extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  render () {
    this.innerHTML = `
      <div class="news-photo"></div>
      <div class="news">
        <h2 class="m-0">New species of beetle named after Novak Djokovic</h2>
        <p class="m-0">Short by Anmol Sharma / 10:53 pm on 07 Oct 2022,Friday</p>
        <p>Serbian scientists named a new species of beetle after ex-world number one men's tennis player Novak Djokovic. The insect, which belongs to Duvalius genus of ground beetles present in Europe and was discovered several years ago in underground pit in Serbia, has been named 'Duvalius djokovici'. "We feel urged to pay Djokovic back in...way we can," a researcher said.</p>
        <p class="m-0">read more...</p>
      </div>
    `
  }
}

customElements.define('news-item', NewsItem)
