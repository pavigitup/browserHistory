import {Component} from 'react'
import HistoryListItems from './Component/HistoryListItems'
import './App.css'

// These are the list used in the application. You can move them to any component needed.
const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

// Replace your code here
class App extends Component {
  state = {searchInput: '', historyList: initialHistoryList}

  getSearchItem = event => {
    const searchItem = event.target.value
    this.setState({searchInput: searchItem})
  }

  deleteSearchHistory = id => {
    const {historyList} = this.state
    const updateList = historyList.filter(each => each.id !== id)
    this.setState({historyList: updateList})
  }

  render() {
    const {searchInput, historyList} = this.state
    const searchResult = historyList.filter(each => {
      const eachItem = each.title.toLowerCase()
      return eachItem.includes(searchInput.toLowerCase())
    })
    if (searchResult.length === 0) {
      return (
        <body>
          <div className="header">
            <div className="heading-con">
              <img
                src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
                alt="app logo"
              />
            </div>

            <div className="search-con">
              <div className="search-input-con">
                <div className="search-icon-con">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                    className="search-image"
                    alt="search"
                  />
                </div>
                <div className="input-icon-con">
                  <input
                    type="search"
                    placeholder="Search history"
                    className="input-outline"
                    onChange={this.getSearchItem}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="empty-history">
            <p>There is no history to show</p>
          </div>
        </body>
      )
    }

    return (
      <body>
        <div className="header">
          <div className="heading-con">
            <img
              src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
              alt="app logo"
            />
          </div>

          <div className="search-con">
            <div className="search-input-con">
              <div className="search-icon-con">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                  className="search-image"
                  alt="search"
                />
              </div>
              <div className="input-icon-con">
                <input
                  type="search"
                  placeholder="Search history"
                  className="input-outline"
                  onChange={this.getSearchItem}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="ul">
          <ul>
            {searchResult.map(each => (
              <HistoryListItems
                HistoryListItem={each}
                key={each.id}
                deleteSearchHistory={this.deleteSearchHistory}
              />
            ))}
          </ul>
        </div>
      </body>
    )
  }
}

export default App
