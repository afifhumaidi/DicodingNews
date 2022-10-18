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
          <li><a>all</a></li>
          <li><a>national</a></li>
          <li><a>business</a></li>
          <li><a>sports</a></li>
          <li><a>world</a></li>
          <li><a>politics</a></li>
          <li><a>technology</a></li>
          <li><a>startup</a></li>
          <li><a>entertainment</a></li>
          <li><a>miscellaneous</a></li>
          <li><a>hatke</a></li>
          <li><a>science</a></li>
          <li><a>automobile</a></li>
        </ul>
      </div>
    `
  }
}

customElements.define('app-bar', Appbar)
