import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css'
import Layout from './components/layout'
import Home from './pages/home/home'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* Add more routes here as needed */}
        </Route>
      </Routes>
    </Router>
  )
}

export default App