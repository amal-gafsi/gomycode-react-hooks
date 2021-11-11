import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

export default function MyModal(props) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton style={{ backgroundColor: "#191e4d" }}>
        <Modal.Title
          id="contained-modal-title-vcenter"
          style={{ color: "red" }}
        >
          Add New Movie
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ backgroundColor: "#191e4d", color: "white" }}>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Movie Title</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Movie Description</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => {
                setDesc(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Poster URL</Form.Label>
            <Form.Control
              type="text"
              placeholder="http://"
              onChange={(e) => {
                setPoster(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Rating</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => {
                setRating(e.target.value);
              }}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer style={{ backgroundColor: "#191e4d" }}>
        <Button
          variant="danger"
          onClick={() => {
            props.onHide();
            props.addNewMovie({
              title: title,
              description: desc,
              posterURL: poster,
              rating: rating,
            });
          }}
        >
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
