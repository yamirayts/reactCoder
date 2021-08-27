import miss from "./../img/miss.jpg"


export default function contacto(){
    return(
        <>
        <div className="container contacto">
            <div className="row justify-content-evenly">
                
                <div className="col-md-6 col-sm-12 mapa align-self-center " dangerouslySetInnerHTML={{ __html: '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12576.465762919597!2d-57.5571101!3d-37.9977444!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x273a16c103e1f471!2sSophie%20Heart%20Bath%20Bombs!5e0!3m2!1ses-419!2sar!4v1629926178345!5m2!1ses-419!2sar" width="450" height="250" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'}} />
                

                <div className="col-md-6 col-sm-12 imgContact align-self-center">
                    <img className="imgContact" src={miss} alt="" />
                </div>
                <div className="col-12">
                    <h3 className="precio">Tel.: (0223) 456-1234</h3>
                </div>
            </div>
            </div>
        </>
    )
}