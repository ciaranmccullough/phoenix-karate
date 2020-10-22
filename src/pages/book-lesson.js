import React from "react"
import Layout from "../components/layout"

import { Formik, Form, Field, ErrorMessage } from "formik"
import styled, { css } from "styled-components"

const Container = styled.div`
  margin: 0 50px auto;
  display: flex;
  flex-direction: column;
`

const FormRow = styled.div`
  display: flex;
`

const PageWrapper = styled.section`
  &,
  & * {
    box-sizing: border-box;
    display: block;
  }

  hr {
    display: block;
    border: none;
    border-top: 1px solid lightgrey;

    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }

  font-family: system-ui;
  font-size: 2.5rem;
  line-height: 2rem;
  max-width: 30em;
  /* margin-left: auto;
  margin-right: auto; */
  margin-top: 2rem;
  margin-bottom: 2rem;
  padding: 1rem 0.75rem;
  border: 1px solid lightgrey;
  border-radius: 4px;
  @media (max-width: 480px) {
    font-size: 1.5rem;
    line-height: 1rem;
    margin-left: 0;
    margin-right: 0;
  }
`
const CodeWrapper = styled.pre`
  font-family: monospace;
  font-size: 0.875rem;
  line-height: 1.25rem;
  background-color: hsl(210, 4%, 96%);
  overflow: auto;
  padding: 0.75rem;
  margin: 0;
  border-radius: 4px;

  & strong {
    margin-top: 1.5rem;

    &:first-child {
      margin-top: 0;
    }
  }
`
const Title = styled.h1`
  font-size: 1rem;
  line-height: 1.25rem;
  margin-top: 0;
`
const Label = styled.label`
  margin-top: 1.5rem;
  width: 100%;
`

const Select = styled.select`
  background-color: white;
  border: 1px solid lightgrey;
  border-radius: 4px;
  font-size: 1.5rem;
  line-height: 1.5rem;
  font-style: normal;
  font-weight: 400;
  width: 100%;
  margin-top: 0.5rem;
  padding: 0.75rem 0.75rem;
  @media (max-width: 480px) {
    font-size: 1rem;
    line-height: 1rem;
  }
`

const Input = styled(Field)`
  background-color: white;
  border: 1px solid lightgrey;
  border-radius: 4px;
  font-size: 1.5rem;
  line-height: 1.5rem;
  font-style: normal;
  font-weight: 400;
  width: 100%;
  margin-top: 0.5rem;
  padding: 0.75rem 0.75rem;
  @media (max-width: 480px) {
    font-size: 1rem;
    line-height: 1rem;
  }

  &:focus,
  &:active {
    box-shadow: rgb(210, 213, 217) 0px 0px 2px 1px,
      rgb(227, 230, 232) 0px 0px 0px 3px;
    border: 1px solid rgb(26, 33, 43);
    outline: none;
  }

  /* Autocomplete styles in Chrome*/
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    background-color: white;
    border: 1px solid lightgrey;
    box-shadow: 0 0 0px 1000px #fff inset;
    -webkit-box-shadow: 0 0 0px 1000px #fff inset;
    transition: background-color 5000s ease-in-out 0s;
    -webkit-text-fill-color: black;
  }

  ${({ valid }) =>
    valid &&
    css`
      border: 1px solid rgb(0, 156, 38);

      &:focus,
      &:active {
        border: 1px solid rgb(0, 156, 38);
        box-shadow: rgb(106, 237, 97) 0px 0px 2px 1px,
          rgb(177, 247, 160) 0px 0px 0px 3px;
        outline: none;
      }

      /* Autocomplete styles in Chrome*/
      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus {
        border: 1px solid rgb(0, 156, 38);
      }
    `}

  ${({ error }) =>
    error &&
    css`
      border: 1px solid rgb(191, 49, 12);
      outline: none;

      &:focus,
      &:active {
        box-shadow: rgb(244, 129, 116) 0px 0px 2px 1px,
          rgb(251, 178, 174) 0px 0px 0px 3px;
        border: 1px solid rgb(191, 49, 12);
        outline: none;
      }

      /* Autocomplete styles in Chrome*/
      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus {
        border: 1px solid rgb(191, 49, 12);
      }
    `}
`

const StyledInlineErrorMessage = styled.div`
  background-color: rgb(255, 245, 245);
  color: rgb(120, 27, 0);
  display: block;

  padding: 0.5rem 0.75rem;
  margin-top: 0.5rem;
  white-space: pre-line;
`

const Submit = styled.button`
  width: 50%;
  margin-top: 1.5rem;

  background-color: rgb(24, 81, 187);
  display: block;
  text-align: center;
  font-size: 2rem;
  line-height: 1.5rem;
  font-style: normal;
  font-weight: 700;
  height: 4rem;
  white-space: nowrap;
  color: rgb(232, 243, 255) !important;
  padding: 0.5rem 1rem;

  @media (max-width: 480px) {
    font-size: 1.5rem;
    line-height: 1rem;
  }

  &:active,
  &:focus,
  &:hover {
    cursor: pointer;
  }

  &:disabled {
    cursor: pointer;
    background-color: rgb(163, 168, 173);
    box-shadow: none;
    color: rgb(255, 255, 255) !important;

    &:hover,
    &:focus {
      cursor: not-allowed;
    }
  }
`

