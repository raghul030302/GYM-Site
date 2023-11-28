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
                    <div className="col-lg-3 card shadow  rounded ">
                        <div className="header mt-4 text-center">
                            <h6 className=''>Brozen</h6>
                            <h1 className='rubee'>&#8377;999</h1>
                            <p>Per Month</p>
                            <hr />
                        </div>
                        <div className="body mt-2">
                            <ul className='ms-4 my-4'>
                                <li>5 classes</li>
                                <li>4 Groupclass</li>
                                <li>Online-class Access</li>
                                <li>E-book fitness Access</li>
                                <li>Rest-days</li>
                                
                            </ul>
                            <hr />
                            <div className="text-center">
                                <button className='btn btn-primary m-4 px-3 rounded'>Choose Plan</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 card shadow  rounded">
                        <div className="header mt-4 text-center">
                            <h6 className=''>Silver</h6>
                            <h1 className='rubee'>&#8377;1999</h1>
                            <p>Per Month</p>
                            <hr />
                        </div>
                        <div className="body mt-2">
                            <ul className='ms-4 my-4'>
                                <li>7 classes</li>
                                <li>6 Groupclass</li>
                                <li>Online-class Access</li>
                                <li>E-book fitness Access</li>
                                <li>Rest-days</li>
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
                            <h1 className='rubee'>&#8377;2999</h1>
                            <p>Per Month</p>
                            <hr />
                        </div>
                        <div className="body">
                            <ul className=' ms-4 my-4'>
                                <li>10 classes</li>
                                <li>8 Groupclass</li>
                                <li>Online-class Access</li>
                                <li>E-book fitness Access</li>
                                <li>Extra fitness activities</li>
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
                            <h1 className='rubee'>&#8377;3999</h1>
                            <p>Per month</p>
                            <hr />
                        </div>
                        <div className="body ">
                            <ul className='ms-4 my-4'>
                                <li>10 classes</li>
                                <li>10 Groupclass</li>
                                <li>Online-class Access</li>
                                <li>E-book fitness Access</li>
                                <li>Personal Trainer Access</li>
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