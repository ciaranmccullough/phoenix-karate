import React, { useState } from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"
import { makeStyles } from "@material-ui/core/styles"
import {
  FormControl,
  TextField,
  MenuItem,
  TextareaAutosize,
  Button,
} from "@material-ui/core"
import Card from "@material-ui/core/Card"

const useStyles = makeStyles(theme => ({
  card: {
    minWidth: "400px",
    maxWidth: "950px",
    margin: "20px 0",
    padding: "20px",
    backgroundColor: " #f9f9f9",
  },
  root: {
    display: "flex",
    fontSize: "2rem",
    flexDirection: "column",
    "& .MuiTextField-root": {
      margin: theme.spacing(2),
      width: "25ch",
    },
  },
  textArea: {
    width: "25ch",
    margin: "20px 0 20px 10px",
  },
  button: {
    width: "25ch",
    fontSize: "1.5rem",
  },
}))

const sessions = [
  {
    value: "Monday-5pm(Childrens-beginners)",
    label: "Monday-5pm(Childrens-beginners)",
  },
  {
    value: "Monday-6pm(Childrens-purple/green)",
    label: "Monday-6pm(Childrens-purple/green)",
  },
  {
    value: "Monday-7-30pm(Childrens-brown)",
    label: "Monday-7-30pm(Childrens-brown)",
  },
  {
    value: "Wednesdays-5pm(Childrens-white/purple)",
    label: "Wednesdays-5pm(Childrens-white/purple)",
  },
  {
    value: "Wednesdays-6pm(Childrens-green)",
    label: "Wednesdays-6pm(Childrens-green)",
  },
  {
    value: "Wednesdays-7pm(Childrens-brown)",
    label: "Wednesdays-7pm(Childrens-brown)",
  },
  {
    value: "Wednesdays-7pm(Childrens-brown)",
    label: "Wednesdays-7pm(Childrens-brown)",
  },
  {
    value: "Fridays-6pm(Childrens-white/purple)",
    label: "Fridays-6pm(Childrens-white/purple)",
  },
  {
    value: "Fridays-7pm(Childrens-green/brown)",
    label: "Fridays-7pm(Childrens-green/brown)",
  },
  {
    value: "Fridays-7pm(Childrens-green/brown)",
    label: "Fridays-7pm(Childrens-green/brown)",
  },
  {
    value: "Saturdays-1pm(Childrens-white/purple)",
    label: "Saturdays-1pm(Childrens-white/purple)",
  },
  {
    value: "Saturdays-2pm(Childrens-green/brown)",
    label: "Saturdays-2pm(Childrens-green/brown)",
  },
  {
    value: "Sundays-11am(Childrens-white/purple)",
    label: "Sundays-11am(Childrens-white/purple)",
  },
  {
    value: "Sundays-12-15pm(Childrens-green/brown(red-stripe))",
    label: "Sundays-12-15pm(Childrens-green/brown(red-stripe))",
  },
  {
    value: "Sundays-11am(Childrens-brown)",
    label: "Sundays-11am(Childrens-brown)",
  },
  {
    value: "Mondays-7-30pm(Adults-brown)",
    label: "Mondays-7-30pm(Adults-brown)",
  },
  {
    value: "Wednesdays-7-30pm(Adults)",
    label: "Wednesdays-7-30pm(Adults)",
  },
]

const BookingForm = () => {
  const classes = useStyles()
  const [session, setSession] = useState()

  const handleChange = event => {
    setSession(event.target.value)
  }
  // Helper function to encode for Netlify
  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        phone: "",
        childrensSession: "",
        adultsSession: "",
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
        <Card className={classes.card}>
          <Form
            name="contact-demo"
            className={classes.root}
            data-netlify={true}
          >
            <FormControl>
              <TextField
                className={classes.textField}
                name="name"
                size="medium"
                aria-describedby="your-name"
                required
                id="standard-required"
                label="Name"
                defaultValue="your name"
              />
            </FormControl>
            <FormControl>
              <TextField
                name="email"
                aria-describedby="your-email"
                required
                id="standard-required"
                label="Email"
                defaultValue="your email"
              />
            </FormControl>
            <FormControl>
              <TextField
                name="phone"
                aria-describedby="your-phone"
                required
                id="standard-required"
                label="Phone"
                defaultValue="your number"
              />
            </FormControl>
            <FormControl>
              <TextField
                id="select session"
                select
                label="Select"
                value={session}
                onChange={handleChange}
                helperText="Please select your session"
              >
                {sessions.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </FormControl>
            <FormControl>
              <TextareaAutosize
                className={classes.textArea}
                rowsMin={4}
                name="message"
                aria-describedby="your-message"
                required
                id="standard-required"
                label="Message"
                defaultValue="Message"
              />
            </FormControl>
            <FormControl>
              <Button
                className={classes.button}
                variant="contained"
                color="secondary"
              >
                Submit
              </Button>
            </FormControl>
          </Form>
        </Card>
      )}
    </Formik>
  )
}

export default BookingForm
