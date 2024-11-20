import React from "react";
import { useEffect, useState } from "react";

export default function ContactDetails({ selectedContactId, setSelectedContactId }) {
    const [contact, setContact] = useState({})

    useEffect(() => {
        async function fetchContact() {
            try {
                const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`)
                const result = await response.json();
                setContact(result)
            } catch (error) {
                console.error(error);
            }
        }
        fetchContact();
        console.log(contact)
    }, []);



    return (
        <>
            <h2>Name: {contact.name} Email: {contact.email}</h2>
        </>
    );
}