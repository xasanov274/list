import './App.css'
import backend from './db.js'
function App() {
 

  return (
    <>
    <h1 className='h11'>Users</h1>
      <div className="obwi">
      <div className="right">
      <div className="block">
      <div className='block-image'>
        <img src={backend[0].img} alt="" />
      </div>
      <div className='h-big'>
      <h1>{backend[0].name}</h1>
      <h2>{backend[0].position}</h2>
      </div>
      </div>

      <div className='block'>
        <div className="block-image">
          <img src={backend[1].img} alt="" />
        </div>
        <div className='h-big'>
        <h1>{backend[1].name}</h1>
        <h2>{backend[1].position}</h2>
        </div>
      </div>

      <div className='block'>
        <div className="block-image">
        <img src={backend[2].img} alt="" />
        </div>
        <div className='h-big'>
        <h1>{backend[2].name}</h1>
        <h2>{backend[2].position}</h2>
        </div>
      </div>

      <div className='block'>
        <div className="block-image">
        <img src={backend[3].img} alt="" />
        </div>
        <div className='h-big'>
        <h1>{backend[3].name}</h1>
        <h2>{backend[3].position}</h2>
        </div>
      </div>

      <div className='block'>
        <div className="block-image">
        <img src={backend[4].img} alt="" />
        </div>
        <div className='h-big'>
        <h1>{backend[4].name}</h1>
        <h2>{backend[4].position}</h2>
        </div>
      </div>
      </div>

      <div className="left">
      <div className='block'>
        <div className="block-image">
        <img src={backend[5].img} alt="" />
        </div>
        <div className='h-big'>
        <h1>{backend[5].name}</h1>
        <h2>{backend[5].position}</h2>
        </div>
      </div>

      <div className='block'>
        <div className="block-image">
        <img src={backend[6].img} alt="" />
        </div>
        <div className='h-big'>
        <h1>{backend[6].name}</h1>
        <h2>{backend[6].position}</h2>
        </div>
      </div>

      <div className='block'>
        <div className="block-image">
        <img src={backend[7].img} alt="" />
        </div>
        <div className='h-big'>
        <h1>{backend[7].name}</h1>
        <h2>{backend[7].position}</h2>
        </div>
      </div>

      <div className='block'>
        <div className="block-image">
        <img src={backend[8].img} alt="" />
        </div>
        <div className='h-big'>
        <h1>{backend[8].name}</h1>
        <h2>{backend[8].position}</h2>
        </div>
      </div>

      <div className='block'>
        <div className="block-image">
        <img src={backend[9].img} alt="" />
        </div>
        <div className='h-big'>
        <h1>{backend[9].name}</h1>
        <h2>{backend[9].position}</h2>
        </div>
      </div>
      </div>
      </div>
    </>
  )
}

export default App
