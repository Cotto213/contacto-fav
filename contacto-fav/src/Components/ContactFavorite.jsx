import React from "react";

export const ContactFavorite = ({ contactfav, borrarFavorito }) => {
    const favList = contactfav.map((contacto) => (

        <div className={"text-white  border-8  border-yellow-200 py-2 w-[50%] my-3 mx-auto"}>
        <div className="text-white " key={contacto.id}>

            <h1 className="font-bold"> Nombre: {contacto.nombre}</h1>
            <h1>Apellido: {contacto.apellido}</h1>
            <h1>Número telefónico: {contacto.numero}</h1>
            <button
                class="hover:bg-red-950 bg-red-600 py-1 my-3   w-[150px] h-[30px] rounded-lg font-bold text-white"
                type="button" onClick={() => borrarFavorito(contacto.id)}>
                Quitar de Favoritos
            </button>
        </div>

        </div>
    ));

    return (
        <div>
            <h1 class=" items-center text-white p-4 font-bold justify-center mx-auto">Contactos Favoritos:</h1>
            {favList}
        </div>
    );
};
