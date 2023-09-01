import React from 'react'

const Home = () => {
  return (
    <div>
       <div className="add-to-cart">
                <img src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg" alt="add-to-cart" />
            </div>
            
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
                    <button>Add To Cart</button>
                </div>
            </div>
    </div>
  )
}

export default Home