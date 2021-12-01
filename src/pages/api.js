import React, { useEffect, useState } from 'react';
import { getCharacter } from './../services/api';

const Api = () => {

    const [page, setPage] = useState(1)
    const [character, setCharacter] = useState();


    useEffect(() => {
        getCharacter(page).then((response) => {
            setCharacter(response.data?.results);
        }).catch((errors) => {

        });
    }, [page]);

    return (
        <section className="bg-light">
            <div className="container">
                <h1>View Api</h1>
            </div>
            <div className="row">
                {character ? character.map((e) => (
                    <div className="card col-3 my-2">
                        <img src={e.image} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{e.name}</h5>
                            <p className="card-text">{e.gender}</p>
                        </div>
                    </div>
                ))
                    : null}
            </div>
            {/* Pendiente hacer esta funcionalidad de pasar de pagina */}
            {/* <nav aria-label="...">
                <ul className="pagination">
                    <li className="page-item active">
                        <button
                            className="page-link"
                            onClick={() => { (page > 1) && setPage(page - 1) }}
                        >
                            Anterior
                        </button>
                    </li>
                    <li className="page-item">
                        <button
                            className="page-link"
                            onClick={(pages) => {
                                if(pages!==3){
                                    setPage(pages+1);
                                }else{
                                    setPage(pages);
                                }
                            }}
                        >
                            {page}
                        </button>
                    </li>
                    <li className="page-item" aria-current="page">
                        <a className="page-link" href="#">2</a>
                    </li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    {page ? page.map((e) => {
                        <>

                        </>
                    }) :
                        null
                    }

                    <li className="page-item active">
                        <button
                            className="page-link"
                            onClick={() => { setPage(page + 1) }}
                        >
                            Siguiente
                        </button>
                    </li>
                </ul>
            </nav> */}
            <div className="m-3 d-flex justify-content-between">
                <div className="d-flex justify-content-center">
                    <button href="#" onClick={() => { ((page > 1) && setPage(page - 1) )}} className="col-auto m-2 btn btn-primary">
                        Anterior
                    </button>
                    <button onClick={() => { setPage(page + 1) }} className="col-auto m-2 btn btn-primary">
                        Siguiente
                    </button>
                </div>
                <button className="btn disabled">{page}</button>
            </div>
        </section>
    );
};

export default Api;