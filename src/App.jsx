import React, { useState } from 'react';

const App = () => {

    const [num, setNum] = useState(0);

    return (
        <>
            <div className="container">
                <div className="inner_container">
                        <h1 className="header">{num}</h1>
                    <div className="buttons_div">
                        <button className="btn" onClick={() => num < 20 ? setNum(num + 1) : alert("Opp's You reached the limit !!..")} > Increment  </button>
                        <button className="btn" onClick={() => num > 0 ? setNum(num - 1) : alert(" Opp's You reached the limit !!..")} > Decrement </button>
                        <button className="btn" onClick={() => setNum(0)} > Reset </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App;