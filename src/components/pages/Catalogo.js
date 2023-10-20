import React from "react";
import misa1 from "../images/misa1.jpg"


function Catalogo () {
    return (
        
           <section className="section bg-c-light border-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-4 text-center">
                            <h3 className="main-heading">catalogo</h3>
                        </div>
                        <div className="col-md-4">
                            <div className="card shadow">
                                <img src={misa1} className="w-100 border-botton" alt="services"/>
                                <div className="card-body">
                                    <h6>ropa</h6>
                                    <div className="underline"></div>
                                    <p>
                                        ropa 1
                                    </p>
                                </div>
                            </div>
                        </div>
                    
                    </div>
                </div>
           </section>
        
    );

}

export default Catalogo;