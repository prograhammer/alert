import * as React from 'react';

export const Alert = ({name, children}) => {
  return (
    <div className="alert">
      <h1>Hello from {name ? name : 'alert'}</h1>
      { children }
    </div>
  )
}