import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyComponent, { SecretMessage } from './MyComponent'

function App() {

  const [count, setCount] = useState(0)
  const images = ["https://picsum.photos/200/300?random=1","https://picsum.photos/200/300?random=2","https://picsum.photos/200/300?random=3","https://picsum.photos/200/300?random=4"]
  const increaseCounter = () =>{
    setCount((count+1)%4);
    
  }

  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>First React App By Toshik</h1>
      <MyComponent color="-40px" colour="yellow"/>
      <MyComponent color="-40px" colour="red" />
      <SecretMessage/>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          subscribe to toshik
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
  </p> */}
  <h4>Project 1 : My Carousel</h4>
  <button onClick={increaseCounter}>Next</button>
  <img src={images[count]}/>
    </>
  )
}

export default App
