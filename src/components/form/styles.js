import styled, { css } from "styled-components"
import { Form, Field } from "formik"

export const Container = styled.div`
  margin: 0 50px auto;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  @media (max-width: 480px) {
    margin: 0 25px;
  }
`

export const InputForm = styled(Form)`
  margin: 20px 0;
  padding: 20px;
  max-width: 950px;
  min-width: 250px;
  background-color: #b1c3c9;
  border-radius: 10px;
  box-shadow: 10px 10px 24px 0px rgba(0, 0, 0, 0.75);
`

export const FormRow = styled.div`
  margin-bottom: 10px;
`

export const PageWrapper = styled.section`
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

export const Label = styled.label`
  margin-top: 1.5rem;
  width: 100%;
`

export const Select = styled.select`
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

export const Input = styled(Field)`
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

export const StyledInlineErrorMessage = styled.div`
  background-color: rgb(255, 245, 245);
  color: rgb(120, 27, 0);
  display: block;

  padding: 0.5rem 0.75rem;
  margin-top: 0.5rem;
  white-space: pre-line;
`

export const Submit = styled.button`
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
