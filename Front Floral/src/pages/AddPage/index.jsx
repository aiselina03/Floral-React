import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import "./style.scss"
import { Helmet } from "react-helmet-async";

function AddPage() {
  const navigate = useNavigate();
  function handleAdd(val) {
    fetch("http://localhost:8080/", {method: "Post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(val)
    
  })
  navigate("/")
  }
  return (
    <>
    <Helmet>
        <title>Add Page</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <div className="addPage">
        <Formik
          initialValues={{ name: "", price: "", image: "" }}
          validationSchema={Yup.object({
            name:
              Yup.string()
              .required("enter name"),
            price:
              Yup.number()
              .required("enter price"),
            image: Yup.string()
            
              .required("enter image"),
          })}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              handleAdd(values)
              setSubmitting(false);
            }, 400);
          }}
        >
          <Form className="form">
            <label htmlFor="name"></label>
            <Field className="field" name="name" type="text" placeholder="name"/>
            <ErrorMessage name="name" />

            <label htmlFor="price"></label>
            <Field  className="field" name="price" type="text" placeholder="price"/>
            <ErrorMessage name="price" />

            <label htmlFor="image"></label>
            <Field  className="field" name="image" type="text" placeholder="image"/>
            <ErrorMessage name="image" />

            <button type="submit">Submit</button>
          </Form>
        </Formik>
      </div>
    </>
  );
}

export default AddPage;
