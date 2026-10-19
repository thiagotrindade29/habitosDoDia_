import { useState, useEffect } from "react";
import "./App.css";
import { Counter } from './components/Counter'
import { Header } from './components/Header'
import { HabitCard } from "./components/HabitCard";


function App() {

  return (
    <>
      <Header />
      <Counter />
      <HabitCard icon="💧" name="Beber 2L de água" />
    </>

  )


}

export default App
