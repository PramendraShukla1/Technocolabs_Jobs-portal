import React from "react";
import "../styles/Subscription.css";

const Subscription = () => {
  return (
    <div className="subs">
      <hr className="hr" />
      <div className="pera">
        <h1>
          Subscribe To Our Onlinesletter{" "}
          <span>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa
              veniam unde eaque.
            </p>
          </span>
        </h1>
      </div>
      <div className="email">
        <input type="email" placeholder="Enter Your Email" />

        <button
          type="button"
          class="btn btn-primary
    sub-btn"
        >
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Subscription;
