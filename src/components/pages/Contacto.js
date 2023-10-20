import React from 'react';

function Contacto () {
    return (
        <>
        <div className='card'>
            <section className="sectionform">
                <div className='containerform'>
                    <div className='card shadow'>
                        <div className='card-body'>
                            <div className='row' >
                                <div className='col-md-6 border-right'>
                                    <h6>¡Contactanos!</h6>
                                    <hr/>
                                    <div className='form-group'>
                                        <label className="mb-1">Nombre completo</label>
                                        <input type='text' className='form-control' placeholder='Angel...A...A...F' ></input>
                                    </div>
                                </div>
                                <div className='form-group'>
                                        <label className="mb-1">Correo electronico</label>
                                        <input type='email' className='form-control' placeholder='...@gmail.com' ></input>
                                    </div>
                                </div>
                                <div className='form-group'>
                                        <label className="mb-1">Numero de telefono</label>
                                        <input type='text' className='form-control' placeholder='310...' ></input>
                                </div>
                                <div className='form-group'>
                                        <label className="mb-1">Mensaje</label>
                                        <textarea rows="3" className="form-control" placeholder='escribe un mensaje...'></textarea>
                                </div>
                                <div className='form-group py-3'>
                                    <button type='button' className='btn btn-primary shadow w-100'>Enviar</button>
                                </div>
                         </div>
                                
                    </div>
                </div>
            </section>
        </div>
        </>
    );

}

export default Contacto;