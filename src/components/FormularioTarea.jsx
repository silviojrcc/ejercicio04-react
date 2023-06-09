import { Form, Button } from "react-bootstrap";
import ListaTareas from "./ListaTareas";
import { useEffect, useState } from "react";


const FormularioTarea = () => {

    const [textoTarea, setTextoTarea] = useState("");
    const [tareas, setTareas] = useState(JSON.parse(localStorage.getItem("tareas")) || []);

    useEffect(() => {
        localStorage.setItem("tareas", JSON.stringify(tareas))
    },[tareas])

    function handleChange(e) {
        setTextoTarea(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        const tarea = {
            texto: textoTarea,
            estaCompletada: false
        }
        setTareas([...tareas, tarea]);
        //e.target.reset();
        setTextoTarea("");
    }

    const borrarTarea = (tareaABorrar) => {
        const nuevaListaTareas = tareas.filter((tarea) => tarea.texto !== tareaABorrar.texto);
        setTareas(nuevaListaTareas);
    }

    const actualizarEstadoTarea = (tareaACompletar) => {
        const tareasActualizadas = [...tareas];

        const tareaModificada = tareasActualizadas.find((tarea) => tarea.texto === tareaACompletar.texto);
        tareaModificada.estaCompletada = tareaACompletar.estaCompletada;

        setTareas(tareasActualizadas);
        console.log(tareas);
    }

    return (
        <div className="">
            <Form onSubmit={handleSubmit} className="d-flex align-content-center justify-content-center">
                <Form.Group className="mx-2" controlId="formBasicEmail">
                    <Form.Control onChange={handleChange} value={textoTarea} type="text" placeholder="Ingrese su tarea" />
                </Form.Group>
                <Button className="" variant="primary" type="submit">
                    Agregar
                </Button>
            </Form>
            <hr className="text-light mt-4" />
            <ListaTareas tareas={tareas} borrarTarea={borrarTarea} actualizarEstadoTarea={actualizarEstadoTarea}></ListaTareas>
        </div>
    );
};

export default FormularioTarea;