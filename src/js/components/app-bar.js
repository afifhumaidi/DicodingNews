import moment from 'moment'
class Appbar extends HTMLElement {
  connectedCallback () {
    this._mobileStatus = false
    this.render()
  }

  toggleStatusMenu () {
    this._menuMobile ^= true
    this.querySelector('.mobile-menu').setAttribute('status', this._menuMobile ? 'true' : 'false')
    this.querySelector('.mobile-close').setAttribute('status', this._menuMobile ? 'true' : 'false')
    this.querySelector('.menu').setAttribute('status', this._menuMobile ? 'true' : 'false')
  }

  render () {
    this.innerHTML = `
      <div class="navbar">
        <div class="mobile-menu" status="false">
          <svg viewBox="0 0 16 16">
            <rect x="1" y="3" fill="#333" width="14" height="2"></rect>
            <rect x="1" y="7" fill="#333" width="14" height="2"></rect>
            <rect x="1" y="11" fill="#333" width="14" height="2"></rect>
          </svg>
        </div>
        <ul>
          <li>${moment().format('dddd, D MMMM YYYY')}</li>
          <li>Today's Paper</li>
        </ul>
        <h1>The Dicoding Times</h1>
        <ul>
          <li class="weather"><i class="fa-solid fa-cloud"></i>0&#8451;</li>
        </ul>
        <div class="mobile-close" status="false">
          <svg viewBox="0 0 12 12" stroke="#000" stroke-width="1" stroke-linecap="round" style="opacity: 0.95;">
            <line x1="11" y1="1" x2="1" y2="11"></line>
            <line x1="1" y1="1" x2="11" y2="11"></line>
          </svg>
        </div>
      </div>
      <div class="menu" status="false">
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
    this._menuMobile = this.querySelector('.mobile-menu').addEventListener('click', () => {
      this._menuMobile ^= true
      this.querySelector('.mobile-menu').setAttribute('status', this._menuMobile ? 'true' : 'false')
      this.querySelector('.mobile-close').setAttribute('status', this._menuMobile ? 'true' : 'false')
      this.querySelector('.menu').setAttribute('status', this._menuMobile ? 'true' : 'false')
    })

    this._menuMobile = this.querySelector('.mobile-close').addEventListener('click', () => {
      this._menuMobile ^= true
      this.querySelector('.mobile-menu').setAttribute('status', this._menuMobile ? 'true' : 'false')
      this.querySelector('.mobile-close').setAttribute('status', this._menuMobile ? 'true' : 'false')
      this.querySelector('.menu').setAttribute('status', this._menuMobile ? 'true' : 'false')
    })
  }
}

customElements.define('app-bar', Appbar)
