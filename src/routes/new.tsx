import { useFormik } from 'formik'
import useContacts, { newContactType } from '../hooks/useContacts'
import { useNavigate } from "react-router-dom"
import * as Yup from 'yup';
import TextField from '@mui/material/TextField'
import { Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import moment from 'moment'
import { Link } from "react-router-dom"

const FormValidationSchema = Yup.object().shape({
  firstName: Yup.string()
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .max(50, 'Too Long!')
    .required('Required'),
  age: Yup.number()
    .min(1, 'Person must be born first!')
    .required('Required'),
  gender: Yup.string()
    .required('Specify Gender'),
  birthdate: Yup.date()
    .required("Must be selected"),
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
      workType: "",
      description: "",
    } satisfies newContactType,
    validationSchema: FormValidationSchema,
    validateOnChange: true,
    onSubmit: (values) => {
      addContact(values)
      navigate("/")
    }
  })
  return (
    <div>
      <form className='flex flex-col max-w-md px-4 py-8 gap-4' onSubmit={contactFormik.handleSubmit}>
        <TextField

          id="firstName"
          name="firstName"
          label="First Name"
          value={contactFormik.values.firstName}
          onChange={contactFormik.handleChange}
          error={contactFormik.touched.firstName && Boolean(contactFormik.errors.firstName)}
          helperText={contactFormik.touched.firstName && contactFormik.errors.firstName}
        />
        <TextField

          id="lastName"
          name="lastName"
          label="Last Name"
          value={contactFormik.values.lastName}
          onChange={contactFormik.handleChange}
          error={contactFormik.touched.lastName && Boolean(contactFormik.errors.lastName)}
          helperText={contactFormik.touched.lastName && contactFormik.errors.lastName}
        />
        <TextField

          id="age"
          name="age"
          label="Age"
          type='number'
          value={contactFormik.values.age}
          onChange={contactFormik.handleChange}
          error={contactFormik.touched.age && Boolean(contactFormik.errors.age)}
          helperText={contactFormik.touched.age && contactFormik.errors.age}
        />
        <FormControl>
          <FormLabel id="GenderLabel">Gender</FormLabel>
          <RadioGroup
            aria-labelledby="GenderLabel"
            name="gender"
            value={contactFormik.values.gender}
            onChange={contactFormik.handleChange}
            row={true}
          >
            <FormControlLabel value="Female" control={<Radio />} label="Female" />
            <FormControlLabel value="Male" control={<Radio />} label="Male" />
          </RadioGroup>
        </FormControl>
        <div>
          <LocalizationProvider dateAdapter={AdapterMoment}>
            <DesktopDatePicker
              label="Birth Date"
              inputFormat="MM/DD/YYYY"
              value={contactFormik.values.birthdate}
              onChange={(e) => {
                if (e) {
                  const d = new Date(e.toISOString())
                  contactFormik.setFieldValue('birthdate', d)
                }
              }
              }
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
          <h6>
            {contactFormik.touched.birthdate && Boolean(contactFormik.errors.birthdate) && "Must be selected"}
          </h6>
        </div>
        <FormControl >
          <InputLabel id="CountryLabel">County</InputLabel>
          <Select
            labelId="CountryLabel"
            id="Country"
            name="country"
            value={contactFormik.values.country}
            label="Country"
            onChange={contactFormik.handleChange}
            error={contactFormik.touched.country && Boolean(contactFormik.errors.country)}
          >
            <MenuItem value={"US"}>US</MenuItem>
            <MenuItem value={"UK"}>UK</MenuItem>
            <MenuItem value={"Iran"}>Iran</MenuItem>
            <MenuItem value={"China"}>China</MenuItem>
            <MenuItem value={"Canada"}>Canada</MenuItem>
          </Select>
        </FormControl>
        <FormControl >
          <InputLabel id="CityLabel">City</InputLabel>
          <Select
            labelId="CityLabel"
            id="City"
            name="city"
            value={contactFormik.values.city}
            label="City"
            onChange={contactFormik.handleChange}
            error={contactFormik.touched.city && Boolean(contactFormik.errors.city)}
          >
            <MenuItem value={"New York"}>New York</MenuItem>
            <MenuItem value={"London"}>London</MenuItem>
            <MenuItem value={"Tehran"}>Tehran</MenuItem>
            <MenuItem value={"Beijing"}>Beijing</MenuItem>
            <MenuItem value={"Vancouver"}>Vancouver</MenuItem>
          </Select>
        </FormControl>
        <FormControl >
          <InputLabel id="JobTitleLabel">JobTitle</InputLabel>
          <Select
            labelId="JobTitleLabel"
            id="JobTitle"
            name="jobTitle"
            value={contactFormik.values.jobTitle}
            label="JobTitle"
            error={contactFormik.touched.jobTitle && Boolean(contactFormik.errors.jobTitle)}
            onChange={contactFormik.handleChange}
          >
            <MenuItem value={"Frontend Developer"}>Frontend Developer</MenuItem>
            <MenuItem value={"Backend Developer"}>Backend Developer</MenuItem>
            <MenuItem value={"DevOps"}>DevOps</MenuItem>
            <MenuItem value={"Software Engineer"}>Software Engineer</MenuItem>
            <MenuItem value={"UI Designer"}>UI Designer</MenuItem>
          </Select>
        </FormControl>
        <TextField
          id="phoneNumber"
          name="phoneNumber"
          label="Phone Number"
          value={contactFormik.values.phoneNumber}
          onChange={contactFormik.handleChange}
          error={contactFormik.touched.phoneNumber && Boolean(contactFormik.errors.phoneNumber)}
          helperText={contactFormik.touched.phoneNumber && contactFormik.errors.phoneNumber}
          type="tel"
        />
        <FormControl >
          <InputLabel id="WorkTypeLabel">WorkType</InputLabel>
          <Select
            labelId="WorkTypeLabel"
            id="WorkType"
            name="workType"
            value={contactFormik.values.workType}
            label="WorkType"
            onChange={contactFormik.handleChange}
          >
            <MenuItem value={"Part Time"}>Part Time</MenuItem>
            <MenuItem value={"Full Time"}>Full Time</MenuItem>
            <MenuItem value={"Freelance"}>Freelance</MenuItem>
            <MenuItem value={""}>None</MenuItem>
          </Select>
        </FormControl>
        <TextField
          id="description"
          name="description"
          label="Description"
          rows={2}
          value={contactFormik.values.description}
          onChange={contactFormik.handleChange}
          error={contactFormik.touched.description && Boolean(contactFormik.errors.description)}
          helperText={contactFormik.touched.description && contactFormik.errors.description}
          multiline={true}
        />

        <Button variant="contained" type='submit'>Submit</Button>
        <Link to="/">
          <Button variant="contained" type='submit'>Cancel</Button>
        </Link>
      </form>

    </div>
  )
}

export default New