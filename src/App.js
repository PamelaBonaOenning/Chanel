import './App.css';

function App() {
  return (
    <body className="Body">

      <main className='Main'>

        <div>
          <img src='../assets/Gabrielleparfum.jpg' alt='Perfume Gabrielle' className='Image'></img>
        </div>

        <div className='Box'>
          <h2 className='Perfume'>PERFUME</h2>
          <h1 className='Titulo'> Gabrielle Essence Eau De Parfum</h1>
          <p>A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</p>
          <div className='Price'>
            <span>$149.99</span>
            <span className='Oldprice'>$169.99</span>
          </div>

          <button className='Button'>
            <img src='../assets/shopping-cart.png' className='Shopping' alt='Shopping' />
            Add to Cart
          </button>
        </div>

      </main>
      
    </body>

  );
}

export default App;
