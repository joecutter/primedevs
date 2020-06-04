import React, { useState } from "react";
import { Link } from "react-router-dom";

export function Form(props) {
  const { channel, submit } = props;
  const [name, setName] = useState("");
  const [comm, setChannel] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    let data = {
      name: name,
      channel: comm
    };

    submit(data);
  };

  const onChange = ({ target }) => {
    console.log("Target ", target.name);
    if (target.name === "name") {
      setName(target.value);
    } else {
      setChannel(target.value);
    }
  };

  return (
    <div>
      <section className="ftco-section contact-section ftco-degree-bg">
        <div className="container bg-light">
          <div className="row justify-content-center mb-5 pb-5">
            <div className="col-md-4 text-center heading-section ftco-animate fadeInUp ftco-animated">
              <h2>{channel} Info</h2>
            </div>
          </div>

          <div className="row justify-content-center mb-5 pb-5">
            <div className="col-md-4 text-center heading-section ftco-animate fadeInUp ftco-animated">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                    name="name"
                    value={name}
                    onChange={onChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder={channel}
                    name={channel}
                    value={comm}
                    onChange={onChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    value="Send Message"
                    className="btn btn-primary py-3 px-5"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
