import React from 'react'
 
const Home = (props) => {
    console.log("props", props)
  return (
    <div>
            
        <h1>Home Components</h1>
        <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://www.todayscloseout.com/v/vspfiles/photos/LG-OPTIMUS-P935-2.jpg?v-cache=1419945094" alt="mobile" />
                </div>
                <div className="text-wrapper item">
                    <span>
                        I-Phone
                    </span>
                    <span>
                        Price: $1000.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button onClick={() => props.addToCartHandler({price: 1000, name: "i phone"})}>Add To Cart</button>

                    <button onClick={() => props.removeToCartHandler()}>Remove To Cart</button>
                </div>
            </div>
    </div>
  )
}

export default Home