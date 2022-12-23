import { useState } from "react"
import useContacts from "../hooks/useContacts";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Button from "@mui/material/Button";
import { Link } from "react-router-dom"
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import Paper from "@mui/material/Paper";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem/MenuItem";
import InputLabel from "@mui/material/InputLabel/InputLabel";
import TextField from '@mui/material/TextField'

export default function Root() {
  const [workTypeFilter, setWorkTypeFilter] = useState("")
  const [searchQuery, setSearchQuery] = useState("")
  const contacts = useContacts(state => state.contacts)
  const filteredContacts = contacts.filter(c => {
    if (workTypeFilter) {
      return c.workType === workTypeFilter
    }
    return true
  }).filter(c => {
    if (searchQuery) {
      return c.firstName.includes(searchQuery) || c.lastName.includes(searchQuery)
    }
    return true
  })
  const removeContact = useContacts(state => state.removeContact)
  const handleRemoveContact = (contactId: string) => {
    return () => removeContact(contactId)
  }


  return (
    <>
      <div className="bg-gray-100 min-h-screen flex flex-col items-center">
        <h1 className="text-3xl">Contacts</h1>
        <div className="flex">
          <TextField
            id="name"
            name="name"
            label="Search in name"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <FormControl >
            <InputLabel id="WorkTypeLabel">WorkType</InputLabel>
            <Select
              labelId="WorkTypeLabel"
              id="WorkType"
              name="workType"
              className="w-56"
              value={workTypeFilter}
              label="WorkType"
              onChange={(e) => setWorkTypeFilter(e.target.value)}
            >
              <MenuItem value={"Part Time"}>Part Time</MenuItem>
              <MenuItem value={"Full Time"}>Full Time</MenuItem>
              <MenuItem value={"Freelance"}>Freelance</MenuItem>
              <MenuItem value={""}>None</MenuItem>
            </Select>
          </FormControl>
        </div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>First Name</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell>Age</TableCell>
                <TableCell>Gender</TableCell>
                <TableCell>Birth Date</TableCell>
                <TableCell>Country</TableCell>
                <TableCell>City</TableCell>
                <TableCell>Job Title</TableCell>
                <TableCell>Phone Number</TableCell>
                <TableCell>Work Type</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredContacts.map((contact) => (
                <TableRow
                  key={contact.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {contact.firstName}
                  </TableCell>
                  <TableCell>{contact.lastName}</TableCell>
                  <TableCell>{contact.age}</TableCell>
                  <TableCell>{contact.gender}</TableCell>
                  <TableCell>{contact.birthdate.toISOString().split('T')[0]}</TableCell>
                  <TableCell>{contact.country}</TableCell>
                  <TableCell>{contact.city}</TableCell>
                  <TableCell>{contact.jobTitle}</TableCell>
                  <TableCell>{contact.phoneNumber}</TableCell>
                  <TableCell>{contact.workType || "-"}</TableCell>
                  <TableCell>{contact.description}</TableCell>
                  <TableCell>
                    <Link to={`/contacts/${contact.id}`}>
                      <Button><OpenInNewIcon /></Button>
                    </Link>
                    <Link to={`/contacts/${contact.id}/edit`}>
                      <Button><EditIcon /></Button>
                    </Link>
                    <Button onClick={handleRemoveContact(contact.id)}><DeleteIcon /></Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Link to="/new" >
          <Button>
            New
          </Button>
        </Link>
      </div>
    </>
  );
}