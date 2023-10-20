import React from 'react';
import SecondSlider from '../SecondSlider';
import { Link } from 'react-router-dom';


function Nosotros () {
    return (

    <div> 
        <section className='section' id='section-cata'>
                <div className="container">
                    <div className='row'>
                        <div className='col-md-12 text-center'>
                            <h3 className='main-headingNosotros'>¿Quienes somos?</h3>
                           
                            <p>
                             Cata Store es una tienda de ropa en línea que nace de la pasión por la moda y la comodidad. brindamos a nuestros clientes acceso a las últimas tendencias de moda desde la comodidad de sus hogares. Creemos que la moda debe ser accesible y conveniente para todos, y eso es exactamente lo que ofrecemos.
                            </p>
                        </div>
                    </div>
                </div>

                <hr/>

                <div className="container">
                    <div className='row'>
                        <div className='col-md-12 mb-4 text-center'>
                            <h3 className='main-heading-a'>¿Que puedes encontrar en Cata Store?</h3>
                            
                        </div>

                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        
                        <div className='col-md-4 text-center-justify'>
                            <h6>Catalogo para hombre</h6>
                            <p>
                            Ya sea que prefieras un estilo clásico y atemporal o te guste experimentar con las últimas tendencias, tenemos algo para todos. Nuestra selección incluye ropa para mujeres, hombres y niños.
                            </p>

                        </div>
                        <div className='col-md-4 text-center-justify'>
                            <h6>Catalogo para mujer</h6>
                            <p>
                            Nos enorgullece ofrecer ropa de alta calidad que está diseñada para durar. Trabajamos con marcas de renombre y diseñadores emergentes que se preocupan por la durabilidad y la comodidad.
                            </p>

                        </div>
                        <div className='col-md-4 text-center-justify'>
                            <h6>Catalogo para niño</h6>
                            <p>
                            Creemos que la moda de calidad no debe romper el banco. Ofrecemos precios competitivos y promociones regulares para que puedas vestirte con estilo sin gastar una fortuna.
                            </p>
                        </div>
                        <div className='col-md-4 text-center-justify'>
                            <h6>Catalogo para niña</h6>
                            <p>
                            Nos enorgullece ofrecer ropa de alta calidad que está diseñada para durar. Trabajamos con marcas de renombre y diseñadores emergentes que se preocupan por la durabilidad y la comodidad.
                            </p>

                        </div>
                        <div className='col-md-4 text-center-justify'>
                            <h6>Catalogo deportivo</h6>
                            <p>
                            Nos enorgullece ofrecer ropa de alta calidad que está diseñada para durar. Trabajamos con marcas de renombre y diseñadores emergentes que se preocupan por la durabilidad y la comodidad.
                            </p>

                        </div>
                        <div className='col-md-4 text-center-justify'>
                            <h6>Catalogo formal</h6>
                            <p>
                            Nos enorgullece ofrecer ropa de alta calidad que está diseñada para durar. Trabajamos con marcas de renombre y diseñadores emergentes que se preocupan por la durabilidad y la comodidad.
                            </p>

                        </div>
                    </div>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>

            </section>

            <SecondSlider/>

            <section className='sectionSeguir'>
                <div className="container">
                        <div className='row'>
                            <div className='col-md-12 text-center'>
                                <h3 className='main-headingNosotros'>¡Unete y siguenos!</h3>
                            
                                <p>
                                Explora nuestra tienda en línea y descubre cómo puedes mejorar tu estilo con la comodidad que te mereces. No olvides seguirnos en nuestras redes sociales para mantenerte al tanto de las últimas tendencias, promociones y novedades:
                                </p>
                                <hr/>
                                <ul><p>Facebook: @ModaVirtualOficial</p></ul>
                                <ul><p>Instagram: @ModaVirtualOficial</p></ul>
                                <ul><p>whatsapp: @ModaVirtualOficial</p></ul>
                                <hr/>
                                <Link to="/Contactos" class="btn btn-warning shadow">¡Contactanos!</Link>
                            </div>
                        </div>
                    </div>
            </section>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
         

        

    );

}

export default Nosotros;