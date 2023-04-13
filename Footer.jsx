import React from "react";

export default function Footer(){
    return (
        <section>
			<footer className="bg-dark text-white cover-image" data-image-src="../assets/images/banners/banner3.jpg">
				<div className="footer-main">
					<div className="container">
						<div className="row">
							<div className="col-lg-2 col-md-12">
								<h6>Job Categories</h6>
								<hr className="deep-purple  accent-2 mb-4 mt-0 d-inline-block mx-auto" />
								<ul className="list-unstyled mb-0">
									<li><a href="#">Developement</a></li>
									<li><a href="#">Designing</a></li>
									<li><a href="#">Marketing</a></li>
									<li><a href="#">Others</a></li>
								</ul>
							</div>
							<div className="col-lg-2 col-md-12">
								<h6>Job Type</h6>
								<hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" />
								<ul className="list-unstyled mb-0">
									<li><a href="#">Work from home</a></li>
									<li><a href="#">Internship</a></li>
									<li><a href="#">Part time</a></li>
									<li><a href="#">Full time</a></li>
								</ul>
							</div>
							<div className="col-lg-2 col-md-12">
								<h6>Resources</h6>
								<hr className="deep-purple  accent-2 mb-4 mt-0 d-inline-block mx-auto" />
								<ul className="list-unstyled mb-0">
									<li><a href="#">Support</a></li>
									<li><a href="#">FAQ</a></li>
									<li><a href="#">Terms of Service</a></li>
									<li><a href="#">Contact Details</a></li>
								</ul>
							</div>
							<div className="col-lg-3 col-md-12">
								<h6>Popular Ads</h6>
								<hr class="deep-purple  accent-2 mb-4 mt-0 d-inline-block mx-auto" />
								<ul class="list-unstyled mb-0">
									<li><a href="#"><i className="fa fa-caret-right text-white-50"></i> Educational college Ads</a></li>
									<li><a href="#"><i className="fa fa-caret-right text-white-50"></i> Free Lancer for Web Developer</a></li>
									<li><a href="#"><i className="fa fa-caret-right text-white-50"></i> Searching for Developer</a></li>
									<li><a href="#"><i className="fa fa-caret-right text-white-50"></i> BPO Online In Bangalore</a></li>
								</ul>
							</div>
							<div clasNameclassNamesNameclassName="col-lg-3 col-md-12">
								<h6 className="mb-2">Subscribe</h6>
								<hr className="deep-purple  accent-2 mb-4 mt-0 d-inline-block mx-auto" />
								<div className="input-group w-100">
									<input type="text" className="form-control  border" placeholder="Email" />
									<div className="input-group-append ">
										<button type="button" className="btn btn-primary "> Subscribe </button>
									</div>
								</div>
								<h6 className="mb-2 mt-5">Payments</h6>
								<hr className="deep-purple  accent-2 mb-4 mt-0 d-inline-block mx-auto" />
								<ul className="payments mb-0">
									<li>
										<a href="javascript:;" className="payments-icon"><i className="fa fa-cc-amex" aria-hidden="true"></i></a>
									</li>
									<li>
										<a href="javascript:;" className="payments-icon"><i className="fa fa-cc-visa" aria-hidden="true"></i></a>
									</li>
									<li>
										<a href="javascript:;" className="payments-icon"><i className="fa fa-credit-card-alt" aria-hidden="true"></i></a>
									</li>
									<li>
										<a href="javascript:;" className="payments-icon"><i className="fa fa-cc-mastercard" aria-hidden="true"></i></a>
									</li>
									<li>
										<a href="javascript:;" className="payments-icon"><i className="fa fa-cc-paypal" aria-hidden="true"></i></a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className="text-white-50 border-top p-0">
					<div className="container">
						<div className="row d-flex">
							<div className="col-lg-8 col-sm-12  mt-2 mb-2 text-left ">
								Copyright © 2019 <a href="index.html" className="fs-14 text-white">rejoin</a>. Designed by <a href="spruko.html" class="fs-14 text-white">Spruko</a> All rights reserved.
							</div>
							<div className="col-lg-4 col-sm-12 ml-auto mb-2 mt-2 d-none d-lg-block">
								<ul className="social mb-0">
									<li>
										<a className="social-icon" href="#"><i className="fa fa-facebook"></i></a>
									</li>
									<li>
										<a className="social-icon" href="#"><i className="fa fa-twitter"></i></a>
									</li>
									<li>
										<a className="social-icon" href="#"><i className="fa fa-rss"></i></a>
									</li>
									<li>
										<a className="social-icon" href="#"><i className="fa fa-youtube"></i></a>
									</li>
									<li>
										<a className="social-icon" href="#"><i className="fa fa-linkedin"></i></a>
									</li>
									<li>
										<a className="social-icon" href="#"><i className="fa fa-google-plus"></i></a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className="text-white p-0 border-top">
					<div class="container">
						<div className="p-2 text-center footer-links">
							<a href="#" className="btn btn-link">How It Works</a>
							<a href="#" className="btn btn-link">About Us</a>
							<a href="#" className="btn btn-link">Pricing</a>
							<a href="#" className="btn btn-link">Ads Categories</a>
							<a href="#" className="btn btn-link">Privacy Policy</a>
							<a href="#" className="btn btn-link">Terms Of Conditions</a>
							<a href="#" className="btn btn-link">Blog</a>
							<a href="#" className="btn btn-link">Contact Us</a>
							<a href="#" className="btn btn-link">Premium Ad</a>
						</div>
					</div>
				</div>
			</footer>
		</section>
        )
}