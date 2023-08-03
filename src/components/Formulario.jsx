import { useState, useEffect } from "react";

import InputForm from "./InputForm";
import TextAreaForm from "./TextAreaForm";
import Error from "./Error";

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fechaA, setFechaA] = useState("");
  const [sintomas, setSintomas] = useState("");

  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setFechaA(paciente.fechaA);
      setSintomas(paciente.sintomas);
    }
  }, [paciente]);

  const generaId = () => {
    const random = Math.random(36).toString(36).substring(2);
    const fecha = Date.now().toString(36);
    return fecha + random;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validaciones
    if ([nombre, propietario, email, fechaA, sintomas].includes("")) {
      setError(true);
      return;
    }
    setError(false);

    // Objeto Paciente
    const objectPaciente = {
      nombre,
      propietario,
      email,
      fechaA,
      sintomas,
    };

    if (paciente.id) {
      //Nuevo registo
      objectPaciente.id = paciente.id;
      const pacienteAct = pacientes.map((pacienteState) =>
        pacienteState.id === paciente.id ? objectPaciente : pacienteState
      );
      setPacientes(pacienteAct);
      setPaciente({});
    } else {
      //Editar registro
      objectPaciente.id = generaId();
      setPacientes([...pacientes, objectPaciente]);
    }

    setNombre("");
    setPropietario("");
    setEmail("");
    setFechaA("");
    setSintomas("");
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="text-lg mt-5 text-center">
        Añade pacientes y {""}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mt-10 mb-10"
      >
        {error && (
          <Error>
            <p>Todos los campos son obligatorios</p>
          </Error>
        )}
        <InputForm
          id="mascota"
          labelText="Mascota:"
          typeInput="text"
          valueInput={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Nombre de la Mascota"
        />
        <InputForm
          id="propietario"
          labelText="Propietario:"
          typeInput="text"
          valueInput={propietario}
          onChange={(e) => setPropietario(e.target.value)}
          placeholder="Nombre del Propietario"
        />
        <InputForm
          id="email"
          labelText="Email:"
          typeInput="email"
          valueInput={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email Contacto Propietario"
        />
        <InputForm
          id="alta"
          labelText="Alta:"
          valueInput={fechaA}
          onChange={(e) => setFechaA(e.target.value)}
          typeInput="date"
        />
        <TextAreaForm
          id="sintomas"
          labelText="Sintomas:"
          valueInput={sintomas}
          onChange={(e) => setSintomas(e.target.value)}
          placeholder="Ingrese los sintomas"
        />
        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
          value={paciente.id ? "Editar Paciente" : "Agregar Paciente"}
        />
      </form>
    </div>
  );
};

export default Formulario;
