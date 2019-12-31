import React from "react";

const InputGroup = ({
  name,
  label,
  error,
  buttonLabel,
  validate,
  Submit,
  ...rest
}) => {
  return (
    <div className="input-group mb-3">
      <input
        type="text"
        name={name}
        className="form-control"
        placeholder={label}
        label={label}
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
        {...rest}
      />
      <div className="input-group-append">
        <button
          className="btn btn-primary"
          type="button"
          disabled={validate}
          onClick={Submit}
        >
          {buttonLabel}
        </button>
      </div>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default InputGroup;
