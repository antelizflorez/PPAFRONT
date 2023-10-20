import React from 'react';
import Slider from '../Slider';
import { Link } from 'react-router-dom';


function Home () {
    return (
        <div>

            <Slider/>

             

            <section className='section' id='section-cata'>
                <div className="container">
                    <div className='row'>
                        <div className='col-md-12 text-center'>
                            <h3 className='main-heading'>Cata Store</h3>
                            <div className="underline mx-auto"></div>
                            <p>
                            ¡Descubre la moda del futuro en nuestra tienda de ropa virtual! En Cata Store, estamos emocionados de presentarte una experiencia de compra en línea que te cambiará la forma en que ves la moda. ¿Por qué limitarte a las tiendas físicas cuando puedes explorar un mundo de tendencias, estilos y prendas únicas desde la comodidad de tu hogar?
                            </p>
                            <Link to="/Nosotros" class="btn btn-warning shadow">¡Conoce mas sobre nosotros!</Link>
                        </div>
                    </div>
                </div>
            </section>

            

            <section className='section bg-c-light'>
                <div className="container">
                    <div className='row'>
                        <div className='col-md-12 mb-4 text-center'>
                            <h3 className='main-heading1'>¿Que puedes encontrar en Cata Store?</h3>
                            <div className="underline mx-auto"></div>
                        </div>
                        <div className='col-md-4 text-center-justify'>
                            <h6>Variedad de estilos</h6>
                            <p>
                            Ya sea que prefieras un estilo clásico y atemporal o te guste experimentar con las últimas tendencias, tenemos algo para todos. Nuestra selección incluye ropa para mujeres, hombres y niños.
                            </p>

                        </div>
                        <div className='col-md-4 text-center-justify'>
                            <h6>Calidad</h6>
                            <p>
                            Nos enorgullece ofrecer ropa de alta calidad que está diseñada para durar. Trabajamos con marcas de renombre y diseñadores emergentes que se preocupan por la durabilidad y la comodidad.
                            </p>

                        </div>
                        <div className='col-md-4 text-center-justify'>
                            <h6>Buenos precios</h6>
                            <p>
                            Creemos que la moda de calidad no debe romper el banco. Ofrecemos precios competitivos y promociones regulares para que puedas vestirte con estilo sin gastar una fortuna.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );

}

export default Home;