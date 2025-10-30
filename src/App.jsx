import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Workouts from './pages/Workout'
import Progress from './pages/Progress'
import ProfileForm from './pages/ProfileForm'
import ProfileView from './pages/ProfileView'
import DietTracker from './pages/DietTracker'
import ProfileRouter from './pages/ProfileRouter'
import ProfileEdit from './pages/ProfileEdit'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/workouts" element={<Workouts />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/profileform" element={<ProfileForm />} />
        <Route path="/profileview" element={<ProfileView />} />
        <Route path="/profileview" element={<ProfileView />} />
        <Route path="/profile" element={<ProfileRouter />} />
        <Route path="/profileedit" element={<ProfileEdit />} />
        <Route path="/diet" element={<DietTracker />} />
      </Routes>
    </>
  )
}

export default App
