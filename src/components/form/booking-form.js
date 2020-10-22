import React from "react"
import Select from "react-select"
import {
  InputForm,
  FormRow,
  Label,
  Input,
  StyledInlineErrorMessage,
  Submit,
} from "./styles"
import { Formik, withFormik, Form, Field, ErrorMessage } from "formik"

// Helper function to encode for Netlify
const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const options = [
  { label: "Select an option", value: "" },
  { label: "Monday", value: "" },
  {
    label: "5pm White belt Beginners",
    value: "Monday-5pm White belt Beginners",
  },
  { label: "6pm Intermediates", value: "Monday-6pm Intermediates" },
  {
    label: "7.30 Adults",
    value: "Monday-7.30 Adults",
  },
  { label: "Wednesday", value: "" },
  {
    label: "5pm White belt Beginners",
    value: "Wednesdays-5pm White belt Beginners",
  },
  {
    label: "6pm Intermediates",
    value: "Wednesdays-6pm Intermediates",
  },
  {
    label: "7pm Brown belts and above",
    value: "Wednesdays-7pm Brown belts and above",
  },
  { label: "Friday", value: "" },
  {
    label: "6pm White belt Beginners",
    value: "Fridays-6pm White belt Beginners",
  },
  {
    label: "7pm intermediates",
    value: "Fridays-7pm intermediates",
  },
  { label: "Saturday", value: "" },
  {
    label: "1pm Mixed",
    value: "Saturdays-1pm Mixed",
  },
  {
    label: "2pm Brown belts and above",
    value: "Saturdays-2pm Brown belts and above",
  },
  { label: "Sunday", value: "" },
  {
    label: "11am White belt beginners",
    value: "Sundays-11am White belt beginners",
  },
  {
    label: "12.15 intermediates",
    value: "Sundays-12.15 intermediates",
  },
  {
    label: "1.30pm Brown belts and above",
    value: "Mondays-1.30pm Brown belts and above",
  },
]

const BookingForm = () => {
  return (
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
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: encode({ "form-name": "contact", ...values }),
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
        if (!values.message) {
          errors.message = "Message Required"
        }
        return errors
      }}
    >
      {() => (
        <InputForm
          name="contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />
          <input type="hidden" name="bot-field" />
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
              // valid={touched.email && !errors.email}
              // error={touched.email && errors.email}
            />
            <ErrorMessage name="phone">
              {msg => (
                <StyledInlineErrorMessage>{msg}</StyledInlineErrorMessage>
              )}
            </ErrorMessage>
          </FormRow>
          <FormRow>
            <Label htmlFor="session">Choose a session:</Label>
            <Select name="session" id="session-select" options={options}>
              {/* {dropdownOptions.map(option => {
                return (
                  <option key={option.value} value={option.value}>
                    {option.key}
                  </option>
                )
              })} */}
            </Select>
          </FormRow>
          <FormRow>
            <Label htmlFor="message">Message: </Label>
            <Input name="message" />
            <ErrorMessage name="message">
              {msg => (
                <StyledInlineErrorMessage>{msg}</StyledInlineErrorMessage>
              )}
            </ErrorMessage>
          </FormRow>
          <FormRow>
            <Submit type="submit">Submit</Submit>
          </FormRow>
        </InputForm>
      )}
    </Formik>
  )
}

export default BookingForm
