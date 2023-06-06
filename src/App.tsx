import { useState } from "react";
import styled from "styled-components";

const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 1rem;
  form {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
  }
`;

interface IFormInfo {
  name: string;
  email: string;
  phone: string | number;
}

const formInfoDefault = {
  name: "",
  email: "",
  phone: "",
} as IFormInfo;

function App() {
  const [phase, setPhase] = useState<number>(1);
  const [formInfo, setFormInfo] = useState(formInfoDefault);
  return (
    <Container>
      <form>
        <h2>Personal info</h2>
        <p>Please provide your name, email address, and phone number.</p>
        <label htmlFor="">Name</label>
        <input
          type="text"
          value={formInfo.name}
          onChange={(e) => {
            setFormInfo({ ...formInfo, name: e.target.value });
          }}
        />
        <p>{formInfo.name}</p>
      </form>
    </Container>
  );
}

export default App;
