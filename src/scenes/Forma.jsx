import React from 'react'
import Header from "../components/Header";
import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  address1: "",
  address2: "",
};

const Forma = () => {
const isNonMobile = useMediaQuery("(min-width:600px)")
const handleBlur = () =>{};
const handleChange = () =>{};
const handleSubmit = (values) =>{console.log(values)};
  return (
    <Box m="20px">
    <Header title="Create user" subtitle="Welcome to your Form" />
    <Formik
    onSubmit={handleFormSubmit}
    initialValues={initialValues}
    validationSchema={checkoutSchema}
  >
    {({
      values,
      errors,
      touched,
      handleBlur,
      handleChange,
      handleSubmit,
    }) => (
      <form onSubmit={handleSubmit}>
        <Box
          display="grid"
          gap="30px"
          gridTemplateColumns="repeat(4, minmax(0, 1fr))"
          sx={{
            "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
          }}
        >
          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="First Name"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.firstName}
            name="firstName"
            error={!!touched.firstName && !!errors.firstName}
            helperText={touched.firstName && errors.firstName}
            sx={{ gridColumn: "span 2" }}
          />
        </Box>
        </form>
    )
        }
      </Formik>  
    </Box>
  )
}
export default Forma;