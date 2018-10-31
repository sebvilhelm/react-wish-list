import React, { Component, createContext } from 'react'

const context = createContext()

export const WishConsumer = context.Consumer

export class WishProvider extends Component {
  state = {
    wishes: [],
  }
  render() {
    const { wishes } = this.state
    return (
      <context.Provider value={{ wishes }}>
        {this.props.children}
      </context.Provider>
    )
  }
}

export default context
