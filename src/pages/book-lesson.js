import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import BookingForm from "../components/form"
// import { Formik, Form, Field, ErrorMessage } from "formik"

const Container = styled.div`
  margin: 0 50px auto;
  display: flex;
  flex-direction: column;
`

const Para = styled.p`
  margin: 20px 50px;
  transition: all 200ms ease-in;
  :hover {
    color: goldenrod;
  }
`

const BookLesson = () => {
  return (
    <Layout>
      <h1>Book A Session</h1>
      <Container>
        <BookingForm />
      </Container>
    </Layout>
  )
}

export default BookLesson
