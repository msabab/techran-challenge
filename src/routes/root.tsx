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

export default function Root() {
  const contacts = useContacts(state => state.contacts)
  const removeContact = useContacts(state => state.removeContact)
  const handleRemoveContact = (contactId: string) => {
    return () => removeContact(contactId)
  }

  return (
    <>
      <div className="bg-gray-100 min-h-screen flex flex-col items-center">
        <h1 className="text-3xl">Contacts</h1>
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
              {contacts.map((contact) => (
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
                    <Button><OpenInNewIcon /></Button>
                    <Button><EditIcon /></Button>
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