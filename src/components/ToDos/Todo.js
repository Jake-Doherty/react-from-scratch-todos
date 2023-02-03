import React, { useState } from 'react';
import { Button, ListGroup, ToggleButton } from 'react-bootstrap';
import './Todo.css';

export default function Todo({ id, description, completed, handleChange, handleDelete }) {
  const [checked, setChecked] = useState(completed);
  const [buttonContent, setButtonContent] = useState('❌');

  const handleHover = (e) => {
    if (e.type === 'mouseover') {
      setButtonContent('😲');
    }
    if (e.type === 'mouseout') {
      setButtonContent('❌');
    }
  };

  return (
    <ListGroup id={`todo-${id}`} horizontal>
      <ListGroup.Item>
        <ToggleButton
          className="mb-2"
          id="toggle-check"
          type="checkbox"
          variant="outline-primary"
          checked={!checked}
          value="1"
          onClick={() => {
            setChecked(!checked);
            handleChange({ id, completed });
          }}
        >
          Checked
        </ToggleButton>
      </ListGroup.Item>
      <ListGroup.Item id="description">{description}</ListGroup.Item>
      <ListGroup.Item>
        <Button
          onMouseOver={(e) => handleHover(e)}
          onMouseOut={(e) => handleHover(e)}
          variant="outline-danger"
          onClick={() => handleDelete({ id })}
        >
          {buttonContent}
        </Button>
      </ListGroup.Item>
    </ListGroup>
  );
}
