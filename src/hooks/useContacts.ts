import create from 'zustand'
import { v4 as uuidv4 } from 'uuid';
import { Moment } from 'moment';
import { persist } from 'zustand/middleware'
import moment from 'moment'
export interface newContactType {
  firstName: string;
  lastName: string;
  age: number;
  gender: "Male" | "Female";
  birthdate: Date | string;
  country: "US" | "UK" | "Iran" | "China" | "Canada";
  city: "New York" | "London" | "Tehran" | "Beijing" | "Vancouver";
  jobTitle: "Frontend Developer" | "Backend Developer" | "DevOps" | "Software Engineer" | "UI Designer";
  phoneNumber: string;
  workType: "Part time" | "Full time" | "Freelance" | "";
  description: string;
}
export interface savedContactType extends newContactType {
  id: string;
}

interface contactsState {
  contacts: savedContactType[];
  addContact: (contact: newContactType) => void;
  removeContact: (contactId: string) => void;
  editContact: (contactId: string, updatedContact: newContactType) => void;
}

const useContacts = create<contactsState>()(
  persist(
    (set) => ({
      contacts: [],
      addContact: (contact: newContactType) => set((state) => ({
        contacts: [
          ...state.contacts,
          { id: uuidv4(), ...contact }
        ]
      })),
      removeContact: (contactId: string) => set((state) => ({
        contacts: state.contacts.filter(c => c.id !== contactId)
      })),
      editContact: (contactId: string, updatedContact: newContactType) => set((state) => ({
        contacts: [
          ...state.contacts.filter(c => c.id !== contactId),
          {
            id: contactId,
            ...updatedContact
          }
        ]
      }))
    }),
    {
      name: 'contacts-storage'
    }
  )
)

export default useContacts;