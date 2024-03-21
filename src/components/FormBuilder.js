import React, { useState } from 'react';

const FormBuilder = ({ onSubmit }) => {
  const [formFields, setFormFields] = useState([]);

  const addFormField = () => {
    setFormFields([...formFields, { type: 'text', label: '', placeholder: '' }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formFields);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Form Builder</h2>
      {formFields.map((field, index) => (
        <div key={index}>
          <label>Label:</label>
          <input
            type="text"
            value={field.label}
            onChange={(e) =>
              setFormFields([
                ...formFields.slice(0, index),
                { ...field, label: e.target.value },
                ...formFields.slice(index + 1),
              ])
            }
          />
          <label>Type:</label>
          <select
            value={field.type}
            onChange={(e) =>
              setFormFields([
                ...formFields.slice(0, index),
                { ...field, type: e.target.value },
                ...formFields.slice(index + 1),
              ])
            }
          >
            <option value="text">Text</option>
            <option value="checkbox">Check box</option>
            <option value="radio">Radio</option>
          </select>
          <button onClick={() => setFormFields(formFields.filter((_, i) => i !== index))}>Remove</button>
        </div>
      ))}
      <button type="button" onClick={addFormField}>
        ADD FIELD
      </button>
      <button type="submit">CREATE FORM </button>
    </form>
  );
};

export default FormBuilder;
