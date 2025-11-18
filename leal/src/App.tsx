
import './App.css'
import "./stars.css"
import { FaChevronDown } from "react-icons/fa";

import planos from "../imagens/planos.avif"
import afrodite from "../imagens/afrodite.jpg"

function App() {


  return (
    <body>
      <header className='text-xl z-100 relative'
      style={{
        background: "linear-gradient(#04142A)", 
        backgroundSize: "200% 100%",
        animation: "shine 3s linear infinite",
        height: "50px",
        display: "flex",
        gap: "20px",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        fontWeight: "600"
      }}
      >
          <div className='glow2 cursor-pointer hover:glow2'>Inicio</div>

          <div className='glow2 cursor-pointer'>Nossas Musicas</div>

          <div className='glow2 cursor-pointer'>Linha do Tempo</div>

          <div className='glow2 cursor-pointer'>Galeria</div>

          <div className='glow2 cursor-pointer'>Carta</div>

      </header>


      <main>
      <div className="stars stars-1"></div>
      <div className="stars stars-2"></div>
      <div className="stars stars-3"></div>



        <div className='flex justify-center items-center h-[500px] flex-col relative z-10 text-white mt-[50px]'>

          <div className='text-6xl font-extrabold glow' >LEONARDO + ALLANA</div>

          <div className='text-lg text-center glow2'>O universo sorriu quando nossos caminhos se cruzaram</div>

          <FaChevronDown size={24} className='mt-[50px]' />

        </div>


        <section className='flex justify-center items-center gap-5'>
          <div className='border glow3 p-4 w-[250px] h-[400px] flex justify-center items-start '>
            <img src={planos} className=' w-[200px] mt-2'></img>
          </div>

          <div className='border glow3 p-4 w-[250px] h-[400px]  flex justify-center items-start '>
            <img src={afrodite} className=' w-[200px] mt-2'></img>
          </div>
        </section>
      

      </main>
    </body>
  )
}

export default App

