import { useEffect, useState } from "react";

function DolarBlue() {
  const [valorVenta, setValorVenta] = useState(null);
  const [valorCompra, setValorCompra] = useState(null);

  useEffect(() => {
    fetch("https://api.bluelytics.com.ar/v2/latest")
      .then((response) => response.json())
      .then((data) => {
        setValorVenta(data.blue["value_sell"]);
        setValorCompra(data.blue["value_buy"]);
      });
  }, []);

  return (
    <div className="container text-center mt-5 dolar-card">
      <h1 class="site-title"  style={{ color: "#000080" }}>Dolar Blue.</h1>
      <div >
            <p className="title">Compra</p>
            <h1 class="value">${valorCompra}</h1>
          
            <p className="title">Venta</p>
            <h1 class="value">${valorVenta}</h1>

            <p className="title">Valor Medio</p>
            <h1 class="value" >${ (valorVenta + valorCompra) / 2}</h1>
      </div>
    </div>
  );
}

export default DolarBlue;