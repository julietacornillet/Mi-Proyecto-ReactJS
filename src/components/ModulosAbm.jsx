import { useState, useEffect } from "react";
import { Container, Row, Col, Table, Button, Modal, Form, InputGroup } from "react-bootstrap";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faSpinner, faEdit, faLink, faPhotoFilm, faPlusCircle } from "@fortawesome/free-solid-svg-icons";

import Swal from 'sweetalert2';

const API_URL = "https://6851a6f38612b47a2c0adc64.mockapi.io/modulos";

const ModulosABM = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [modalMode, setModalMode] = useState("create"); 
  const [currentItem, setCurrentItem] = useState({ numero: "", titulo: "", descripcion:"", imagen:"", btnAdicional:"" });



  // Carga inicial
  const fetchItems = async () => {
    //cambia el estado para la carga inicial
      setLoading(true);
      try 
      {
        //Hace una petición HTTP para obtener datos desde la URL API_URL y espera a que termine     
        const res = await fetch(API_URL);
        if (!res.ok) throw new Error("Error al obtener items");

        //es un método que convierte el cuerpo de la respuesta (que normalmente está en formato texto JSON) a un objeto JavaScript.
        const data = await res.json();


        //Guarda los datos recibidos en el estado o variable que maneja los items  
        setItems(data);
      } 
      catch (error) 
      {
        {
          // alerta error
          Swal.fire({
              icon: 'warning',
              title: 'Algo salió mal',
              text: 'Por favor, verifique la ruta de su API o su conexión',
          });
          return;
        }
        
      } 
      //Independientemente de que haya ocurrido un error o no, indica que terminó la carga de datos  
      finally 
      {
        setLoading(false);
      }
    };

  useEffect(() => {
    fetchItems();
  }, []);

  const handleChange = (e) => {
    setCurrentItem({ ...currentItem, [e.target.name]: e.target.value });
  };

  // nuevo item a la API usando POST, luego actualiza la lista de items y cierra el modal. 
  // Si ocurre un error, muestra una alerta.
  const handleCreate = async () => {
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(currentItem),
      });
      if (!res.ok) throw new Error("Error al crear item");
      await fetchItems();
      handleCloseModal();
    } 
    catch (error) {
      {
        // alerta error al crear un nuevo ítem
        Swal.fire({
            icon: 'error',
            title: 'Error al crear un nuevo ítem',
            text: 'Por favor, verifique la ruta de acceso o la conexión',
        });
        return;
      }
      
    }
  };

  // actualizar un registro
  const handleUpdate = async () => {
    try {
      const res = await fetch(`${API_URL}/${currentItem.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(currentItem),
      });
      if (!res.ok) throw new Error("Error al actualizar item");
      await fetchItems();
        // alerta de éxito
        Swal.fire({
          icon: 'success',
          title: 'Modificación exitosa',
          text: 'Su modificación se ha guardado con éxito',
        });
      handleCloseModal();
    } catch (error) {
      {
        // alerta error de modificación
        Swal.fire({
          icon: 'error',
          title: 'Error al editar',
          text: 'Por favor, vuelva a intentarlo nuevamente y si el problema persiste comuníquese con el departamento de sistemas',
        });
        return;
      }
    }
  };

  // borrar un registro
  const handleDelete = async (id) => {

    Swal.fire({
      title: "¿Está seguro de eliminar?",
      text: "Si elimina éste módulo no podrá revertirlo",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, de acuerdo"
    }).then((result) => {
      if (result.isConfirmed) {
      
        fetch(`${API_URL}/${id}`, { method: "DELETE" })
          .then((res) => {
            if (res.ok) {
              return res.json();
            }
            throw new Error('Algo salió mal');
          })
          .then(() => { 
            fetchItems();
            Swal.fire({
                icon: 'success',
                title: 'Ítem eliminado',
                text: 'Se ha eliminado correctamente',
            });
            setLoading(false);
          })
          .catch(() => {
            Swal.fire({
                icon: 'error',
                title: 'Error al eliminar',
                text: 'Hubo un error al eliminar éste ítem',
            });
            setLoading(false);
          });
      }
    
    });
  };

  const openNuevoModal = () => {
    setModalMode("create");
    setCurrentItem({ numero: "", titulo: "", descripcion:"", imagen:"", btnAdicional:"" });
    setShowModal(true);
  };

  const openEditarModal = (item) => {
    setModalMode("edit");
    setCurrentItem(item);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <Container className="mt-2">
      <Row>
        <Col md='12'>
          <h2 className="text-primary-emphasis">Listado ABM de módulos</h2>
        </Col>
      </Row>
      {loading ? (
        <Row className='m-auto text-primary text-opacity-50'><FontAwesomeIcon icon={faSpinner} spin size='4x'/></Row>
      ) : (
        <div>
          <Button size="sm" variant="outline-primary" onClick={openNuevoModal} className="my-3 float-end shadow">
            Nuevo módulo <FontAwesomeIcon icon={faPlusCircle} className="ms-1"/>
          </Button>
          
          <Table striped bordered hover>
            <thead className="bg-gradient table-primary">
              <tr>
                <th>N°</th>
                <th>Título</th>
                <th>Descripción</th>
                <th>Imagen</th>
                <th>Material teórico</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {items.length === 0 && (
                <tr>
                  <td colSpan="6" className="text-center">
                    No hay datos cargados
                  </td>
                </tr>
              )}
              {items.map((item) => (
                <tr key={item.id}>
                  <td>{item.numero}</td>
                  <td>{item.titulo}</td>
                  <td>{item.descripcion}</td>
                  <td>{item.imagen}</td>
                  <td>{item.btnAdicional}</td>
                  <td>
                    <Button variant="link" size="sm" onClick={() => openEditarModal(item)} className="mx-2 p-0" >
                      <FontAwesomeIcon icon={faEdit}/>
                    </Button>
                    <Button variant="link text-danger" size="sm" onClick={() => handleDelete(item.id)} className="mx-2 p-0">
                      <FontAwesomeIcon icon={faTrashCan}/>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      )}

      <Modal show={showModal}  backdrop="static"  keyboard={false} onHide={handleCloseModal} >
        <Modal.Header closeButton className="border-0 text-primary-emphasis pb-0 mx-3">
          <Modal.Title>
            {modalMode === "create" ? "Crear nuevo módulo" : "Modificar módulo"}
          </Modal.Title>
        </Modal.Header>
        
        <Modal.Body className="m-3">
          <Form>
            {/* numero */}
            <Form.Group className="mb-3 col-md-3" controlId="formNumero">
              <Form.Label>Número <small className="text-danger fw-bold">*</small></Form.Label>
              <Form.Control 
                size="sm"
                type="number"
                placeholder=""
                name="numero"
                value={currentItem.numero}
                onChange={handleChange}
                required
              />
            </Form.Group>
            {/* titulo */}
            <Form.Group className="mb-3" controlId="formTitulo">
              <Form.Label>Título <small className="text-danger fw-bold">*</small></Form.Label>
              <Form.Control 
              size="sm"
                type="text"
                placeholder="Ingrese un titulo"
                name="titulo"
                value={currentItem.titulo}
                onChange={handleChange}
                required
              />
            </Form.Group>
            {/* descripcion */}
            <Form.Group className="mb-3" controlId="formDescripcion">
              <Form.Label>Descripción <small className="text-danger fw-bold">*</small></Form.Label>
              <Form.Control 
              size="sm"
                as="textarea"
                rows={5}
                placeholder="Ingrese una descripción"
                name="descripcion"
                value={currentItem.descripcion}
                onChange={handleChange}
                required
              />
            </Form.Group>
            {/* imagen */}
            <Form.Label htmlFor="formImagen">Imagen</Form.Label>
            <InputGroup className="mb-3" size="sm">
              <InputGroup.Text id="img">
                <FontAwesomeIcon icon={faPhotoFilm} className="text-secondary"/>
              </InputGroup.Text>
              <Form.Control  
              size="sm"
                id="formImagen" 
                aria-describedby="img" 
                type="text"
                placeholder="/nombre_imagen.jpg"
                name="imagen"
                value={currentItem.imagen}
                onChange={handleChange} />
            </InputGroup>
            {/* material teórico */}
            <Form.Label htmlFor="formBtnAdicional">Material teórico</Form.Label>
            <InputGroup className="mb-3" size="sm">
              <InputGroup.Text id="url">
                <FontAwesomeIcon icon={faLink} className="text-secondary"/>
              </InputGroup.Text>
              <Form.Control 
                id="formBtnAdicional" 
                aria-describedby="url" 
                placeholder="Ingrese una ruta para el material tórico"
                name="btnAdicional"
                value={currentItem.btnAdicional}
                onChange={handleChange} />
            </InputGroup>
          </Form>
        </Modal.Body>
        
        <Modal.Footer>
          <div className="small me-auto">Todos los campos con  <span className="text-danger fw-bolder">*</span> son requeridos</div>

          <Button variant="outline-secondary" size="sm" onClick={handleCloseModal}>
            Cancelar
          </Button>
          <Button
            variant="primary" size="sm"
            onClick={modalMode === "create" ? handleCreate : handleUpdate}
            disabled={!currentItem.numero || !currentItem.titulo || !currentItem.descripcion}
          >
            {modalMode === "create" ? "Guardar" : "Modificar"}
          </Button>

        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default ModulosABM;
