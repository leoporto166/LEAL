import './App.css'
import "./stars.css"
import { FaChevronDown } from "react-icons/fa"
import { FaSpotify } from "react-icons/fa"
import { motion } from "framer-motion"

import planos from "../imagens/planos.avif"
import afrodite from "../imagens/afrodite.jpg"
import encontro2 from "../imagens/Encontro2.jpeg"
import Ppostagem from "../imagens/Primeira postagem.jpeg"
import Mae from "../imagens/Mãe.jpeg"
import Pdela from "../imagens/Pais dela.jpeg"
import Alianca from "../imagens/Aliança.jpeg"
import Casamento from "../imagens/Casamento.jpeg"
import Juju from "../imagens/juju.jpeg"
import Corrida from "../imagens/Corrida.jpeg"

document.querySelectorAll('.scroll-link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    const targetSelector = (e.currentTarget as HTMLAnchorElement).getAttribute('href')!;
    const target = document.querySelector(targetSelector);

    target?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
});

function App() {

  return (
    <body>

      <header className='text-lg z-100 relative'
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
        <a href="#inico" className='glow2 cursor-pointer hover:text-xl transition-all duration-1000 scroll-link' >Inicio</a>
        <a href="#Musicas" className='glow2 cursor-pointer hover:text-xl transition-all duration-1000 scroll-link'>Nossas Musicas</a>
        <a href="#Tempo" className='glow2 cursor-pointer hover:text-xl transition-all duration-1000 scroll-link'>Linha do Tempo</a>
        <a href="#Carta" className='glow2 cursor-pointer hover:text-xl transition-all duration-1000 scroll-link'>Carta</a>
      </header>


      <main id='inico'>

        <div className="stars stars-1"></div>
        <div className="stars stars-2"></div>
        <div className="stars stars-3"></div>


        {/* ===== HERO COM ANIMAÇÃO ===== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='flex justify-center items-center h-[500px] flex-col relative z-10 text-white mt-[50px]'
        >
          <div className='text-6xl font-extrabold glow'>LEONARDO + ALLANA</div>

          <div className='text-lg text-center glow2 mt-3'>
            O universo sorriu quando nossos caminhos se cruzaram
          </div>

          <FaChevronDown size={24} className='mt-[50px]' />
        </motion.div>



        <section id='Musicas'>

          {/* ===== TÍTULO DA SEÇÃO ===== */}
          <motion.h1
            className='glow2 text-5xl flex justify-center mb-10 font-bold'
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Nossas Musicas
          </motion.h1>




          <div className='flex justify-center items-center gap-5'>

            {/* ===== CARD 1 ===== */}
            <motion.div
              className='border glow3 p-4 w-[400px] h-[565px] flex flex-col items-center'
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <img src={planos} className='w-[250px] mt-2' />

              <div className='text-[15px] mt-2.5 px-3'>
                "Eu poderia escrever mil canções só pra você Poderia te falar meus motivos pra
                gostar tanto de você Me diz quando a gente vai se ver Pra eu poder te abraçar
                E tentar te explicar a falta que você me faz Eu não aguento mais ficar tão longe
                de você!"
              </div>

              <a href="https://open.spotify.com/intl-pt/track/7oqARxK7yPG9U0M3dG0VrR" target='_blank'>
                <div className='glow4 text-black mt-[100px] w-[150px] flex justify-center cursor-pointer'>
                  <FaSpotify size={20} />
                </div>
              </a>
            </motion.div>


            {/* ===== CARD 2 ===== */}
            <motion.div
              className='border glow3 p-4 w-[400px] h-[565px] flex flex-col items-center'
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <img src={afrodite} className='w-[250px] mt-2' />

              <div className='text-[15px] mt-2.5 px-3'>
                "Para
                Quando estamos cara a cara, eu
                Sei que qualquer um repara
                Nesse sentimento entre a gente
                Para
                Isso aqui é coisa rara
                Quanto mais o tempo passa
                Mais você prova que é diferente"
              </div>

              <a href="https://open.spotify.com/intl-pt/track/1g2176SBhQ3vcp4YdfTmAP" target='_blank'>
                <div className='glow4 text-black mt-[125px] w-[150px] flex justify-center cursor-pointer'>
                  <FaSpotify size={20} />
                </div>
              </a>
            </motion.div>

          </div>
        </section>

    <section id='Tempo'>

      <motion.h1
        className='glow2 text-5xl flex justify-center mb-10 font-bold mt-10'
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Linha do Tempo
      </motion.h1>

      <div className="flex justify-center relative mt-10">

        {/* Linha */}
        <div className="w-1 h-[5550px] glow5 rounded-full"></div>

        {/* Evento 1 */}
        

        <motion.div
          className="absolute left-1/2 -translate-x-1/2 top-10 flex flex-col items-center"
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
        >
          <div className="w-6 h-6 bg-white rounded-full glow5"></div>
          <div className='glow3 w-[400px] mr-[450px]'>
            <p className="text-white/70 mt-2 font-semibold">4 de Julho de 2025</p>

            <h2 className='text-3xl font-semibold'>O Começo</h2>

            <p className='font-black'>Tudo começou com uma resposta ao seu story: "Verdade, tudo é efêmero… menos minha queda por você". Aí você me deu corda e a gente foi conversando</p>
          </div>
        </motion.div>

        <motion.div
          className="absolute left-1/2 -translate-x-1/2 top-70 flex flex-col items-center"
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
        >
          <div className="w-6 h-6 bg-white rounded-full glow5"></div>
          <div className='glow3 w-[400px] ml-[450px]'>
            <p className="text-white/70 mt-2 font-semibold">18 de Julho de 2025</p>

            <h2 className='text-3xl font-semibold'>Confirmações</h2>

            <p className='font-black'>Tudo poderia ter acabado aqui, mas você deu uma resposta que me convenceu kkkkkkkk. Confirmamos nosso encontro</p>
          </div>
        </motion.div>

        <motion.div
          className="absolute left-1/2 -translate-x-1/2 top-130 flex flex-col items-center"
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
        >
          <div className="w-6 h-6 bg-white rounded-full glow5"></div>
          <div className='glow3 w-[400px] mr-[450px]'>
            <p className="text-white/70 mt-2 font-semibold">16 de agosto de 2025</p>

            <h2 className='text-3xl font-semibold'>Primeiro Beijo</h2>

            <p className='font-black'>Eu não consigo me decidir entre esses dois encontros, qual foi o melhor? Eu realmente não sei. Mas de uma coisa eu tenho certeza: o seu beijo é o melhor de todos</p>

            <img src={encontro2} className='rounded-xl'></img>


          </div>
        </motion.div>

        <motion.div
          className="absolute left-1/2 -translate-x-1/2 top-270 flex flex-col items-center"
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
        >
          <div className="w-6 h-6 bg-white rounded-full glow5"></div>
          <div className='glow3 w-[400px] ml-[450px]'>
            <p className="text-white/70 mt-2 font-semibold">28 de agosto de 2025</p>

            <h2 className='text-3xl font-semibold'>Eu te amo</h2>

            <p className='font-black'>Nosso primeiro EU TE AMO… eu não consigo colocar em palavras a sensação que senti, e que ainda sinto até hoje, quando te falo e você me fala "EU te amo"</p>

          </div>
        </motion.div>

        <motion.div
          className="absolute left-1/2 -translate-x-1/2 top-330 flex flex-col items-center"
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
        >
          <div className="w-6 h-6 bg-white rounded-full glow5"></div>
          <div className='glow3 w-[400px] mr-[450px]'>
            <p className="text-white/70 mt-2 font-semibold">30 de agosto de 2025</p>

            <h2 className='text-3xl font-semibold'>Primeira Postagem</h2>

            <p className='font-black'>Primeiro que esse dia foi muito legal, foi muito divertido lá no Lifebox. Sua unha… você conheceu meus amigos, foi muito daora</p>

            <div className='flex justify-center'><img src={Ppostagem} className='rounded-xl h-[300px]'></img></div>


          </div>
        </motion.div>

        <motion.div
          className="absolute left-1/2 -translate-x-1/2 top-470 flex flex-col items-center"
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
        >
          <div className="w-6 h-6 bg-white rounded-full glow5"></div>
          <div className='glow3 w-[400px] ml-[450px]'>
            <p className="text-white/70 mt-2 font-semibold">14 de setembro de 2025</p>

            <h2 className='text-3xl font-semibold'>Meu pai</h2>

            <p className='font-black'>Grande dia de conhecer meu pai, foi o dia da apresentação também</p>


          </div>
        </motion.div>

        <motion.div
          className="absolute left-1/2 -translate-x-1/2 top-530 flex flex-col items-center"
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
        >
          <div className="w-6 h-6 bg-white rounded-full glow5"></div>
          <div className='glow3 w-[400px] mr-[450px]'>
            <p className="text-white/70 mt-2 font-semibold">28 de setembro de 2025</p>

            <h2 className='text-3xl font-semibold'>Minha Mãe</h2>

            <p className='font-black'>Foi o dia de você conhecer minha mãe e minhas irmãs. Não podemos deixar de lembrar do seu maior ídolo… Eles gostam de você, que bom! Prova disso é te incluírem em tudo</p>

            <img src={Mae} className='rounded-xl'></img>


          </div>
        </motion.div>
        

        <motion.div
          className="absolute left-1/2 -translate-x-1/2 top-665 flex flex-col items-center"
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
        >
          <div className="w-6 h-6 bg-white rounded-full glow5"></div>
          <div className='glow3 w-[400px] ml-[450px]'>
            <p className="text-white/70 mt-2 font-semibold">04 de outubro de 2025</p>

            <h2 className='text-3xl font-semibold'>Seus Pais</h2>

            <p className='font-black'>Foi a minha vez de passar apuros… kkkkkk brincando, mas eu estava tão nervoso. Nunca tinha feito isso antes. Graças a Deus deu tudo MAIS que certo!!!</p>

            <img src={Pdela} className='rounded-xl'></img>


          </div>
        </motion.div>

        <motion.div
          className="absolute left-1/2 -translate-x-1/2 top-780 flex flex-col items-center"
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
        >
          <div className="w-6 h-6 bg-white rounded-full glow5"></div>
          <div className='glow3 w-[400px] mr-[450px]'>
            <p className="text-white/70 mt-2 font-semibold">24 de outubro de 2025</p>

            <h2 className='text-3xl font-semibold'>Pedido</h2>

            <p className='font-black'>A melhor escolha que fiz: te pedir em namoro! Poder te chamar de verdade de namorada, olhar para minha mão e ver nossa aliança. Toda vez que termino de rezar, dar um beijo nela, sentir ela no meu dedo, mostrar para as pessoas… TE ASSUMIR a melhor coisa!</p>

            <img src={Alianca} className='rounded-xl'></img>


          </div>
        </motion.div>

        <motion.div
          className="absolute left-1/2 -translate-x-1/2 top-925 flex flex-col items-center"
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
        >
          <div className="w-6 h-6 bg-white rounded-full glow5"></div>
          <div className='glow3 w-[400px] ml-[450px]'>
            <p className="text-white/70 mt-2 font-semibold">01 de novembro de 2025</p>

            <h2 className='text-3xl font-semibold'>Casamento</h2>

            <p className='font-black'>É tão daora sentir que faço parte da sua família...</p>

            <img src={Casamento} className='rounded-xl'></img>


          </div>
        </motion.div>

        <motion.div
          className="absolute left-1/2 -translate-x-1/2 top-1060 flex flex-col items-center"
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
        >
          <div className="w-6 h-6 bg-white rounded-full glow5"></div>
          <div className='glow3 w-[400px] mr-[450px]'>
            <p className="text-white/70 mt-2 font-semibold">07 de novembro de 2025</p>

            <h2 className='text-3xl font-semibold'>Aniversario da Juju</h2>

            <p className='font-black'>Já te falei que amo sua presença junto da minha família? Parece que você conhece a gente há anos. Eles só te elogiam e gostam de você</p>

            <img src={Juju} className='rounded-xl'></img>


          </div>
        </motion.div>

            <motion.div
          className="absolute left-1/2 -translate-x-1/2 top-1225 flex flex-col items-center"
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
        >
          <div className="w-6 h-6 bg-white rounded-full glow5"></div>
          <div className='glow3 w-[400px] ml-[450px]'>
            <p className="text-white/70 mt-2 font-semibold">16 de novembro de 2025</p>

            <h2 className='text-3xl font-semibold'>Corrida e rap10</h2>

            <p className='font-black'>Um dos nossos melhores dias, pra mim. Eu me senti muito mais que seu namorado nesse dia; foi um sentimento muito especial, diferente e bom. EU TE AMO!!</p>

            <img src={Corrida} className='rounded-xl'></img>


          </div>
        </motion.div>

      </div>

    </section>

      <section className=' flex flex-col items-center' id='Carta'>
          <motion.h1
          className='glow2 text-5xl flex justify-center mb-10 font-bold mt-10'
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Carta
        </motion.h1>

        <motion.div
          className=' flex justify-center mb-10 font-bold mt-10 glow6 w-[600px] flex-col items-center'
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className='text-4xl'>Nosso Amor</h3>

          <p className='text-lg mt-5 center'>
            Vida, te amar é a melhor sensação e a atitude mais fácil que eu tenho. É uma sensação inexplicável. Meu mundo para por você. Tudo me leva a querer te fazer feliz, querer te dar o melhor dos mundos, ser o melhor namorado possível. Nem sempre consigo, mas eu tento. Tenho certeza de que você tá bem brava comigo por eu não ter te dado atenção hoje, mas foi por um bom motivo: eu estava fazendo isso aqui kkkkkkkk.
            <br />
            <br />
            Nós temos muito mais pra viver. Vamos até o fim, eu e você, juntos, passando por todas as adversidades e obstáculos. Vão vir muitos, mas tenho certeza de que passaremos juntos! Eu estou aqui por você pra qualquer coisa, realmente.
            <br />
            <br />
            Nunca duvide do meu amor. Ele sempre vai estar presente em 333%. É impossível te amar menos que isso, simplesmente não consigo. Eu tenho muita sorte de ter te encontrado, de ter uma mulher tão maravilhosa na minha vida. Sou o cara mais sortudo do mundo
            <br />
            <br />
            Nosso amor é lindo, leve, perfeito. Nem sempre é fácil, mas vale a pena. Estar envolvido nesse amor sempre vale a pena. Allana de Castro Nunes Aquino, EU te amo da forma mais pura possível
          </p>
        </motion.div>

        
      </section>

    </main>
  </body>
  )
}

export default App

