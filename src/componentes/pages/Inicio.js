import React from "react";

const inicio = () => {
    return(
     <div>        
        <section className="w-50 mx-auto text-center pt-5" id="intro">
            <h2 className="p-3 fs-2 border-top border-3">FABRICA Y DISTRIBUIDORA <span>BARILE</span></h2>
            <p className="p-3 fs-4 text-light bg-dark"><span className="text-info">VENTA MAYORISTA Y MINORISTA </span>En barile somos fabricantes y distribuidores de nuestros propios helados artesanales, brindandote la mejor calidad de productos para tu negocio</p>
        </section>
            
    <section className="fabrica">
        <div className="w-75 m-auto text-center" id="divSeccion">
        <h3 className="mb-5 fs-2 text-primary">COMPROMISO Y EFICIENCIA! <span className="text-danger">Trayectoria en el mercado y contando</span></h3>
        <p className="fs-4 bg-dark text-light" id="divSeccion">Como bien se indica, nuestro compromiso es cumplir con las necesidades de nuestro cliente y unas de esas necesidades es que lo que vaya a comprar no afecte a su bolsillo, ya que al momento de pagar es lo que mas nos duele siempre, por eso brindamos lo que mejor se adapte a su presupuesto y asi ganarnos su confiabilidad para una proxima compra.</p>
        </div>
    </section>
    </div>

       
    )

}

export default inicio