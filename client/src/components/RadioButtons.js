import React, { useState } from 'react';

function RadioButtons() {
  const [form, setForm] = useState({ father: '', mother: '' });

  const handleAgeChange = (event) => {
    const [role, age] = event.target.id.split('-');

    setForm((prevForm) => ({
      ...prevForm,
      [role]: age
    }));
  };

  return (
    <div>
      <div>
        <h3>Father's Age:</h3>
        {[40, 50, 60].map((age) => (
          <label key={age}>
            <input
              type="radio"
              id={`father-${age}`}
              value={age}
              checked={form.father === `${age}`}
              onChange={handleAgeChange}
            />
            {age}
          </label>
        ))}
        <p>Selected Father's Age: {form.father}</p>
      </div>

      <div>
        <h3>Mother's Age:</h3>
        {[38, 48, 58].map((age) => (
          <label key={age}>
            <input
              type="radio"
              id={`mother-${age}`}
              value={age}
              checked={form.mother === `${age}`}
              onChange={handleAgeChange}
            />
            {age}
          </label>
        ))}
        <p>Selected Mother's Age: {form.mother}</p>
      </div>
    </div>
  );
}

export default RadioButtons;
