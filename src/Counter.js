import React from 'react'
import { connect } from 'react-redux'
import { increment, decrement, reset } from './actions'

const mapStateToProps = state => {
  return {
    count: state.count
  }
}

const mapDispatchToProps = {
  increment,
  decrement,
  reset
}

class Counter extends React.Component {
  increment = () => {
    this.props.increment()
  }

  decrement = () => {
    this.props.decrement()
  }

  reset = () => {
    this.props.reset()
  }

  render() {
    return (
      <div className="counter">
        <h2>Counter</h2>
        <div>
          <button onClick={this.decrement}>-</button>
          <span className="count">{this.props.count}</span>
          <button onClick={this.increment}>+</button>
        </div>
        <button onClick={this.reset}>0</button>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
