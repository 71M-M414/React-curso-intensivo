import { useRouter } from "next/router";
import Layout from "../../../components/layout";
export default function ClientePorCodigo() {
  const router = useRouter();

  return (
    <Layout title="Navegação dinamica">
      <div> Código = {router.query.codigo}</div>
      <div> Filial = {router.query.filial}</div>
    </Layout>
  );
}
