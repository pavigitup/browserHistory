import './index.css'

const HistoryListItems = props => {
  const {deleteSearchHistory, HistoryListItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = HistoryListItem

  const deleteHistory = () => {
    deleteSearchHistory(id)
  }
  return (
    <li key={id} className="each-list">
      <div className="list-items">
        <p>{timeAccessed}</p>
        <img src={logoUrl} className="image-url" alt="domain logo" />
        <p className="para">{title}</p>
        <p>{domainUrl}</p>
      </div>

      <div>
        <button type="button" onClick={deleteHistory} data-testid="delete">
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            className="delete-img"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryListItems
