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
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
const ViewContact = () => {
  const params = useParams()
  const contacts = useContacts(state => state.contacts)
  const contactData = contacts.find(c => c.id === params.contactId)

  if (!contactData) {
    return <>
      Loading
    </>
  }

  return (
    <div>
      <div className='flex flex-col max-w-md px-4 py-8 gap-4'>
        <TextField
          contentEditable={false}
          id="firstName"
          name="firstName"
          label="First Name"
          value={contactData.firstName}
        />
        <TextField
          contentEditable={false}
          id="lastName"
          name="lastName"
          label="Last Name"
          value={contactData.lastName}
        />
        <TextField
          contentEditable={false}
          id="age"
          name="age"
          label="Age"
          type='number'
          value={contactData.age}
        />
        <FormControl>
          <FormLabel id="GenderLabel">Gender</FormLabel>
          <RadioGroup
            aria-labelledby="GenderLabel"
            name="gender"
            value={contactData.gender}
            row={true}
          >
            <FormControlLabel value="Female" control={<Radio />} label="Female" />
            <FormControlLabel value="Male" control={<Radio />} label="Male" />
          </RadioGroup>
        </FormControl>
        <TextField
          contentEditable={false}
          id="birthdate"
          name="birthdate"
          label="Birth Date"
          value={contactData.birthdate.format("YYYY-MM-DD")}

        />

        <FormControl >
          <InputLabel id="CountryLabel">County</InputLabel>
          <Select
            labelId="CountryLabel"
            id="Country"
            name="country"
            value={contactData.country}
            label="Country"

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
            value={contactData.city}
            label="City"

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
            value={contactData.jobTitle}
            label="JobTitle"

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
          value={contactData.phoneNumber}
          type="tel"
        />
        <FormControl >
          <InputLabel id="WorkTypeLabel">WorkType</InputLabel>
          <Select
            labelId="WorkTypeLabel"
            id="WorkType"
            name="workType"
            value={contactData.workType}
            label="WorkType"

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
          value={contactData.description}
          multiline={true}
        />

        <Link to="/">
          <Button variant="contained" type='submit'>Home</Button>
        </Link>
        <Link to="edit">
          <Button variant="contained" type='reset'>Edit</Button>
        </Link>
      </div>

    </div >
  )
}

export default ViewContact