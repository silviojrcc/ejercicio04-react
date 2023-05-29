import { Form, Button } from "react-bootstrap";
import ListaTareas from "./ListaTareas";
import { useState } from "react";


const FormularioTarea = () => {

    const [tarea, setTarea] = useState("");
    const [tareas, setTareas] = useState([]);


    function handleChange(e) {
        setTarea(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        setTareas([...tareas, tarea]);
        //e.target.reset();
        setTarea("");
    }

    return (
        <div className="">
            <Form onSubmit={handleSubmit} className="d-flex align-content-center justify-content-center">
                <Form.Group className="mx-2" controlId="formBasicEmail">
                    <Form.Control onChange={handleChange} value={tarea} type="text" placeholder="Ingrese su tarea" />
                </Form.Group>
                <Button className="" variant="primary" type="submit">
                    Agregar
                </Button>
            </Form>
            <hr className="text-light mt-4" />
            <ListaTareas tareas={tareas}></ListaTareas>
        </div>
    );
};

export default FormularioTarea;