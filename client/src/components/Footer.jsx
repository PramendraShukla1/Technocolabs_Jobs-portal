import React from "react";
import "../styles/footer.css";

const Footer = () => {
  return (
    <section>
      <footer
        className="bg-dark text-white cover-image"
        data-image-src="../assets/images/banners/banner3.jpg"
      >
        <div className="footer-main">
          <div className="container1">
            <div className="row">
              <div className="col-lg-2 col-md-12">
                <h6>Job Categories</h6>
                <hr className="deep-purple  accent-2 mb-4 mt-0 d-inline-block mx-auto" />
                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="Developement">Developement</a>
                  </li>
                  <li>
                    <a href="Designing">Designing</a>
                  </li>
                  <li>
                    <a href="Marketing">Marketing</a>
                  </li>
                  <li>
                    <a href="Others">Others</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-12">
                <h6>Job Type</h6>
                <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" />
                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="abc">Work from home</a>
                  </li>
                  <li>
                    <a href="abc">Internship</a>
                  </li>
                  <li>
                    <a href="abc">Part time</a>
                  </li>
                  <li>
                    <a href="abc">Full time</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-12">
                <h6>Resources</h6>
                <hr className="deep-purple  accent-2 mb-4 mt-0 d-inline-block mx-auto" />
                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="abc">Support</a>
                  </li>
                  <li>
                    <a href="abc">FAQ</a>
                  </li>
                  <li>
                    <a href="abc">Terms of Service</a>
                  </li>
                  <li>
                    <a href="abc">Contact Details</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-12">
                <h6>Popular Ads</h6>
                <hr class="deep-purple  accent-2 mb-4 mt-0 d-inline-block mx-auto" />
                <ul class="list-unstyled mb-0">
                  <li>
                    <a href="abc">
                      <i className="fa fa-caret-right text-white-50"></i>{" "}
                      Educational college Ads
                    </a>
                  </li>
                  <li>
                    <a href="abc">
                      <i className="fa fa-caret-right text-white-50"></i> Free
                      Lancer for Web Developer
                    </a>
                  </li>
                  <li>
                    <a href="abc">
                      <i className="fa fa-caret-right text-white-50"></i>{" "}
                      Searching for Developer
                    </a>
                  </li>
                  <li>
                    <a href="abc">
                      <i className="fa fa-caret-right text-white-50"></i> BPO
                      Online In Bangalore
                    </a>
                  </li>
                </ul>
              </div>
              <div className="subscribe col-lg-3 col-md-12">
                <h6 className="mb-2">Subscribe</h6>
                <hr className="deep-purple  accent-2 mb-4 mt-0 d-inline-block mx-auto" />
                <div className="input-group w-100">
                  <input
                    type="text"
                    className="form-control  border "
                    placeholder="Email"
                    id="inp-box"
                  />
                  <div className="input-group-append ">
                    <button type="button" className="btn btn-primary sub ">
                      {" "}
                      Subscribe{" "}
                    </button>
                  </div>
                </div>
                <h6 className="mb-2 mt-5">Payments</h6>
                <hr className="deep-purple  accent-2 mb-4 mt-0 d-inline-block mx-auto" />
                <ul className="payments mb-0">
                  <li>
                    <a href="abc" className="payments-icon">
                      <i className="fa fa-cc-amex" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a href="abc" className="payments-icon">
                      <i className="fa fa-cc-visa" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a href="abc" className="payments-icon">
                      <i
                        className="fa fa-credit-card-alt"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </li>
                  <li>
                    <a href="abc" className="payments-icon">
                      <i className="fa fa-cc-mastercard" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a href="abc" className="payments-icon">
                      <i className="fa fa-cc-paypal" aria-hidden="true"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="container2">
          <div className="row d-flex">
            <div className="col-lg-8 col-sm-12  mt-2 mb-2 text-left ">
              Copyright © 2019{" "}
              <a href="index.html" className="fs-14 text-white">
                rejoin
              </a>
              . Designed by{" "}
              <a href="spruko.html" class="fs-14 text-white">
                Spruko
              </a>{" "}
              All rights reserved.
            </div>
            <div className="col-lg-4 col-sm-12 ml-auto mb-2 mt-2 d-none d-lg-block">
              <ul className="social mb-0">
                <li>
                  <a className="social-icon" href="abc">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a className="social-icon" href="abc">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a className="social-icon" href="abc">
                    <i className="fa fa-rss"></i>
                  </a>
                </li>
                <li>
                  <a className="social-icon" href="abc">
                    <i className="fa fa-youtube"></i>
                  </a>
                </li>
                <li>
                  <a className="social-icon" href="abc">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a className="social-icon" href="abc">
                    <i className="fa fa-google-plus"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr />
        <div class="container">
          <div className="p-2 text-center footer-links">
            <a href="abc">How It Works</a>
            <a href="abc">About Us</a>
            <a href="abc">Pricing</a>
            <a href="abc">Ads Categories</a>
            <a href="abc">Privacy Policy</a>
            <a href="abc">Terms Of Conditions</a>
            <a href="abc">Blog</a>
            <a href="abc">Contact Us</a>
            <a href="abc">Premium Ad</a>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
