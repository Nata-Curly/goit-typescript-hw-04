import React, { ChangeEvent, useState } from 'react';

export function FormComponent() {
  const [value, setValue] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value);
  };

  return (
    <input type="text" value={value} onChange={handleChange} />
  );
}

// Ви створюєте компонент форми у React. Ви маєте поле введення, в якому ви хочете відстежити зміни. Для цього ви використовуєте обробник подій onChange. Ваше завдання – правильно типізувати подію, яка передається у цю функцію.