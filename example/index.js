import React, { Component } from 'react'
import { render } from 'react-dom'

const App = () => (<div><Header /></div>)

const Header = () => (<h1>Header Component</h1>)

render(<App />, document.getElementById('root'))


