import { useState } from 'react'
import { motion } from 'framer-motion';


function App() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState('light')

  const togglingTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }

  const handleIncrease = () => {
    setCount(count + 1);
  }

  const handleDescrease = () => {
    if(count > 0){
      setCount(count - 1);
    }
  }

  const handleReset = () => {
    setCount(0)
  }

  return (
    <div className={`min-h-screen flex flex-col justify-center items-center ${theme === 'light' ? 'bg-white text-gray-900' : 'bg-gray-900 text-white'}`}>
      <h1 className={'text-3xl font-bold mb-6'}>Counter App</h1>
      <motion.div className="text-6xl font-extrabold text-center">
        {count}
      </motion.div>
      <div className="flex flex-col gap-5 mt-8">
        <button className="px-10 py-2 rounded text-white bg-blue-500 hover:bg-blue-600" onClick={handleIncrease}>
            Increase
        </button>

        <button className="px-10 py-2 rounded text-white bg-red-500 hover:bg-red-600" onClick={handleDescrease}>
            Decrease
        </button>

        <button className="px-10 py-2 rounded text-white bg-green-500 hover:bg-green-600" onClick={handleReset}>
            Reset
        </button>

        <button className="px-10 py-2 rounded text-white bg-gray-500 hover:bg-gray-600" onClick={togglingTheme}>
            Toggle {theme === 'light' ? 'Dark' : 'Light'} Theme
        </button>
      </div>
    </div>
  )
}

export default App
