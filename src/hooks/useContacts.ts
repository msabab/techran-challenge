import create from 'zustand'

interface contactType {
  id: string;
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

interface contactsState {
  contacts: contactType[];
  addContact: (contact: contactType) => void;
  removeContact: (contactId: string) => void;
}

const useContacts = create<contactsState>((set) => ({
  contacts: [],
  addContact: (contact: contactType) => set((state) => ({ contacts: [...state.contacts, contact] })),
  removeContact: (contactId: string) => set((state) => ({ contacts: state.contacts.filter(c => c.id !== contactId) })),
}))

export default useContacts;