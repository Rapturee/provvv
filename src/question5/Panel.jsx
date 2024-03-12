import React, { useState } from 'react';

function Panel({ title, children, collapsible }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    if (collapsible) {
      setIsCollapsed(!isCollapsed);
    }
  };

  return (
    <div>
      <h2>{title}</h2>
      {collapsible && (
        <button onClick={toggleCollapse}>
          {isCollapsed ? 'Visa' : 'Mindre'}
        </button>
      )}
      {!isCollapsed && children}
    </div>
  );
}

export default Panel;