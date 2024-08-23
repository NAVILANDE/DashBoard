import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

const Sidebar = ({
  show,
  onHide,
  widgets,
  onWidgetToggle,
  selectedWidgets,
  onConfirm,
}) => {
  const [activeCategory, setActiveCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setActiveCategory((prevCategory) =>
      prevCategory === category ? null : category
    );
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="sidebar-modal"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Add Widget</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListGroup variant="flush" className="category-list">
          {Object.keys(widgets).map((category) => (
            <ListGroup.Item
              key={category}
              action
              onClick={() => handleCategoryClick(category)}
              className={`category-item ${
                activeCategory === category ? "active" : ""
              }`}
            >
              {category}
            </ListGroup.Item>
          ))}
        </ListGroup>

        {activeCategory && (
          <div className="widgets-list mt-3">
            <h5>{activeCategory}</h5>
            {widgets[activeCategory].map((widget) => (
              <Form.Check
                type="checkbox"
                id={`widget-${widget.id}`}
                label={widget.name}
                key={widget.id}
                checked={
                  selectedWidgets[activeCategory] &&
                  selectedWidgets[activeCategory].includes(widget.id)
                }
                onChange={() => onWidgetToggle(activeCategory, widget.id)}
                className="widget-item"
              />
            ))}
          </div>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={onConfirm}>
          Confirm
        </Button>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Sidebar;
