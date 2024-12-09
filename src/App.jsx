// src/App.jsx
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import MailboxForm from "./components/MailboxForm";
import MailboxList from "./components/MailboxList";
import MailboxDetails from "./components/MailboxDetails";
import { useState } from "react";

const App = () => {
  const [mailBoxes, setMailBoxes] = useState([]);

  const addBox = (newBoxData) => {
    const newBox = {
      ...newBoxData, _id: mailBoxes.length + 1
    };
    setMailBoxes([...mailBoxes, newBox]);
  };

  return (
    <>
    <NavBar />
    <Routes>
      <Route path="/" element={<main><h1>Post Office</h1></main>} />
      <Route path="/mailboxes" element={<MailboxList mailBoxes={mailBoxes} />} />
      <Route path="/new-mailbox" element={<MailboxForm addBox={addBox} />} />
      <Route path="/mailboxes/:id" element={<MailboxDetails mailBoxes={mailBoxes} />} />
    </Routes>
    </>
  );
};

export default App;
