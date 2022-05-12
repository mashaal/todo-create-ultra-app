import React, { useState } from 'react';

export type NewTodoInputProps = {
  onSubmit: (value: string) => void;
};

export function NewTodoInput({ onSubmit }: NewTodoInputProps) {
  const [value, setValue] = useState('');

  return (
    <>
      <style>
        {`
          .NewTodoTextInput {
            background-color: #000;
          }
        `}
      </style>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (onSubmit) {
            onSubmit(value);
          }
        }}
      >
        <input
          className='NewTodoTextInput'
          type='text'
          placeholder='New todo...'
          value={value}
          onChange={(event) => {
            setValue(event.target.value);
          }}
        />
        <input className='NewTodoSubmitInput' type='submit' value='Add' />
      </form>
    </>
  );
}
