import Styles from "../styles/estiloso.module.css";

import Layout from "../components/layout";

import Link from "next/link";

export default function Estiloso() {
  return (
    <Layout title="exemplo de css modularizado">
      <div className={Styles.roxo}>
        <h1> Olá eu tenho um css modularizado</h1>
      </div>
    </Layout>
  );
}
