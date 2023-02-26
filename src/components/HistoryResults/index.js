import './index.css'

const HistoryResults = props => {
  const {history, deleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = history

  const deleteItem = () => {
    deleteHistory(id)
  }

  return (
    <li className="list-item">
      <div className="each-item">
        <p className="time"> {timeAccessed} </p>
        <img src={logoUrl} className="app-logo" alt="domain logo" />
        <p className="title"> {title} </p>
        <p className="time"> {domainUrl} </p>
      </div>
      <div>
        <button
          type="button"
          className="delete-button"
          onClick={deleteItem}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="delete-logo"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryResults
