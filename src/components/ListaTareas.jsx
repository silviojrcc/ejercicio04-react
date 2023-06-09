import React from 'react';
import Tarea from './Tarea';
import { ListGroup } from 'react-bootstrap';

const ListaTareas = ({ tareas, borrarTarea, actualizarEstadoTarea }) => {
    return (
        <section className='p-3'>
            <h2 className='text-light'>Aqui van las tareas</h2>
            <ListGroup>
            {tareas.map((tarea, index) => (
                 <Tarea key={index} tarea={tarea} borrarTarea={borrarTarea} actualizarEstadoTarea={actualizarEstadoTarea}/>
            ))}
            </ListGroup>
        </section>
    );
};

export default ListaTareas;