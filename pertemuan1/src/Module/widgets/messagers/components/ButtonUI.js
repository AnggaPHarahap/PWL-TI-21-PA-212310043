import React from 'react';

const ButtonPrimary = ({ children, items, actions }) => {
  return (
    <button className={`btn btn-success ${items.btn_class}`} type="submit" onClick={actions}>
      {children}
      {items.title}
    </button>
  );
};

const ButtonSecondary = ({ children, items, actions }) => {
  return (
    <button className={`btn btn-clear ${items.btn_class}`} type="button" onClick={actions}>
      {children}
      {items.title}
    </button>
  );
};

const ButtonUI = () => {
  return <div>{/* Your button components go here */}</div>;
};

export { ButtonPrimary, ButtonSecondary, ButtonUI };