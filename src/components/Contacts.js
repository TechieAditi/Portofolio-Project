import React, { useState } from "react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";

const Contacts = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const { register, handleSubmit, errors } = useForm();

  const serviceID = "service_id";
  const templateID = "Template_id";
  const userID = "user_0yKQ7paQWYmvXHn7CHhQf";

  const onSubmit = (data, r) => {
    sendEmail(
      serviceID,
      templateID,
      {
        name: data.name,
        phone: data.phone,
        email: data.email,
        subject: data.subject,
        description: data.description
      },
      userID
    )
    r.target.reset();
  }

  const sendEmail = (serviceID, templateID, variables, userID) => {
    emailjs.send(serviceID, templateID, variables, userID)
      .then(() => {
        setSuccessMessage("Form sent successfully! I'll contact you as soon as possible.");
      }).catch(err => console.error(`Something went wrong ${err}`));
  }

  return (
    <div id="contacts" className="contacts">
      <div className="text-center">
        <h1>contact me</h1>
        <p>Please fill out the form and describe you project needs and I'll contact you as soon as possible.</p>
        <span className="success-message">{successMessage}</span>
      </div>
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-md-6 col-xs-12">
              {/* NAME INPUT */}
              <div className="text-center">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  name="name"
                  {...register("name", { required:true,
                      maxLength: {
                        value: 20,
                        message: "Please enter a name with fewer than 20 characters"
                      }
                    })
                  }
                />
                <div className="line"></div>
              </div>
              <span className="error-message">
                {errors?.name?.type === 'required' && "Please enter a name with fewer than 20 characters"}
                
              </span>
              {/* PHONE INPUT */}
              <div className="text-center">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phone Number"
                  name="phone"
                  {...register("phone", { required: true,
                    })
                  }
                />
                <div className="line"></div>
              </div>
              <span className="error-message">
                {errors?.phone && "Please add your phone number"}
              </span>
              {/* EMAIL INPUT */}
              <div className="text-center">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Email"
                  {...register("email", { required: true,
                  pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "invalid Email"
                      }
                    })
                  }
                />
                <div className="line"></div>
              </div>
              <span className="error-message">
                {errors?.email && "Please provide you email"}
              </span>
              {/* SUBJECT INPUT */}
              <div className="text-center">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                  name="subject"
                  {...register("subject", { required: true,
                    })
                  }
                />
                <div className="line"></div>
              </div>
              <span className="error-message">
                {errors?.subject && "OOPS, you forget to add the subject."}
              </span>
            </div>
            <div className="col-md-6 col-xs-12">
              {/* DESCRIPTION */}
              <div className="text-center">
                <textarea
                  type="text"
                  className="form-control"
                  name="description"
                  placeholder="Please describe shortly you project..."
                  {...register("description", { required: true,
                    })
                  }
                ></textarea>
                <div className="line"></div>
              </div>
              <span className="error-message">
                {errors?.description && "Please describe shortly your project needs..."}
              </span>
              <button className="btn-main-offer contact-btn" type="submit">contact me</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contacts;
