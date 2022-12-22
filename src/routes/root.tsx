import { Form } from "react-router-dom";
import useContacts from "../hooks/useContacts";

export default function Root() {
  const contacts = useContacts(state => state.contacts)

  return (
    <>
      <div className="bg-gray-100 min-h-screen flex flex-col items-center">
        <h1 className="text-3xl">Contacts</h1>
        <table>
          <thead>
            <tr>
              <th>
                Name
              </th>
              <th>
                Gender
              </th>
              <th>
                Country
              </th>
            </tr>
          </thead>
          <tbody>
            {contacts.map(contact => <tr key={contact.id}>
              <th>
                {`${contact.firstName} ${contact.lastName}`}
              </th>
              <th>
                {`${contact.gender}`}
              </th>
              <th>
                {`${contact.country}`}
              </th>
            </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}