const BookLesson = () => {
  // Helper function to encode for Netlify
  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  return (
    <Layout>
      <h1>Book A Session</h1>
      <Container>
        <Formik
          initialValues={{
            name: "",
            email: "",
            phone: "",
            session: "",
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
            const phoneRegex = /^(\+)?([ 0-9]){10,16}$/

            const errors = {}
            if (!values.name) {
              errors.name = "Name Required"
            }
            if (!values.email || !emailRegex.test(values.email)) {
              errors.email = "Valid Email Required"
            }
            if (!values.phone || !phoneRegex.test(values.phone)) {
              errors.phone = "Number Required"
            }
            // if (!values.session) {
            //   errors.session = "Session Required"
            // }
            if (!values.message) {
              errors.message = "Message Required"
            }
            return errors
          }}
        >
          {() => (
            <PageWrapper>
              <Form
                name="contact-demo"
                method="post"
                data-netlify={true}
                // data-netlify-honeypot={bot - field}
              >
                <input type="hidden" name="form-name" value="contact-demo" />
                <FormRow>
                  <Label htmlFor="name">Name: </Label>
                  <Input
                    name="name"
                    // valid={touched.name && !errors.name}
                    // error={touched.name && errors.name}
                  />
                  <ErrorMessage name="name">
                    {msg => (
                      <StyledInlineErrorMessage>{msg}</StyledInlineErrorMessage>
                    )}
                  </ErrorMessage>
                </FormRow>

                <FormRow>
                  <Label htmlFor="email">Email: </Label>
                  <Input
                    name="email"
                    // valid={touched.email && !errors.email}
                    // error={touched.email && errors.email}
                  />
                  <ErrorMessage name="email">
                    {msg => (
                      <StyledInlineErrorMessage>{msg}</StyledInlineErrorMessage>
                    )}
                  </ErrorMessage>
                </FormRow>

                <FormRow>
                  <Label htmlFor="phone">Phone: </Label>
                  <Input
                    name="phone"
                    // valid={touched.phone && !errors.phone}
                    // error={touched.phone && errors.phone}
                  />
                  <ErrorMessage name="phone">
                    {msg => (
                      <StyledInlineErrorMessage>{msg}</StyledInlineErrorMessage>
                    )}
                  </ErrorMessage>
                </FormRow>

                <FormRow>
                  <Label htmlFor="session">Book Session: </Label>
                  <Input as="select" name="session" required="">
                    <option value="" disabled="" selected="">
                      none
                    </option>
                    <option
                      className="form-bold"
                      value=""
                      disabled=""
                      selected=""
                    >
                      Monday
                    </option>
                    <option value="Monday-5pm White belt Beginners">
                      5pm White belt Beginners
                    </option>
                    <option value="Monday-6pm Intermediates">
                      6pm Intermediates
                    </option>
                    <option value="Monday-7.30 Adults">7.30 Adults</option>
                    <option value="" disabled="" selected="">
                      Wednesday
                    </option>
                    <option value="Wednesdays-5pm White belt Beginners">
                      5pm White belt Beginners
                    </option>
                    <option value="Wednesdays-6pm Intermediates">
                      6pm Intermediates
                    </option>
                    <option value="Wednesdays-7pm Brown belts and above">
                      7pm Brown belts and above
                    </option>
                    <option value="" disabled="" selected="">
                      Friday
                    </option>
                    <option value="Fridays-6pm White belt Beginners ">
                      6pm White belt Beginners
                    </option>
                    <option value="Fridays-7pm intermediates">
                      7pm intermediates
                    </option>
                    <option value="" disabled="" selected="">
                      Saturday
                    </option>
                    <option value="Saturdays-1pm Mixed">1pm Mixed</option>
                    <option value="Saturdays-2pm Brown belts and above ">
                      2pm Brown belts and above
                    </option>
                    <option value="" disabled="" selected="">
                      Sunday
                    </option>
                    <option value="Sundays-11am White belt beginners">
                      11am White belt beginners
                    </option>
                    <option value="Sundays-12.15 intermediates">
                      12.15 intermediates
                    </option>
                    <option value="Mondays-1.30pm Brown belts and above ">
                      1.30pm Brown belts and above
                    </option>
                  </Input>
                  <ErrorMessage name="session">
                    {msg => (
                      <StyledInlineErrorMessage>{msg}</StyledInlineErrorMessage>
                    )}
                  </ErrorMessage>
                </FormRow>
                <FormRow>
                  <Label htmlFor="message">Message: </Label>
                  <Input name="message" component="textarea" />
                  <ErrorMessage name="message">
                    {msg => (
                      <StyledInlineErrorMessage>{msg}</StyledInlineErrorMessage>
                    )}
                  </ErrorMessage>
                </FormRow>

                <FormRow>
                  <Submit type="submit">Submit</Submit>
                </FormRow>
              </Form>
            </PageWrapper>
          )}
        </Formik>
      </Container>
    </Layout>
  )
}

export default BookLesson
