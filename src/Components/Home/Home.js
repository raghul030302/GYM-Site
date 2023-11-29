import React from "react";
import "./Home.css";
import Footer from "../Footer/Footer";
import Trainer from "../Trainer/Trainer";

function Home() {
  return (
    <div className="home">
      <section className="sec1">
        <div className="container-fluid d-flex justify-content-center flex-column ">
          <div className="content text-light">
            <h1 className="heading">Build Your Shape</h1>
            <p className="w-50">
              Gym training is a structured and disciplined approach to physical
              exercise that focuses on strength, endurance and overall fitness
              improvement.
            </p>
            <button className="btn border-2 rounded-0 text-info fw-semibold border-info fs-5 py-2 px-3">
              Learn more
            </button>
          </div>
          <div className="btns d-flex mt-5 mb-3">
            <button className="btn btn-dark py-2 px-4 fs-4 me-5 ">Login</button>
            <button className="btn btn-dark py-2 px-4 fs-4 ">Register</button>
          </div>
          <div className="d-flex mt-3 mb-2 text-info">
            <div className="pe-5 border-end border-light">
              <h4 className="mx-4 fw-bolder ">10+</h4>
              <p>Years of Experience</p>
            </div>
            <div className="px-5 border-end border-light">
              <h4 className="mx-2 fw-bolder">10K+</h4>
              <p>Members Join</p>
            </div>
            <div className="px-5">
              <h4 className="mx-4 fw-bolder ">8K+</h4>
              <p>Happy members</p>
            </div>
          </div>
        </div>
      </section>
      <section className="sec2 text-light">
        <div className="mt-3">
          <h2 className="fw-semibold d-flex justify-content-center text-decoration-underline ">
            About<span className="text-info px-2">Us</span>
          </h2>
          <div className="mx-5 px-5 mt-5">
            Welcome to [Your Gym's Name], where fitness meets excellence! At
            [Your Gym's Name], we believe in more than just a workout; we
            believe in a transformative fitness experience that empowers
            individuals to reach their peak potential.
            <br />
            <br /> Founded on the principles of dedication, passion, and
            community, [Your Gym's Name] is not just a gym; it's a fitness haven
            where goals are achieved, limits are pushed, and lifestyles are
            transformed. Our mission is to inspire and support our members on
            their fitness journey, fostering a sense of belonging and
            accomplishment every step of the way.
            <br />
            [Your Gym's Name] is more than a gym; it's a commitment to a
            healthier, stronger, and happier you. Join us on this journey, and
            let's achieve greatness together!
          </div>
        </div>
      </section>
      <section className="sec3 text-light ">
        <div className="mx-5 px-5 mt-5 ">
          <h2 className="d-flex justify-content-center mb-3 text-decoration-underline fw-semibold">
            Why <span className="text-info mx-2">Choose</span> Us
          </h2>
          <div className="row">
            <div className="d-flex flex-column col border border-1 border-info m-2 points">
              <b>01</b>
              <b className="text-info">Expert Guidance:</b> Our team of
              experienced and certified trainers is committed to guiding you
              through your fitness journey. Whether you're a beginner or an
              experienced fitness enthusiast, we are here to provide
              personalized support, expert advice, and motivation.
            </div>
            <div className="d-flex flex-column col border border-1 border-info m-2 points">
              <b>02</b>
              <b className="text-info">Diverse Fitness Programs:</b> At [Your
              Gym's Name], we understand that everyone has unique fitness goals.
              That's why we offer a wide range of fitness programs, including
              strength training, cardio, group classes, and more. Whatever your
              fitness preference, we have a program that suits your needs.
            </div>
          </div>
          <div className="row">
            <div className="d-flex flex-column col border border-1 border-info m-2 points">
              <b>03</b>
              <b className="text-info">Community Spirit:</b> Join a community of
              like-minded individuals who share a passion for fitness and
              well-being. Our gym isn't just a place to work out; it's a place
              to connect, make friends, and build a supportive network to help
              you stay motivated.
            </div>
            <div className="d-flex flex-column col border border-1 border-info m-2 points">
              <b>04</b>
              <b className="text-info">Wellness Beyond the Gym:</b> We believe
              that true wellness goes beyond just physical fitness. That's why
              we offer wellness programs, nutritional guidance, and lifestyle
              advice to help you achieve a holistic approach to health.
            </div>
          </div>
        </div>
      </section>
      <section className="sec4">
        <div>
          <div>
            <h2 className="fw-semibold d-flex justify-content-center text-decoration-underline text-light my-5">
              Premium<span className="text-info px-2">Plans</span>
            </h2>
          </div>
          <div className="row plans gap-5 d-flex flex-wrap justify-content-center m-5">
            <div className="col card shadow  rounded ">
              <div className="header mt-4 text-center">
                <h6 className="">Brozen</h6>
                <h1 className="rubee">&#8377;999</h1>
                <p>Per Month</p>
                <hr />
              </div>
              <div className="body mt-2">
                <ul className="ms-4 my-4">
                  <li>5 classes</li>
                  <li>4 Groupclass</li>
                  <li>Online-class Access</li>
                  <li>E-book fitness Access</li>
                  <li>Rest-days</li>
                </ul>
                <hr />
                <div className="text-center">
                  <button className="btn btn-info m-4 px-3 rounded">
                    Choose Plan
                  </button>
                </div>
              </div>
            </div>

            <div className="col card shadow  rounded">
              <div className="header mt-4 text-center">
                <h6 className="">Silver</h6>
                <h1 className="rubee">&#8377;1999</h1>
                <p>Per Month</p>
                <hr />
              </div>
              <div className="body mt-2">
                <ul className="ms-4 my-4">
                  <li>7 classes</li>
                  <li>6 Groupclass</li>
                  <li>Online-class Access</li>
                  <li>E-book fitness Access</li>
                  <li>Rest-days</li>
                </ul>
                <hr />
                <div className="text-center">
                  <button className="btn btn-info m-4 px-3 rounded">
                    Choose Plan
                  </button>
                </div>
              </div>
            </div>

            <div className="col card shadow  rounded">
              <div className="header mt-4 text-center">
                <h6 className="">Gold</h6>
                <h1 className="rubee">&#8377;2999</h1>
                <p>Per Month</p>
                <hr />
              </div>
              <div className="body">
                <ul className=" ms-4 my-4">
                  <li>10 classes</li>
                  <li>8 Groupclass</li>
                  <li>Online-class Access</li>
                  <li>E-book fitness Access</li>
                  <li>Extra fitness activities</li>
                </ul>
                <hr />
                <div className="text-center">
                  <button className="btn btn-info m-4 px-3 rounded">
                    Choose Plan
                  </button>
                </div>
              </div>
            </div>

            <div className="col card shadow  rounded">
              <div className="header mt-4 text-center">
                <h6 className="">Diamond</h6>
                <h1 className="rubee">&#8377;3999</h1>
                <p>Per month</p>
                <hr />
              </div>
              <div className="body ">
                <ul className="ms-4 my-4">
                  <li>10 classes</li>
                  <li>10 Groupclass</li>
                  <li>Online-class Access</li>
                  <li>E-book fitness Access</li>
                  <li>Personal Trainer Access</li>
                </ul>
                <hr />
                <div className="text-center">
                  <button className="btn btn-info m-4 px-3 rounded">
                    Choose Plan
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="sec5">
                <Trainer/>
      </section>
      <section className="sec6 m-5">
        <div className="form d-flex flex-column align-items-end text-center text-light px-5 mx-5">
          <div className="head_content mt-5">
            <h3 className="mt-5 fw-semibold text-decoration-underline "> LET'S START TO <span className="text-info">BUILD NOW</span></h3>
            <p className="mt-4 text-capitalize ">get 50% off the first three classes you sign up for this month any GYM membership</p>
          </div>
          <form action="#" className="w-50 me-5 ">
            <div className="row mt-5">
              <div className="col"><input type="text" name="" id="" placeholder="Enter Your Name" className=" bg-transparent border border-0 border-info border-bottom border-2 px-4" /></div>
              <div className="col"><input type="email" name="" id="" placeholder="Enter Your E-mail" className=" bg-transparent border border-0 border-info border-bottom border-2 px-4" /></div>
            </div>
            <div><input type="number" name="" id=""  placeholder="Enter Your Mobile Number" className=" bg-transparent border border-0 border-info border-bottom border-2 my-5 w-75 px-5"/></div>
            <button type="submit" className="border border-3 border-info py-2 px-3 fw-bold fsubmit">Submit</button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Home;
