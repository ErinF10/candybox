import React from "react";
import Navbar from "../Components/Navbar";

const Home = () => {
    return (
        <div className="home">
            <Navbar />
            <h1>Welcome to the Candybox Creator!</h1>
            <div className="home-candy-image">
                <img src='https://cricketscandy.com/cdn/shop/files/candy.jpg?v=1677691542&width=3840' alt="candy image" />
            </div>
            <h4>Create your dream candybox by selecting each different customization!</h4>

        </div>
    )
}

export default Home