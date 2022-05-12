import React from 'react';

export function Spinner() {
  return (
    <>
      <style>
        {`
          .Spinner {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background-color: transparent;
            border: 2px solid var(--surface-2);
            border-top: 2px solid #03A9F4;
            -webkit-animation: 1s spin linear infinite;
            animation: 1s spinner-animation linear infinite;
          }

          @-webkit-keyframes spinner-animation {
            from {
              -webkit-transform: rotate(0deg);
              transform: rotate(0deg);
            }
            to {
              -webkit-transform: rotate(360deg);
              transform: rotate(360deg);
            }
          }

          @keyframes spinner-animation {
            from {
              -webkit-transform: rotate(0deg);
              transform: rotate(0deg);
            }
            to {
              -webkit-transform: rotate(360deg);
              transform: rotate(360deg);
            }
          }
        `}
      </style>
      <div className='Spinner' />
    </>
  );
}
