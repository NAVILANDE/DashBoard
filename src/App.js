import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import widgetsData from "../src/data/widgets.json";
import Home from "./components/Home";

const categories = ["CSPM", "CWPP", "Images", "Ticket"];

const App = () => {
  const [widgets] = useState(widgetsData);
  const [selectedWidgets, setSelectedWidgets] = useState({});
  const [confirmedWidgets, setConfirmedWidgets] = useState({});
  const [modalShow, setModalShow] = useState(false);

  const handleAddWidgetClick = () => {
    setModalShow(true);
  };

  const handleWidgetToggle = (category, widgetId) => {
    setSelectedWidgets((prevSelectedWidgets) => {
      const newSelection = { ...prevSelectedWidgets };

      if (!newSelection[category]) {
        newSelection[category] = [];
      }

      if (newSelection[category].includes(widgetId)) {
        newSelection[category] = newSelection[category].filter(
          (id) => id !== widgetId
        );
      } else {
        newSelection[category].push(widgetId);
      }

      return newSelection;
    });
  };

  const handleConfirmSelection = () => {
    setConfirmedWidgets((prevConfirmedWidgets) => ({
      ...prevConfirmedWidgets,
      ...selectedWidgets,
    }));
    setModalShow(false);
  };

  const handleWidgetRemove = (category, widgetId) => {
    setConfirmedWidgets((prevConfirmedWidgets) => {
      const newSelection = { ...prevConfirmedWidgets };
      newSelection[category] = newSelection[category].filter(
        (id) => id !== widgetId
      );
      if (newSelection[category].length === 0) {
        delete newSelection[category];
      }
      return newSelection;
    });
  };

  return (
    <>
      <Navbar onAddWidgetClick={handleAddWidgetClick} />

      <Sidebar
        show={modalShow}
        onHide={() => setModalShow(false)}
        widgets={widgets}
        onWidgetToggle={handleWidgetToggle}
        selectedWidgets={selectedWidgets}
        onConfirm={handleConfirmSelection}
      />

      <div className="widgets-display">
        {Object.keys(confirmedWidgets).length === 0 ? (
          <Home widgets={widgets} />
        ) : (
          categories.map((category, index) => (
            <div key={index} className="category-section">
              <h1 className="category-heading">{category}</h1>
              <div className="grid">
                {Array.from({ length: 4 }).map((_, cardIndex) => {
                  const widgetId = confirmedWidgets[category]?.[cardIndex];
                  const widget = widgets[category]?.find(
                    (w) => w.id === widgetId
                  );

                  return widget ? (
                    <div key={cardIndex} className="card">
                      <img
                        src={widget.imageUrl}
                        alt={widget.name}
                        className="card-img-top"
                      />
                      <div className="card-body">
                        <h5 className="card-title">{widget.name}</h5>
                        <p className="card-text">{widget.text}</p>
                        <button
                          onClick={() =>
                            handleWidgetRemove(category, widget.id)
                          }
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div key={cardIndex} className="card add-widget">
                      <div className="icon">+</div>
                      <div className="text">Add Widget</div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default App;
