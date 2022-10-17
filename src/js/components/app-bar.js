class Appbar extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  render () {
    this.innerHTML = `
      <div class="navbar">
        <ul>
          <li>Friday, October 14, 2022</li>
          <li>Today's Paper</li>
        </ul>
        <h1>The Dicoding Times</h1>
        <ul>
          <li><i>wheater</i> 24C 30C 21C</li>
        </ul>
      </div>
      <div class="menu">
        <ul>
          <li><a href="#">all</a></li>
          <li><a href="#">national Indian News only</a></li>
          <li><a href="#">business</a></li>
          <li><a href="#">sports</a></li>
          <li><a href="#">world</a></li>
          <li><a href="#">politics</a></li>
          <li><a href="#">technology</a></li>
          <li><a href="#">startup</a></li>
          <li><a href="#">entertainment</a></li>
          <li><a href="#">miscellaneous</a></li>
          <li><a href="#">hatke</a></li>
          <li><a href="#">science</a></li>
          <li><a href="#">automobile</a></li>
        </ul>
      </div>
    `
  }
}

customElements.define('app-bar', Appbar)
