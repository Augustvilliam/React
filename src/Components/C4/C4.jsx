import React from 'react'

function C4() {
  return (
    <>
    <div>
    <div className="c4 container">
            <div className="desktop-grid-1 ">
            <div className="desk-grid-card">
                <h1>Make your money transfer simple and clear</h1>
                <ul>
                    <li>banking transactions are free for you</li>
                    <li>No montly cash commission</li>
                    <li>Manage payments and tranactions online</li>
                </ul>
                <a aria-label="learn more" className="btn-primary btn-hover">
                    <p>Learn More</p>
                    <i className="fa-solid fa-arrow-right"></i>
                </a>
            </div>
            <img className="graph-img" src="src/assets/img/Bg/stapel1.svg" alt="stapel1"></img>
            </div>
            <div className="desktop-grid-2 ">
            <img src="src/assets/img/Bg/stapel2.svg" alt="stapel2"></img>
            <div className="desk-grid-card2">
                <h1>Recive payment from interneational bank details</h1>
                <div id="grid-card1" className="kort1">
                    <div className="small-card">
                        <img src="src/assets/img/Bg/Small-icon/credit-card.svg" alt="kort"></img>
                    </div>
                    <p className="kortp">Manage your payments online. Mollis congue egestas egestas fermentum fames.</p>
                </div>
                <div id="grid-card2" className="kort1">
                    <div className="small-card">
                        <img src="src/assets/img/Bg/Small-icon/wallet.svg" alt="kort"></img>
                    </div>
                    <p className="kortp">Manage your payments online. Mollis congue egestas egestas fermentum fames.</p>
                </div>
                <a aria-label="learn more" className="btn-primary btn-hover">
                    <p>Learn more</p> 
                    <i className="fa-solid fa-arrow-right"></i>
                </a>
            </div>
            </div>
         </div>
    </div>
    </>
  )
}

export default C4