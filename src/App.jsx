import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState('light')

  const togglingTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }

  return (
    <div className={`min-h-screen flex flex-col justify-center items-center ${theme === 'light' ? 'bg-white text-gray-900' : 'bg-gray-900 text-white'}`}>
      <h1 className={'text-3xl font-bold mb-6'}>Counter App</h1>
      <div className="flex flex-col gap-5">
        <button className="px-10 py-2 rounded bg-gray-500 hover:bg-gray-600" onClick={togglingTheme}>
            Toggle {theme === 'light' ? 'Dark' : 'Light'} Theme
        </button>
      </div>
    </div>
  )
}

export default App
