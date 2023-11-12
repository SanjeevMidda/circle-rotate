import './index.css';
import { useState } from 'react';

function App() {

  const [rotate, setRotate] = useState(0);

  let styles = {
    transform: `rotate(${rotate}deg)`
  }

  function rotateCircle(){
    setRotate(rotate + 150);
    console.log(rotate);
  }

  return (
    <div className="App" onLoad={setInterval(rotateCircle, 1000)}>

    <div className="wrapper">
      <div className="circle" style={styles}>
        <h1>A</h1>
        <h1>B</h1>
        <h1>C</h1>
        <h1>D</h1>

        {/* <div className="innerCircle">
        </div> */}
      </div>
    </div>
      

    </div>
  );
}

export default App;
