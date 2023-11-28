import './Premium.css'


const Premium = () => {
  return (
    <section className='plan'>
    <div className="mt-5 pt-4" >
        <div className="premium m-5">
            <div className=" container-fluid p-3">
                <div className="title p-3 text-center text-white">
                    <h1>Choose the plan that's right for you.</h1>
                    <p className='mt-3'>This all plan is compatable for all user,<br /> and its also benefitable to build your health.</p>
                </div>
                <div className="row plans gap-5 d-flex flex-wrap justify-content-center my-5">
                    <div className="col-lg-3 card shadow  rounded">
                        <div className="header mt-4 text-center">
                            <h6 className=''>Brozen</h6>
                            <h1 className='rubee'>&#8377;699</h1>
                            <p>Per Month</p>
                            <hr />
                        </div>
                        <div className="body mt-2">
                            <ul className='fs-5 mx-5'>
                                <li>qwe</li>
                                <li>qwerfg</li>
                                <li>werfg</li>
                                <li>qwerfg</li>
                                <li>werfg</li>
                            </ul>
                            <div className="text-center">
                                <button className='btn btn-primary m-4 px-3 rounded'>Choose Plan</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 card shadow  rounded">
                        <div className="header mt-4 text-center">
                            <h6 className=''>Silver</h6>
                            <h1 className='rubee'>&#8377;1799</h1>
                            <p>Per 3 Month</p>
                            <hr />
                        </div>
                        <div className="body mt-2">
                            <ul className='fs-5 mx-5'>
                                <li>qwe</li>
                                <li>qwerfg</li>
                                <li>werfg</li>
                                <li>qwerfg</li>
                                <li>werfg</li>
                            </ul>
                            <hr />
                            <div className="text-center">
                                <button className='btn btn-primary m-4 px-3 rounded'>Choose Plan</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 card shadow  rounded">
                        <div className="header mt-4 text-center">
                            <h6 className=''>Gold</h6>
                            <h1 className='rubee'>&#8377;3499</h1>
                            <p>Per 6 Month</p>
                            <hr />
                        </div>
                        <div className="body mt-2">
                            <ul className='fs-5 mx-5'>
                                <li>qwe</li>
                                <li>qwerfg</li>
                                <li>werfg</li>
                                <li>qwerfg</li>
                                <li>werfg</li>
                            </ul>
                            <hr />
                            <div className="text-center">
                                <button className='btn btn-primary m-4 px-3 rounded'>Choose Plan</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 card shadow  rounded">
                        <div className="header mt-4 text-center">
                            <h6 className=''>Diamond</h6>
                            <h1 className='rubee'>&#8377;6999</h1>
                            <p>Per year</p>
                            <hr />
                        </div>
                        <div className="body mt-2">
                            <ul className='fs-5 mx-5'>
                                <li>qwe</li>
                                <li>qwerfg</li>
                                <li>werfg</li>
                                <li>qwerfg</li>
                                <li>werfg</li>
                            </ul>
                            <hr />
                            <div className="text-center">
                                <button className='btn btn-primary m-4 px-3 rounded'>Choose Plan</button>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    </div>
    </section>
  )
}

export default Premium