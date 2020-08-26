import React from "react";

const Form = () => {
  return (
    <div class="box has-text-left">
      <div className="my-5">
        <strong className="is-size-5">Sign up for a free trial</strong>
      </div>
      <div className="columns">
        <div className="column">
          <div class="control">
            <input class="input" type="text" placeholder="First name" />
          </div>
        </div>
        <div className="column">
          <div class="control">
            <input class="input" type="text" placeholder="Last name" />
          </div>
        </div>
      </div>
      <div className="columns">
        <div className="column">
          <div class="control">
            <input class="input" type="text" placeholder="Email address" />
          </div>
        </div>
      </div>
      <div className="columns">
        <div className="column">
          <div class="control">
            <input class="input" type="text" placeholder="Phone" />
          </div>
        </div>
      </div>
      <div className="columns">
        <div className="column">
          <div class="control">
            <input class="input" type="text" placeholder="Company" />
          </div>
        </div>
      </div>
      <div className="columns">
        <div className="column">
          <button className="button is-black">Register now</button>
        </div>
      </div>
    </div>
  );
};

const FreeTrial = () => {
  return (
    <div className="container has-text-centered py-6 my-6">
      <h3 className="title is-2 has-text-weight-light">
        Ready to take a free trial?
      </h3>
      <p className="px-6 mx-6 mb-6 is-size-3 has-text-weight-light">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore
      </p>
      <div className="columns is-mobile is-centered">
        <div className="column is-three-quarters-mobile is-half-tablet is-one-third-fullhd">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default FreeTrial;
