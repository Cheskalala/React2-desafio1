import React from 'react';



const Contacto = () => {
  return (
    <div className='m-5'>
        <h2 className='text-center' >Déjanos tu pedido</h2>
        <div className="mb-3">
            <label  className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
        </div>
        <div className="mb-3">
            <label  className="form-label">Example textarea</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <div className='d-grid gap-2 col-4 mx-auto'>
        <button className='btn btn-info '>
            Enviar
        </button>
        </div>
    </div>
  );
};

export default Contacto;