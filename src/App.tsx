import React from 'react';
import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Input from './components/Input';
import Modal from './components/Modal';

function App() {
  const [inputValue,setInputValue] = useState<string>("");
  const [names,setNames] = useState<string[]>([]);

  const [isModalOpen, setModalOpen] = useState<boolean>(false);
 
   const toggleModal = () => setModalOpen(!isModalOpen);



  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
    setInputValue(e.target.value);
  }

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>)=> {
    e.preventDefault(); 

    if (!inputValue) {
        return;
    }
   
    addName(inputValue)
    setInputValue("");
}

const addName=(name: string)=>{
    setNames((prevName: string[]) => [...prevName,name])
}
    
return (
  <div className="App p-5 space-y-6">
    <h1 className="text-2xl font-bold">Component Demo</h1>

    {/* Form Submit */}
    <form onSubmit={handleFormSubmit} className="space-y-4">
      <h2 className="text-xl font-semibold">Add a Name</h2>
      <Input
        type="text"
        value={inputValue}
        placeholder="Enter your Name"
        onChange={handleChange}
      />
      <br />
      <Button color="red" size="4px" type="submit" />
    </form>

    {/* Modal Section */}
    <div className="space-y-2">
      <h2 className="text-xl font-semibold">Modal Example</h2>
      <Button
        color="blue"
        size="8px"
        onClick={toggleModal}
        type="button"
      />
      <Modal
        title="Modal"
        isOpen={isModalOpen}
        onClose={toggleModal}
        content="Hello from the modal"
      >
        <button
          className="bg-gray-200 rounded px-3 py-1 hover:bg-gray-300"
          onClick={toggleModal}
        >
          Close
        </button>
      </Modal>
    </div>

    {/* Displaying Names */}
    <div className="space-y-1">
      <h2 className="text-xl font-semibold">Submitted Names</h2>
      {names.map((name, index) => (
        <p key={index}>{name}</p>
      ))}
    </div>
  </div>
);

}

export default App;
