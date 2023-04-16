// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {num: 0, description: 'Count is Even'}

  onIncrement = () => {
    const number = Math.ceil(Math.random() * 100)

    if (number % 2 === 0) {
      this.setState({num: number, description: 'Count is Even'})
    } else {
      this.setState({num: number, description: 'Count is Odd'})
    }
  }

  render() {
    const {num, description} = this.state
    return (
      <div className="bg-container">
        <div className="container">
          <h1>Count {num}</h1>
          <p>{description}</p>
          <button type="button" onClick={this.onIncrement}>
            Increment
          </button>
          <p className="description">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
