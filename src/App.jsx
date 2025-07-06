import { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import Confetti from 'react-confetti';


function App() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState('light');
  const [showConfetti, setShowConfetti] = useState(false);

  const togglingTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }

  const handleIncrease = () => {
    setCount(prev => {
      const newCount = prev + 1;
      if(newCount % 10 === 0){
        setShowConfetti(true);
      }
      return newCount;
    })
  }

  const handleDescrease = () => {
    if(count > 0){
      setCount(count - 1);
    }
  }

  const handleReset = () => {
    setCount(0)
  }

  useEffect(() => {
    let timer;
    if(showConfetti){
      timer = setTimeout(() => {
        setShowConfetti(false);
      },5000)
    }
    return () => clearTimeout(timer);
  }, [showConfetti]);

  return (
    <div className={`min-h-screen flex flex-col justify-center items-center ${theme === 'light' ? 'bg-white text-gray-900' : 'bg-gray-900 text-white'}`}>
      {showConfetti && <Confetti width={window.innerWidth} height={window.innerHeight} 
      style={{position: 'fixed', top: 0, left: 0, zIndex: 9999}}/>}
      <h1 className={'text-3xl font-bold mb-6'}>Counter App</h1>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        key={count}
        className={`text-6xl font-extrabold text-center ${count > 0 && count % 10 === 0 ? 'text-green-500' : ''}`}>
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
