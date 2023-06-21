import React from "react";

// include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

// create your first component
const Home = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-black">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Start Bootstrap
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container">
        <div className="jumbotron jumbotron-light-grey">
          <div className="container">
            <h1 className="display-4">A Warm Welcome!</h1>
            <p className="lead">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </p>
            <p className="lead">
              <a className="btn btn-primary btn-lg" href="#" role="button">
                Call to action!
              </a>
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-3 col-sm-6">
            <div className="card">
              <img
                src="https://via.placeholder.com/500x325"
                className="card-img-top"
                alt="Card Image"
              />
              <div className="card-body">
                <h5 className="card-title">Card Title </h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus varius, urna in aliquam tincidunt, quam velit
                  finibus velit, sed tempor nunc tortor eu ex.
                </p>
                <a href="#" className="btn btn-primary">
                  Find Out More!
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="card">
              <img
                src="https://via.placeholder.com/500x325"
                className="card-img-top"
                alt="Card Image"
              />
              <div className="card-body">
                <h5 className="card-title">Card Title </h5>
                <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus varius, urna in aliquam tincidunt, quam velit
                  finibus velit, sed tempor nunc tortor eu ex.
                </p>
                <a href="#" className="btn btn-primary">
                  Find Out More!
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="card">
              <img
                src="https://via.placeholder.com/500x325"
                className="card-img-top"
                alt="Card Image"
              />
              <div className="card-body">
                <h5 className="card-title">Card Title </h5>
                <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus varius, urna in aliquam tincidunt, quam velit
                  finibus velit, sed tempor nunc tortor eu ex.
                </p>
                <a href="#" className="btn btn-primary">
                  Find Out More!
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="card">
              <img
                src="https://via.placeholder.com/500x325"
                className="card-img-top"
                alt="Card Image"
              />
              <div className="card-body">
                <h5 className="card-title">Card Title </h5>
                <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus varius, urna in aliquam tincidunt, quam velit
                  finibus velit, sed tempor nunc tortor eu ex.
                </p>
                <a href="#" className="btn btn-primary">
                  Find Out More!
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-black text-white text-center py-4">
        <p>Copyright &copy; Your Website 2023</p>
      </footer>
    </div>
  );
};

export default Home;
