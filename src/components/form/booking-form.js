import React, { useState } from "react"
import axios from "axios"
import { Formik, ErrorMessage } from "formik"
import {
  InputForm,
  FormRow,
  Label,
  Select,
  Input,
  StyledInlineErrorMessage,
  Submit,
} from "./styles"
import { options } from "./options"

const BookingForm = () => {
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  })
  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    })
    if (ok) {
      form.reset()
    }
  }

  const handleOnSubmit = e => {
    e.preventDefault()
    const form = e.target
    setServerState({ submitting: true })
    axios({
      method: "post",
      url: "https://getform.io/f/ba3dbf7d-8fb9-4113-9f58-94bfa6449a14",
      data: new FormData(form),
    })
      .then(r => {
        handleServerResponse(true, alert("Success"), form)
      })
      .catch(r => {
        handleServerResponse(false, alert("Error"), form)
      })
  }

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        phone: "",
        session: "",
        message: "",
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
      {({
        values,
        touched,
        errors,
        dirty,
        isSubmitting,
        isValid,
        handleChange,
        handleBlur,
        handleSubmit,
        handleReset,
      }) => (
        <InputForm onSubmit={handleOnSubmit}>
          <FormRow>
            <Label htmlFor="name">Name: </Label>
            <Input
              name="name"
              required="required"
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
              required="required"
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
              required="required"
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
            <Select name="session" required="required">
              {options.map(option => {
                return (
                  <option key={option.value} value={option.value}>
                    {option.key}
                  </option>
                )
              })}
            </Select>
            <ErrorMessage name="session">
              {msg => (
                <StyledInlineErrorMessage>{msg}</StyledInlineErrorMessage>
              )}
            </ErrorMessage>
          </FormRow>
          <FormRow>
            <Label htmlFor="message">Message: </Label>
            <Input name="message" required="required" component="textarea" />
            <ErrorMessage name="message">
              {msg => (
                <StyledInlineErrorMessage>{msg}</StyledInlineErrorMessage>
              )}
            </ErrorMessage>
          </FormRow>
          <FormRow>
            <Submit type="submit" disabled={!(dirty && isValid)}>
              Submit
            </Submit>
          </FormRow>
          <FormRow>
            {serverState.status && (
              <p className={!serverState.status.ok ? "errorMsg" : ""}>
                {serverState.status.msg}
              </p>
            )}
          </FormRow>
        </InputForm>
      )}
    </Formik>
  )
}

export default BookingForm
