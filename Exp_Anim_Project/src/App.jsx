import './App.scss'
import cappuccino from './assets/cappuccino.png';
import chaiLatte from './assets/chai-latte.png';
import macchiato from './assets/macchiato.png';
import expresso from './assets/expresso.png';
function App() {

  return (
    <>

      <div className="text-with-some-images">
        <div className="text">
          <h1>Hi, This is Me</h1>
          <p>Welcome to this page</p>
        </div>
        <div className="image">
          <img src={cappuccino} alt="cappuccino" />
        </div>
      </div>

    <button className='btn'>Button 1</button>
    <button className='btn'>Button 2</button>
    <button className='btn'>Button 3</button>
    

      <div className="container">
        <div className="card">
          <div className="card-img">
            <img src={cappuccino} alt="cappuccino" />
          </div>
          <div className="card-body">
            <h3>Cappuccino</h3>
            <p>Card Description</p>
            <p>$8.50</p>
            <button>Order Now</button>
          </div>
        </div>

        <div className="card">
          <div className="card-img">
            <img src={macchiato} alt="macchiato" />
          </div>
          <div className="card-body">
            <h3>Macchiato</h3>
            <p>Card Description</p>
            <p>$7.00</p>
            <button>Order Now</button>
          </div>
        </div>

        <div className="card">
          <div className="card-img">
            <img src={chaiLatte} alt="chaiLatte" />
          </div>
          <div className="card-body">
            <h3>Chai Latte</h3>
            <p>Card Description</p>
            <p>$8.20</p>
            <button>Order Now</button>
          </div>
        </div>

        <div className="card">
          <div className="card-img">
            <img src={expresso} alt="expresso" />
          </div>
          <div className="card-body">
            <h3>Expresso</h3>
            <p>Card Description</p>
            <p>$7.99</p>
            <button>Order Now</button>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
