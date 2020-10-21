import React from "react"
import Layout from "../components/layout"
import BookingForm from "../components/form/form"
import styled from "styled-components"

const Container = styled.div`
  margin: 0 50px auto;
  display: flex;
  flex-direction: column;
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
