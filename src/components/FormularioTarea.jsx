import { Form, Button } from "react-bootstrap";

const FormularioTarea = () => {
    return (
        <div className="">
            <Form className="d-flex align-content-center">
                <Form.Group className="" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Ingrese su tarea" />
                </Form.Group>
                <Button className="" variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <hr className="text-light mt-3" />
        </div>
    );
};

export default FormularioTarea;