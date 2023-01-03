import React from 'react';

export const FormInput = ({ isTextArea, ...otherProps }) => {
  return (
    <React.Fragment>
      {isTextArea ? (
        <textarea {...otherProps}></textarea>
      ) : (
        <input {...otherProps} />
      )}
    </React.Fragment>
  );
};
