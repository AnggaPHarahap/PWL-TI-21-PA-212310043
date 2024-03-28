import React, { Component } from 'react'
import MessegersUI from './widgets/messagers/MessegersUI'
export default class ChapterOne extends Component {
  render() {
    return (
      <div>
        <h1 className='text-black mb-5'>
          Chapter one: The messengers
        </h1>
        <MessegersUI />
      </div>
    )
  }
}