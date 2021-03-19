import React from 'react';

function Home()
{
    return(
        <div>
        <div className="main-container">
            <div className="img-wrapper list">
                <img src="https://i0.wp.com/cliktodeal.com/wp-content/uploads/2020/08/Apple-iPhone-6S-Gold.jpg?fit=1219%2C1500&ssl=1"/>
            </div>
            <div className="detail-wrapper list">
               Iphone 6 plus <br></br>Price: $ 5000. 00 
            </div>
            <button className="button-wrapper">ADD TO Cart</button>
        </div>
        <div className="addtocart">
            <img src="https://cdn3.iconfinder.com/data/icons/e-commerce-2-1/256/2-512.png"/>
        </div>
    </div>
    )
}

export default Home;