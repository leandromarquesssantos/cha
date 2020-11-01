import React, { useState, useEffect, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import firebase from '../../config/firebase';

import './ticket-card.css';

function TicketCard({id, annex, title, detail, views}) {
    
    /*
    const [urlImagem, setUrlImagem] = useState();
    
    useEffect(() => {
        firebase.storage().ref(`Ticket/Annex/${annex}`).getDownloadURL().then(url => setUrlImagem(url));
    }, [urlImagem]);
    */
   //<img src={urlImagem} alt='x' className="card-img-top img-card" />
    return (
        <div className="col-md-3 col-sm-12">
            
            <div className="card-body">
                <h5>{title}</h5>
                <p className="card-text text-justify">
                    {detail}
                </p>

                <div className="row footer-card d-flex align-items-center">
                    <div className="col-6">
                        <Link to={"/ticket/"+id} className="btn btn-sm btn-detalhes">+ detalhes</Link>
                    </div>

                    <div className="col-6 text-right">
                        <i class="fas fa-eye"></i>
                        <span>{views}</span>
                    </div>
                </div>

            </div>
            
        </div>
    )
};

export default TicketCard