// UploadComponent.js
import React, { useState } from "react";
import styled from "styled-components";
import { db, storage } from "../../../firebase-config";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  max-width: 600px;
  margin: 50px auto;
`;

const Title = styled.h1`
  color: #333;
`;

const Form = styled.form`
  width: 100%;
`;

const InputField = styled.div`
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const FileInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #218838;
  }
`;

const UploadComponent = () => {
  const [newFname, setNewFname] = useState("");
  const [newLname, setNewLname] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newAddress, setNewAddress] = useState("");
  const [newMessage, setNewMessage] = useState("");
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");
  const [fileUrl, setFileUrl] = useState("");

  const usersCollectionRef = collection(db, "DontTouch");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFile(file);
      setFileName(file.name);
    }
  };

  const handleUpload = async () => {
    if (file) {
      const storageRef = ref(storage, `uploads/${file.name}`);
      await uploadBytes(storageRef, file);
      const url = await getDownloadURL(storageRef);
      setFileUrl(url);
      return url;
    }
    return "";
  };

  const createUser = async (e) => {
    e.preventDefault();
    if (newFname && newLname && newPhone && newEmail && newAddress && newMessage) {
      try {
        const url = await handleUpload();
        await addDoc(usersCollectionRef, {
          fname: newFname,
          lname: newLname,
          phone: newPhone,
          email: newEmail,
          address: newAddress,
          message: newMessage,
          fileName: fileName,
          fileUrl: url,
        });
        alert("Data stored");
        window.location.reload(false);
      } catch (error) {
        console.error("Error adding document: ", error);
        alert("Failed to store data. Please try again.");
      }
    } else {
      alert("All fields are necessary");
    }
  };

  return (
    <Container>
      <Title>Contact Us</Title>
      <Form onSubmit={createUser}>
        <InputField>
          <Input
            type="text"
            placeholder="First name"
            value={newFname}
            onChange={(e) => setNewFname(e.target.value)}
          />
        </InputField>
        <InputField>
          <Input
            type="text"
            placeholder="Last Name"
            value={newLname}
            onChange={(e) => setNewLname(e.target.value)}
          />
        </InputField>
        <InputField>
          <Input
            type="text"
            placeholder="Phone Number"
            value={newPhone}
            onChange={(e) => setNewPhone(e.target.value)}
          />
        </InputField>
        <InputField>
          <Input
            type="text"
            placeholder="Email ID"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
          />
        </InputField>
        <InputField>
          <Input
            type="text"
            placeholder="Drop Your Address"
            value={newAddress}
            onChange={(e) => setNewAddress(e.target.value)}
          />
        </InputField>
        <InputField>
          <Input
            type="text"
            placeholder="Enter Your Message"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
        </InputField>
        <InputField>
          <FileInput type="file" onChange={handleFileChange} />
        </InputField>
        <Button type="submit">Submit</Button>
      </Form>
    </Container>
  );
};

export default UploadComponent;
 