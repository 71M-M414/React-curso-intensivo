import Link from "next/link";
import Styles from "../styles/Layout.module.css";

function Layout(props) {
  return (
    <div className="layout">
      <div className={Styles.header}>
        <h1>{props.title ?? "Mais um exemplo"}</h1>
        <Link href="/">Voltar</Link>
      </div>
      <div className={Styles.content}>{props.children}</div>
    </div>
  );
}

export default Layout;
