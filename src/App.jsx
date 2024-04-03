import { useState } from "react"


function App() {

  const [color,setColor]=useState('black')



  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
      <div className="fixed flex flex-wrap justify-center bottom-10 inset-x-0 px-5">
        <div className="flex flex-wrap justify-center gap-5 shadow-lg bg-white  px-4 py-2 rounded-xl">
            <button onClick={()=>setColor('red')} className="outline-none px-4 rounded-full text-white shadow-xl" style={{backgroundColor:'Red'}}>Red</button>
            <button onClick={()=>setColor('green')} className="outline-none px-4 rounded-full text-white shadow-xl" style={{backgroundColor:'Green'}}>Green</button>
            <button onClick={()=>setColor('blue')} className="outline-none px-4 rounded-full text-white shadow-xl" style={{backgroundColor:'Blue'}}>Blue</button>
            <button onClick={()=>setColor('cyan')} className="outline-none px-4 rounded-full text-white shadow-xl" style={{backgroundColor:'cyan'}}>Cyan</button>
            <button onClick={()=>setColor('pink')} className="outline-none px-4 rounded-full text-white shadow-xl" style={{backgroundColor:'pink'}}>Pink</button>
            <button onClick={()=>setColor('yellow')} className="outline-none px-4 rounded-full text-white shadow-xl" style={{backgroundColor:'yellow'}}>Yellow</button>
            <button onClick={()=>setColor('crimson')} className="outline-none px-4 rounded-full text-white shadow-xl" style={{backgroundColor:'Crimson'}}>Crimson</button>
        </div>
      </div>
    </div>
  )
}

export default App
