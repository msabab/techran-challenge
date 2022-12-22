import create from 'zustand'
import { v4 as uuidv4 } from 'uuid'; 'uuid'
export interface newContactType {
  firstName: string;
  lastName: string;
  age: number;
  gender: "Male" | "Female";
  birthdate: Date;
  country: "US" | "UK" | "Iran" | "China" | "Canada";
  city: "New York" | "London" | "Tehran" | "Beijing" | "Vancouver";
  jobTitle: "Frontend Developer" | "Backend Developer" | "DevOps" | "Software Engineer" | "UI Designer";
  phoneNumber: string;
  workType?: "Part time" | "Full time" | "Freelance";
  description: string;
}
export interface savedContactType extends newContactType {
  id: string;
}

interface contactsState {
  contacts: savedContactType[];
  addContact: (contact: newContactType) => void;
  removeContact: (contactId: string) => void;
}

const useContacts = create<contactsState>((set) => ({
  contacts: [],
  addContact: (contact: newContactType) => set((state) => ({
    contacts: [
      ...state.contacts,
      { id: uuidv4(), ...contact }
    ]
  })),
  removeContact: (contactId: string) => set((state) => ({ contacts: state.contacts.filter(c => c.id !== contactId) })),
}))

export default useContacts;