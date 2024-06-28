import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {
    selectedCapitalId: countryAndCapitalsList[0].id,
  }

  handleChange = event => {
    this.setState({selectedCapitalId: event.target.value})
  }

  render() {
    const {selectedCapitalId} = this.state
    const selectedCapital = countryAndCapitalsList.find(
      capital => capital.id === selectedCapitalId,
    )

    return (
      <div className="capitals-container">
        <h1 className="heading">Countries And Capitals</h1>
        <div className="dropdown-container">
          <select
            className="dropdown"
            value={selectedCapitalId}
            onChange={this.handleChange}
          >
            {countryAndCapitalsList.map(capital => (
              <option key={capital.id} value={capital.id}>
                {capital.capitalDisplayText}
              </option>
            ))}
          </select>
          <p className="country-display">is capital of which country?</p>
          <p className="country">{selectedCapital.country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
