import { useState } from "react";
import Layout from "../components/layout";
export default function Estado() {
  const [number, setNumero] = useState(0);
  function incrementar() {
    setNumero(number + 1);
  }
  return (
    <Layout title="Componente com estado">
      <span>{number}</span>
      <button onClick={incrementar}>Incrementar</button>
    </Layout>
  );
}
