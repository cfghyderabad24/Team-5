// UploadComponent.js
import React, { useState } from "react";
import styled from "styled-components";
import { db, storage } from "../User/firebase-config";
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
      const storageRef = ref(storage, 'uploads/${file.name}');
      await uploadBytes(storageRef, file);
      const url = await getDownloadURL(storageRef);
      setFileUrl(url);
      return url;
    }
    return "";
  };

  const createUser = async (e) => {
    e.preventDefault();
    if ( newMessage) {
      try {
        const url = await handleUpload();
        await addDoc(usersCollectionRef, {
          
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
      <Title>Upload Documents</Title>
      <Form onSubmit={createUser}>
       
        <InputField>
          <Input
            type="text"
            placeholder="Enter the type of Document"
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