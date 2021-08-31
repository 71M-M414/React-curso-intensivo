import Navegador from "../components/Navegador";

function Inicio() {
  return (
    <div
      Style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        felxWrap: "wrap",
        height: "100vh",
      }}
    >
      <h1> Fundamentos de Next.js e React</h1>
      <h2>Vamos estudar esse Framework</h2>
      <Navegador destino="/estiloso" texto="Css Modularizado" cor="crimson" />
      <Navegador destino="/jsx" texto="Entenda o que é jsx" cor="violet" />
      <Navegador
        destino="/navegacao"
        texto=" exemplo: Navegação 01"
        cor="green"
      />
      <Navegador
        destino="/cliente/sp-2/123"
        texto="Exemplo 2 : Navegação Dinamica"
        cor="blue"
      />

      <Navegador destino="/estado" texto="Componente com estado" cor="pink" />
    </div>
  );
}

export default Inicio;
