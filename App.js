import './App.css';
import imagem from './image.png';
import imagem_Voltar from './Voltar.png';
import configurar from './image 33.png';
import bolinha from './Ellipse 1.png';
import pessoinha from './pessoinha.png'


function App() {
  return (
     <div className='App'>

  
    <div className="App-header1">
      <header className="App-header">
        <div className="voltar">
          <img src={imagem_Voltar} alt="voltar" />
        </div>
        <h1 className="h1">Perfil</h1>
        <div className="configurar">
          <img src={configurar} alt="configurar" />
        </div>
      </header>


      <main className="main">
        <div className="perfil">
          <img src={imagem} alt="perfil" />
          <div className="info_perfil">
            <span>Pedro Maia</span>
            <div className="identificacao">
              <img src={bolinha} alt="bolinha" />
              <span>Professor</span>
            </div>
          </div>
        </div>


     
     <div className="input-section">
           <input className="texto" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit..." />
           <input className="input" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit ..." />
        </div>
    
      </main>
       
      <div className="quadradinho">
         <span className="span1">Editar Perfil</span>
      </div>
   
       <div className='p'>Postagens</div>
   
      <div className="quadradinho2">
         <span className="span2">Testar Nível</span>
      </div>
       
       <div className='p1'> Aulas </div>

      <div>
       <div className='pessoinha' alt="pessoinha">
       <img src={pessoinha}></img>
       <div className='nome'>José Silva </div> 
     
          </div>
     
       <div className='pessoinha2' alt="pessoinha2">
       <img src={pessoinha}></img>
       <div className='nome2'>José Silva </div> 
     
       </div>
       <div className='info' alt="info"></div>
    
    </div>
    <div class="quadrado_pequeno"></div>

    </div>
 </div>
   
   
   
  );
}


export default App;
