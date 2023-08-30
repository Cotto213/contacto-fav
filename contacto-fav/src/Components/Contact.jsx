import React, { useState } from "react";

const Contact = ({ contacto, borrar, favorito }) => {
    const [esFavorito, hacerFavorito] = useState(contacto.esFav);

    const cambiarEstado = () => {
        const newFavState = !esFavorito;
        hacerFavorito(newFavState);
        favorito(contacto.id, newFavState);
    };

    const elimContacto = () => {
        borrar(contacto.id);
    };

    return (

        <div class={" flex items-center bg-gray-800 h-[100%] "}>
        <div className="text-white  border-8  border-white py-2 w-[50%] my-3 mx-auto">
            <h1 className="font-bold">Nombre: {contacto.nombre}</h1>
            <h1>Apellido: {contacto.apellido}</h1>
            <h1>Número telefónico: {contacto.numero}</h1>
            <button class="hover:bg-green-950 mx-1 bg-green-600 w-[150px] h-[30px] rounded-lg font-bold text-white"
                    type="button" onClick={cambiarEstado}>
                {esFavorito ? "" : "Agregar a favoritos"}
            </button>
            <button class="hover:bg-red-950 mx-auto bg-red-600 w-[150px] h-[30px] rounded-lg font-bold text-white"
                type="button" onClick={elimContacto}>
                Eliminar Contacto
            </button>
        </div>
        </div>

    );
};

export default Contact;
