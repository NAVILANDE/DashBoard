import React, { useState } from "react";
import Widget from "./Widget";
import widgetsData from "../data/widgets.json";

const Dashboard = () => {
  const [widgets] = useState(widgetsData);
  const [confirmedWidgets, setConfirmedWidgets] = useState({});

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
    <div className="widgets-display">
      {Object.keys(confirmedWidgets).map((category) =>
        confirmedWidgets[category].map((widgetId) => {
          const widget = widgets[category].find(
            (widget) => widget.id === widgetId
          );
          return (
            <Widget
              key={widgetId}
              name={widget.name}
              text={widget.text}
              onRemove={() => handleWidgetRemove(category, widgetId)}
            />
          );
        })
      )}
    </div>
  );
};

export default Dashboard;
