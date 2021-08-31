import Layout from "../components/layout";
function JSx() {
  const texto = "string";
  // {} são a forma de colocar codigo javascript no JSX
  return (
    <Layout title="entendendo o JSx">
      <div>
        <h1> Jsx é um conceito</h1>
        <h2>{texto}</h2>
      </div>
    </Layout>
  );
}
export default JSx;
