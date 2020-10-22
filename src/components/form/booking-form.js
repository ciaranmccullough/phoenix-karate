import React from "react"
import * as Yup from "yup"
import {
  Container,
  InputForm,
  FormRow,
  Label,
  Select,
  Input,
  StyledInlineErrorMessage,
  Submit,
} from "./styles"

// Helper function to encode for Netlify
const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const BookLesson = () => {
  const dropdownOptions = [
    { key: "Select an option", value: "" },
    { key: "Monday", value: "" },
    {
      key: "5pm White belt Beginners",
      value: "Monday-5pm White belt Beginners",
    },
    { key: "6pm Intermediates", value: "Monday-6pm Intermediates" },
    {
      key: "7.30 Adults",
      value: "Monday-7.30 Adults",
    },
    { key: "Wednesday", value: "" },
    {
      key: "5pm White belt Beginners",
      value: "Wednesdays-5pm White belt Beginners",
    },
    {
      key: "6pm Intermediates",
      value: "Wednesdays-6pm Intermediates",
    },
    {
      key: "7pm Brown belts and above",
      value: "Wednesdays-7pm Brown belts and above",
    },
    { key: "Friday", value: "" },
    {
      key: "6pm White belt Beginners",
      value: "Fridays-6pm White belt Beginners",
    },
    {
      key: "7pm intermediates",
      value: "Fridays-7pm intermediates",
    },
    { key: "Saturday", value: "" },
    {
      key: "1pm Mixed",
      value: "Saturdays-1pm Mixed",
    },
    {
      key: "2pm Brown belts and above",
      value: "Saturdays-2pm Brown belts and above",
    },
    { key: "Sunday", value: "" },
    {
      key: "11am White belt beginners",
      value: "Sundays-11am White belt beginners",
    },
    {
      key: "12.15 intermediates",
      value: "Sundays-12.15 intermediates",
    },
    {
      key: "1.30pm Brown belts and above",
      value: "Mondays-1.30pm Brown belts and above",
    },
  ]

  return (
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
      </FormRow>
      <FormRow>
        <Label htmlFor="email">Email: </Label>
        <Input
          name="email"
          // valid={touched.email && !errors.email}
          // error={touched.email && errors.email}
        />
      </FormRow>
      <FormRow>
        <Label htmlFor="phone">Phone: </Label>
        <Input
          name="phone"
          // valid={touched.email && !errors.email}
          // error={touched.email && errors.email}
        />
      </FormRow>
      <FormRow>
        <Label htmlFor="session">Choose a session:</Label>
        <Select name="session" id="session-select">
          {dropdownOptions.map(option => {
            return (
              <option key={option.value} value={option.value}>
                {option.key}
              </option>
            )
          })}
        </Select>
      </FormRow>
      <FormRow>
        <Label htmlFor="message">Message: </Label>
        <Input name="message" />
      </FormRow>
      <FormRow>
        <Submit type="submit">Submit</Submit>
      </FormRow>
    </InputForm>
  )
}

export default BookLesson
