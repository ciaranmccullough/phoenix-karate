import React from "react"
import Layout from "../components/layout"
import BookingForm from "../components/form/booking-form"
import { Container } from "../components/form/styles"

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
