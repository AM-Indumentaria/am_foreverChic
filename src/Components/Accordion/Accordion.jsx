import { Add, Remove } from "@mui/icons-material"
import { Accordion, AccordionDetails, AccordionSummary, Container} from "@mui/material"
import "../../index.css"
import "./Accordion.css"
import { useState } from "react"



export const AccordionAm = () => {

    const [expanded, setExpanded] = useState(false)


    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : "");
    };

    return (
        <section className="faq-section">
            <Container>
                <h2 className="faq-title">Preguntas Frecuentes</h2>
                <Accordion expanded={expanded === "panel1"} onChange={handleChange('panel1')}>
                    <AccordionSummary
                        expandIcon={expanded === "panel1" ? <Remove sx={{ color: "#D0AD99" }} /> : <Add sx={{ color: "#D0AD99" }} />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <h3>¿Hay un monto mínimo para comprar?</h3>
                    </AccordionSummary>
                    <AccordionDetails>
                        <p>No existe un monto mínimo de compra. Podes adquirir nuestros productos sin restricciones y según tus necesidades. Nos adaptamos a tus preferencias y te brindamos flexibilidad en tus compras. ¡Explora nuestro catálogo y elegí lo que más te guste sin preocuparte por montos mínimos!</p>
                    </AccordionDetails>
                </Accordion>

                <Accordion expanded={expanded === "panel2"} onChange={handleChange('panel2')}>
                    <AccordionSummary
                        expandIcon={expanded === "panel2" ? <Remove sx={{ color: "#D0AD99" }} /> : <Add sx={{ color: "#D0AD99" }} />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <h3>¿En cuánto tiempo arman un pedido?</h3>
                    </AccordionSummary>
                    <AccordionDetails>
                        <p>El pedido se arma el mismo día que el cliente realiza el pedido.</p>
                    </AccordionDetails>
                </Accordion>

                <Accordion expanded={expanded === "panel3"} onChange={handleChange('panel3')}>
                    <AccordionSummary
                        expandIcon={expanded === "panel3" ? <Remove sx={{ color: "#D0AD99" }} /> : <Add sx={{ color: "#D0AD99" }} />}
                        aria-controls="panel3a-content"
                        id="panel3a-header"
                    >
                        <h3>¿De cuánto tiempo dispongo para pagar mi pedido?</h3>
                    </AccordionSummary>
                    <AccordionDetails>
                        <p>Nuestros clientes cuentan con tres días hábiles para realizar el pago; de no hacerlo, el pedido se cancela, e invitamos a nuestros usuarios a realizar un nuevo pedido.</p>
                    </AccordionDetails>
                </Accordion>

                <Accordion expanded={expanded === "panel4"} onChange={handleChange('panel4')}>
                    <AccordionSummary
                        expandIcon={expanded === "panel4" ? <Remove sx={{ color: "#D0AD99" }} /> : <Add sx={{ color: "#D0AD99" }} />}
                        aria-controls="panel4a-content"
                        id="panel4a-header"
                    >
                        <h3>¿Realizan envíos?</h3>
                    </AccordionSummary>
                    <AccordionDetails>
                        <p>Sí, realizamos envíos. Consultas por WhatsApp al 2604323788.</p>
                    </AccordionDetails>
                </Accordion>

                <Accordion expanded={expanded === "panel5"} onChange={handleChange('panel5')}>
                    <AccordionSummary
                        expandIcon={expanded === "panel5" ? <Remove sx={{ color: "#D0AD99" }} /> : <Add sx={{ color: "#D0AD99" }} />}
                        aria-controls="panel5a-content"
                        id="panel5a-header"
                    >
                        <h3>¿Realizan cambios?</h3>
                    </AccordionSummary>
                    <AccordionDetails>
                        <p>No se aceptan cambios de productos por otro modelo, talle ni color, y tampoco se toman devoluciones. Únicamente se aceptan reclamos por fallas específicas en la prenda que presente algún tipo de defecto de fabricación o fue despachada equivocadamente. En ese caso, se realizan cambios de forma presencial en la tienda en un plazo de 15 días, junto al ticket de compra. La prenda debe estar en el mismo estado en que fue entregada, con su respectiva etiqueta y composición. Sin ellas, no se realizan cambios.</p>
                    </AccordionDetails>
                </Accordion>
            </Container>
        </section>
    )
}