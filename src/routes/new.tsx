import { useFormik } from 'formik'
import React from 'react'
import ContactForm from '../components/ContactForm'
import useContacts, { newContactType } from '../hooks/useContacts'
import { useNavigate } from "react-router-dom"
import * as Yup from 'yup';

const FormValidationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  age: Yup.number()
    .min(1, 'Person must be born first!')
    .required('Required'),
  gender: Yup.string()
    .required('Specify Gender'),
  birthdate: Yup.date()
    .required(),
  country: Yup.string()
    .required('Required'),
  city: Yup.string()
    .required('Required'),
  jobTitle: Yup.string()
    .required('Required'),
  phoneNumber: Yup.string()
    .required('Required'),
  workType: Yup.string()
    .optional(),
  description: Yup.string()
    .required('Required'),
});

const New = () => {
  const addContact = useContacts(state => state.addContact)
  const navigate = useNavigate()

  const contactFormik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      age: 18,
      gender: "Male",
      birthdate: new Date(),
      country: "US",
      city: "New York",
      jobTitle: "Frontend Developer",
      phoneNumber: "",
      workType: undefined,
      description: "",
    } as newContactType,
    validationSchema: FormValidationSchema,
    onSubmit: (values) => {
      addContact(values)
      navigate("/")
    }
  })
  return (
    <div>
      <ContactForm values={contactFormik.values} handleChange={contactFormik.handleChange} onSubmit={contactFormik.handleSubmit} />
    </div>
  )
}

export default New