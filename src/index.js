import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MainPage } from './pages/main-page/main-page'
import { GamePage } from './pages/game-page/game-page'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="game" element={<GamePage />} />
    </Routes>
  </BrowserRouter>
);