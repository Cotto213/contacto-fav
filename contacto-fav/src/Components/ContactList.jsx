import React from "react";
import Contact from "./Contact";
import PropTypes from "prop-types";

export const ContactList = ({ contactos, quitar, hacerFav }) => {
    const contactosNoFavoritos = contactos.filter((contacto) => !contacto.esFav);

    return (
        <div>
            <h1 className="text-white font-medium text-center"></h1>
            {contactosNoFavoritos.map((contacto) => (
                <Contact key={contacto.id} contacto={contacto} borrar={quitar} favorito={hacerFav} />
            ))}
        </div>
    );
};

ContactList.propTypes = {
    contactos: PropTypes.array.isRequired,
    quitar: PropTypes.func.isRequired,
    hacerFav: PropTypes.func.isRequired
};

export default ContactList;
