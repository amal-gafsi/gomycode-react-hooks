import React from "react";
import MyModal from "./MyModal";
import { Button } from "react-bootstrap";
export default function Add({ addNewMovie }) {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div
      style={{
        paddingTop: 60,
        position: "absolute",
        paddingLeft: 18,
      }}
    >
      <Button variant="danger" onClick={() => setModalShow(true)}>
        Add Movie
      </Button>

      <MyModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        addNewMovie={addNewMovie}
      />
    </div>
  );
}
