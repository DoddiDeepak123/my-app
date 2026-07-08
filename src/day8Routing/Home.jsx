import React from 'react';
import "./Home.css";

function Home() {
    return (
        <div className="homepage">
         <header className='header'>
        <div className="logo">Freshbooks</div>
        <nav className="nav">
            <a href="#">Accountants</a>
            <a href="#">Pricing</a>
            <a href="#">Login</a>
            <button className="signup-button">Sign Up Free</button>
        </nav>
       </header>
       <main className="main-content">
         <h1>Welcome to Freshbooks</h1>
         <p>Your accounting software for small businesses.</p>
       </main>
        </div>
    );
}

export default Home;