import { Form } from "react-router-dom";

export default function Root() {
  return (
    <>
      <div className="bg-gray-100 min-h-screen flex flex-col items-center">
        <h1 className="text-3xl">Contacts</h1>
        <table>
          <thead>
            <tr>
              <th>
                a
              </th>
              <th>
                b
              </th>
              <th>
                c
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>
                a
              </th>
              <th>
                b
              </th>
              <th>
                c
              </th>
            </tr>
            <tr>
              <th>
                a
              </th>
              <th>
                b
              </th>
              <th>
                c
              </th>
            </tr>
            <tr>
              <th>
                a
              </th>
              <th>
                b
              </th>
              <th>
                c
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}