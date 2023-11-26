import React from "react";
import 'react-bootstrap';

function Qt() {
    return (
        <>
            <style>
                {`
                    .qt-background {
                        background: url(https://images.unsplash.com/photo-1512442827816-8e5a088619c9?q=80&w=2035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D) no-repeat ;
                        background-size: cover;
                        padding: 100px 0;
                        background-attachment: fixed;
                        background-position: center center;
                        position: relative;
                        
                    }

                    .qt-background p {
                        font-size: 35px;
                        font-weight: 300;
                        line-height: 44px;
                        color: #fff;
                        font-family: 'Arbutus Slab', serif;
                        margin-bottom: 20px;
                    }

                    .qt-background span {
                        color: #fff;
                        font-size: 20px;
                        font-weight: 500;
                    }
                `}
            </style>

            <div className="qt-box qt-background">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 ml-auto mr-auto text-left" data-aos="fade-right">
                            <p className="lead" >
                                " Discover a new Adventure! "
                            </p>
                            <span className="lead"> -Viva la vida</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Qt;
