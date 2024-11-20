import "./App.css";
import { useState } from "react";
import ContactList from "./components/ContactList";
import ContactDetails from "./components/ContactDetails";

export default function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);

  return (
    <>
      {selectedContactId ? (
        <ContactDetails selectedContactId={selectedContactId} setSelectedContactId={setSelectedContactId} />
      ) : (
        <ContactList setSelectedContactId={setSelectedContactId} />
      )}
    </>
  );
}