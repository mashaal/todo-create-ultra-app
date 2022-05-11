import React, { useState } from 'react';

export type NewTodoInputProps = {
  onSubmit: (value: string) => void;
};

export function NewTodoInput({ onSubmit }: NewTodoInputProps) {
  const [value, setValue] = useState('');

  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (onSubmit) {
            onSubmit(value);
          }
        }}
      >
        <input
          type='text'
          placeholder='New todo...'
          value={value}
          onChange={(event) => {
            setValue(event.target.value);
          }}
        />
        <input type='submit' value='Add' />
      </form>
    </>
  );
}
