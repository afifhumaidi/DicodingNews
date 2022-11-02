import moment from 'moment'
class Appbar extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  render () {
    this.innerHTML = `
      <div class="navbar">
        <ul>
          <li>${moment().format('dddd, D MMMM YYYY')}</li>
          <li>Today's Paper</li>
        </ul>
        <h1>The Dicoding Times</h1>
        <ul>
          <li class="weather"><i class="fa-solid fa-cloud"></i>0&#8451;</li>
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
