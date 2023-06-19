import React, { useState } from "react";

export default function MidArea() {
  const [draggedElement, setDraggedElement] = useState(null);

  const handleDragOver = (event) => {
    // Prevent the default behavior which would prevent dropping
    event.preventDefault();
  };

  const handleDrop = (event) => {
    // Prevent the default behavior which would open the dropped element as a link
    event.preventDefault();

    // Retrieve the dragged element's ID from the data transfer
    const draggedElementId = event.dataTransfer.getData("text/plain");

    // Retrieve the dragged element using the ID
    const draggedElement = document.getElementById(draggedElementId);

    // Move the dragged element to the drop target
    event.target.appendChild(draggedElement);

    // Clear the reference to the dragged element
    setDraggedElement(null);
  };

  const handleDragStart = (event, elementId) => {
    // Set the data being dragged
    event.dataTransfer.setData("text/plain", elementId);

    // Store a reference to the dragged element
    setDraggedElement(event.target);
  };

  return (
    <div
      className="flex-1 h-full overflow-auto"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <div className="drop-target">
        {draggedElement && (
          <div
            className="dragged-element"
            draggable="true"
            onDragStart={(event) => handleDragStart(event, draggedElement.id)}
          >
            {draggedElement.innerText}
          </div>
        )}
      </div>
    </div>
  );
}
