import React, { useState } from "react";
import { ContactList } from './Components/ContactList';
import list from './Contacts.json';
import { ContactFavorite } from './Components/ContactFavorite';

function App() {
    const [contactfav, setContactfav] = useState([]);
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [numero, setNumero] = useState("");
    const [contactos, setContactos] = useState(list);
    const handleNombre = (e) => {
        setNombre(e.target.value);
    };
    const handleApellido = (e) => {
        setApellido(e.target.value);
    };
    const handleNumero = (e) => {
        setNumero(e.target.value);
    };

    const handleChange = (e, setter) => {
        setter(e.target.value);
    };

    const handleClick = () => {
        if (!nombre.trim() || !apellido.trim() || !numero.trim()) {
            alert('Por favor llenar todos los campos');
            return;
        }

        const nuevoContacto = {
            id: contactos.length ? contactos[contactos.length - 1].id + 1 : 1,
            nombre,
            apellido,
            numero,
            esFav: false
        };

        setContactos([...contactos, nuevoContacto]);
        setNombre('');
        setApellido('');
        setNumero('');
    };

    const handleBorrarContacto = (id) => {
        const contactosRestantes = contactos.filter(item => item.id !== id);
        setContactos(contactosRestantes);
    };

    const handleBorrarFavorito = (id) => {
        const updatedFav = contactfav.filter(contacto => contacto.id !== id);
        setContactfav(updatedFav);
        setFavorito(id, false);
    };

    const setFavorito = (id, isFav) => {
        const updatedContactos = contactos.map(contacto =>
            contacto.id === id ? { ...contacto, esFav: isFav } : contacto
        );

        setContactos(updatedContactos);

        if (isFav) {
            setContactfav(prevFav => [...prevFav, updatedContactos.find(contacto => contacto.id === id)]);
        } else {
            const updatedFav = contactfav.filter(contacto => contacto.id !== id);
            setContactfav(updatedFav);
        }
    };

    return (
        <div className="bg-black mx-auto justify-center">
            <form>
                <div className="bg-blue-500 w-full h-12 flex items-center justify-center border-y-4">
                    <h1 className="text-white font-extrabold text-lg">
                        Contactos de Cotto y Duque
                    </h1>
                </div>
                <div className="justify-center mx-auto flex">
                    <div className="mt-[20px]">
                        <label className="mx-4 text-white font-extrabold">Escribe el nombre del contacto</label>
                        <input
                            type="text"
                            placeholder="Nombre"
                            className="form-control mx-4 px-5 py-1.5 text-xl font-normal text-black bg-white placeholder-gray-600 bg-clip-padding border-2 rounded-lg border-white border-transparent focus:ring-0"
                            value={nombre}
                            onChange={handleNombre}
                        />
                    </div>
                    <div className="mt-[20px] grid-cols-5 gap-4">
                        <label className="mx-4 text-white font-extrabold mt-3">Escribe el apellido del contacto</label>
                        <input
                            type="text"
                            placeholder="Apellido"
                            className="form-control mx-4 px-5 py-1.5 text-xl font-normal text-black bg-white placeholder-gray-600 bg-clip-padding rounded-lg border-2 border-white border-transparent focus:ring-0"
                            value={apellido}
                            onChange={handleApellido}
                        />
                    </div>
                    <div className="mt-[20px] grid-cols-5 gap-4">
                        <label className="mx-4 text-white font-extrabold mt-3">Escribe el número de teléfono</label>
                        <input
                            type="text"
                            placeholder="Número telefónico"
                            className="form-control mx-4 px-5 py-1.5 text-xl font-normal text-black placeholder-gray-600 bg-white bg-clip-padding border-2 rounded-lg border-white border-transparent focus:ring-0"
                            value={numero}
                            onChange={handleNumero}
                        />
                    </div>
                    <div className="mt-[30px]  items-center  justify-center">
                        <button
                            type="button"
                            className="my-5 hover:bg-green-950 bg-green-600 w-[150px] h-[30px]  rounded-lg font-bold text-white"
                            onClick={handleClick}
                        >
                            Agregar contacto
                        </button>
                    </div>

                </div>
            </form>
            <div className="text-white w-[50%] mx-auto font-medium text-center min-h-full  border-4">
                <ContactFavorite contactfav={contactfav} borrarFavorito={handleBorrarFavorito} />
                <div className="text-white  font-medium bg-gray-800 text-center min-h-full p-4 border-4">
                    Contactos:
                    <ContactList contactos={contactos} quitar={handleBorrarContacto} hacerFav={setFavorito} />
                </div>
            </div>
        </div>
    );
}

export default App;
