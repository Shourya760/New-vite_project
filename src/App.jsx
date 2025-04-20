import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Benjamin Portfolio</title>
      </head>
      <body class="font-sans bg-white text-gray-800">
        <div class="flex h-screen">
          {/* <!-- Left Side --> */}
          <div class="w-1/2 flex flex-col justify-center px-16 space-y-6">
            <h2 class="text-xl uppercase text-gray-500">Hi there!</h2>
            <h1 class="text-5xl font-bold">
              I'm <span class="text-yellow-500">Shourya Verma</span>
            </h1>
            <h3 class="text-lg font-medium uppercase text-gray-700">
              Graphic Designer / Electronics Engineer
            </h3>
            <p class="text-gray-600 max-w-md">
              Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humor and the like).
            </p>
            <button class="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded w-max transition">
              Know About Me
            </button>
          </div>

          {/* <!-- Right Side --> */}
          <div class="w-1/2 relative bg-gray-100 flex items-center justify-center">
            {/* <!-- Replace this with actual image --> */}
            <img src="shourya.jpg" alt="Shourya" class="w-full h-full object-cover" />


            <div class="absolute right-6 top-1/2 -translate-y-1/2 bg-yellow-500 py-4 px-3 rounded-full shadow-xl space-y-4">
              <a href="#" class="block w-8 h-8 rounded-full flex items-center justify-center text-yellow-500  hover:scale-110 transform transition duration-300 shadow-md bg-white backdrop-blur-sm">
                F
              </a>
              <a href="#" class="block w-8 h-8 rounded-full flex items-center justify-center text-yellow-500  hover:scale-110 transform transition duration-300 shadow-md bg-white backdrop-blur-sm">
                T
              </a>
              <a href="#" class="block w-8 h-8 rounded-full flex items-center justify-center text-yellow-500  hover:scale-110 transform transition duration-300 shadow-md bg-white backdrop-blur-sm">
                I
              </a>
              <a href="#" class="block w-8 h-8 rounded-full flex items-center justify-center text-yellow-500  hover:scale-110 transform transition duration-300 shadow-md bg-white backdrop-blur-sm">
                L
              </a>
            </div>

          </div>
        </div>
        <script type="module" src="/src/main.js"></script>
      </body>

    </>
  )
}

export default App
