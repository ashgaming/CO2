import React from 'react'

export default function Footer() 
{
    return (
        <>
        <div>
            <footer>
                <footer className="text-center text-white" Style="background-color: #f1f1f1;">
                    <div className="container pt-4">
                        <section className="mb-4">
                        <div className='container'>
                                <ul>
                                    <li Style='color:black'>
                                        <a href='http://localhost:3000/check'>Check Discount</a>
                                    </li>
                                </ul>
                                </div>
                            <a
                                className="btn btn-link btn-floating btn-lg text-dark m-1"
                                href="/"
                                role="button"
                                data-mdb-ripple-color="dark"
                            ><i className="fab fa-facebook-f"></i>
                            </a>

                            <a
                                className="btn btn-link btn-floating btn-lg text-dark m-1"
                                href="/"
                                role="button"
                                data-mdb-ripple-color="dark"
                            ><i className="fab fa-twitter"></i></a>

                            <a
                                className="btn btn-link btn-floating btn-lg text-dark m-1"
                                href="#!"
                                role="button"
                                data-mdb-ripple-color="dark"
                            ><i className="fab fa-google"></i>
                            </a>


                            <a
                                className="btn btn-link btn-floating btn-lg text-dark m-1"
                                href="#!"
                                role="button"
                                data-mdb-ripple-color="dark"
                            ><i className="fab fa-instagram"></i>
                            </a>


                            <a
                                className="btn btn-link btn-floating btn-lg text-dark m-1"
                                href="#!"
                                role="button"
                                data-mdb-ripple-color="dark"
                            ><i className="fab fa-linkedin"></i>
                            </a>

                            <a
                                className="btn btn-link btn-floating btn-lg text-dark m-1"
                                href="#!"
                                role="button"
                                data-mdb-ripple-color="dark"
                            ><i className="fab fa-github"></i></a>
                        </section>


                    </div>



                    <div className="text-center text-dark p-3" Style="background-color: rgba(0, 0, 0, 0.2);">
                        <strong className="text-dark">CO2.com</strong>
                    </div>

                </footer>
            </footer>
        </div>
        </>
    )
}
