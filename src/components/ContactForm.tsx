import React from 'react'
import { newContactType, savedContactType } from '../hooks/useContacts'
import InputSelector from './Elements/InputSelector'
import InputText from './Elements/InputText'

const ContactForm = ({ values, handleChange, onSubmit }: { values: newContactType, handleChange: any, onSubmit: any }) => {
  return (
    <div>
      <form className='flex flex-col' onSubmit={onSubmit}>
        <InputText label='First Name' name='firstName' value={values.firstName} onChange={handleChange} />
        <InputText label='Last Name' name='lastName' value={values.lastName} onChange={handleChange} />
        <InputText label='Age' name='age' value={values.age} onChange={handleChange} type="number" />
        <InputSelector label='Gender' name='gender' value={values.gender} onChange={handleChange} options={[{ id: "MALE", value: "Male" }, { id: "FEMALE", value: "Female" }]} />
        <div>
          <label htmlFor='birthdate'>
            Birth Date
          </label>
          <input className='border' type='date' name="birthdate" value={values.birthdate.toDateString()} onChange={handleChange} />
        </div>
        <InputSelector label='Country' name='country' value={values.country} onChange={handleChange} options={[{ id: "US", value: "US" }, { id: "UK", value: "UK" }]} />
        <InputSelector label='City' name='city' value={values.city} onChange={handleChange} options={[{ id: "New York", value: "New York" }, { id: "London", value: "London" }]} />
        <InputSelector label='Job Title' name='jobTitle' value={values.jobTitle} onChange={handleChange} options={[{ id: "Frontend Developer", value: "Frontend Developer" }, { id: "Backend Developer", value: "Backend Developer" }]} />
        <InputText label="Phone Number" name="phoneNumber" value={values.phoneNumber} onChange={handleChange} />
        <InputSelector label='Work Type' name='workType' value={values.workType} onChange={handleChange} options={[{ id: "Fulltime", value: "Fulltime" }, { id: "Freelance", value: "Freelance" }]} />
        <div>
          <label htmlFor='description'>
            Description
          </label>
          <textarea name="description" value={values.description} onChange={handleChange} />
        </div>

        <button type='submit'>
          Submit
        </button>
      </form>
    </div>
  )
}

export default ContactForm