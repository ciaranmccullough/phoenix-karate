import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import { Formik, Form, Field, ErrorMessage } from "formik"

const Container = styled.div`
  height: 40vh;
`

const Para = styled.p`
  margin: 20px 50px;
  transition: all 200ms ease-in;
  :hover {
    color: goldenrod;
  }
`

const BookFreeLesson = () => {
  // Helper function to encode for Netlify
  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  return (
    <Layout>
      <h1>Test Form</h1>
      <Container>
        <Formik
          initialValues={{
            name: "",
            email: "",
            message: "",
          }}
          onSubmit={(values, actions) => {
            fetch("/", {
              method: "POST",
              headers: { "Content-Type": "application/x-www-form-urlencoded" },
              body: encode({ "form-name": "contact-demo", ...values }),
            })
              .then(() => {
                alert("Success")
                actions.resetForm()
              })
              .catch(() => {
                alert("Error")
              })
              .finally(() => actions.setSubmitting(false))
          }}
          validate={values => {
            const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
            const errors = {}
            if (!values.name) {
              errors.name = "Name Required"
            }
            if (!values.email || !emailRegex.test(values.email)) {
              errors.email = "Valid Email Required"
            }
            if (!values.message) {
              errors.message = "Message Required"
            }
            return errors
          }}
        >
          {() => (
            <Form name="contact-demo" data-netlify={true}>
              <label htmlFor="name">Name: </label>
              <Field name="name" />
              <ErrorMessage name="name" />

              <label htmlFor="email">Email: </label>
              <Field name="email" />
              <ErrorMessage name="email" />

              <label htmlFor="message">Message: </label>
              <Field name="message" component="textarea" />
              <ErrorMessage name="message" />

              <button type="submit">Send</button>
            </Form>
          )}
        </Formik>
      </Container>
    </Layout>
  )
}

export default BookFreeLesson
