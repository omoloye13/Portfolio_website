import { useFormik } from "formik";
const Contact = () => {
  const validate = (values) => {
    const errors = {};

    if (!values.firstName) {
      errors.firstName = "Required";
    } else if (values.firstName.length > 15) {
      errors.firstName = "Must be 15 characters or less";
    }

    if (!values.lastName) {
      errors.lastName = "Required";
    } else if (values.lastName.length > 20) {
      errors.lastName = "Must be 20 characters or less";
    }
    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    return errors;
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      number:"",
      textarea:""
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <section className="sec-6" id="sect6">
      <div className="row m-0">
        <div className="col-md-1"></div>
        <div className="col-md-11 about">
          <h1>
            <span className="num">06.</span> Contact me
          </h1>
          <p className="text-center">
            I'm open to opportunities ( jobs and internships) to work and
            improve my skills. Moreso you can reach out to me on +2348100173411.
          </p>
          <form onSubmit={formik.handleSubmit}>
            <div class="mb-3">
              <input
                type="text"
                class="form-control form-control-lg"
                id="exampleFormControlInput1"
                name="name"
                placeholder="FullName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
              />
                  {formik.touched.name && formik.errors.name ? (
              <div>{formik.errors.name}</div>
            ) : null}
            </div>
            <div class="mb-3">
              <input
                type="email"
                class="form-control form-control-lg"
                id="exampleFormControlInput1"
                name="email"
                placeholder="Email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
                 {formik.touched.email && formik.errors.email ? (
              <div>{formik.errors.email}</div>
            ) : null}
            </div>
            {/* PHONE */}
            <div class="mb-3">
              <input
                type="number"
                class="form-control form-control-lg"
                id="exampleFormControlInput1"
                name="number"
                placeholder="PhoneNumber"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.number}
              />
                 {formik.touched.number && formik.errors.number ? (
              <div>{formik.errors.number}</div>
            ) : null}
            </div>
            {/* TEXTAREA */}
            <div class="mb-3">
              <input
                type="text"
                class="form-control form-control-lg"
                id="exampleFormControlInput1"
                name="textarea"
                placeholder="Leave a Message..."
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.textarea}
              />
                 {formik.touched.textarea && formik.errors.textarea ? (
              <div>{formik.errors.textarea}</div>
            ) : null}
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Contact;
