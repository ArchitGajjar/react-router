import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { App } from './App.2'
import { BrowserRouter } from 'react-router-dom'

const rootElement = document.getElementById('app')
if (!rootElement) throw new Error('Failed to find the root element')

const root = ReactDOM.createRoot(rootElement as HTMLElement)

root.render(
  <BrowserRouter basename='/app'>
    <App />
  </BrowserRouter>
)
