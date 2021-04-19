import * as React from 'react';

export const Alert = ({title, message, type, children}) => {
  return (
    <div className="alert">
      <h1>Type: { ['warning', 'danger'].includes(type) && type }</h1>
      <h2>Title: { title || 'alert'}</h2>
      <span>{ message }</span>
      { children }
    </div>
  )
}