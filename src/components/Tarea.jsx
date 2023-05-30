import React, { useState } from 'react';
import { ListGroup, Button } from 'react-bootstrap';


const Tarea = ({tarea, borrarTarea}) => {

    const [completada, setCompletada] = useState(false);

    const handleCheckboxChange = () => {
        setCompletada(!completada);
    };

    return (
        <div>
            <ListGroup.Item className="d-flex justify-content-between text-light bg-dark">
                <p className={` ${completada ? "completada" : ""}`}>{tarea.texto}</p>
                <div className='d-flex justify-content-center align-items-center'>
                    <div className='mx-3'>
                        <label className='mx-2' for="completada">Completada?</label>
                        <input name="completada" id="completada" type='checkbox' onChange={handleCheckboxChange} checked={completada} value={tarea.estaCompletada} />
                    </div>
                <Button onClick={() => {borrarTarea(tarea)}} variant="danger">Borrar</Button>
                </div>
            </ListGroup.Item>
        </div>
    );
};

export default Tarea;