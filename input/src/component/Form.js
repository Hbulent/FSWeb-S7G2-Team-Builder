import React from "react";
const Form = (props) => {
  const { handleChange, handleSubmit, newMember } = props;
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          autoFocus
          type="text"
          name="name"
          onChange={handleChange}
          value={newMember.name}
        />
      </label>
      <label>
        E-mail:
        <input
          type="text"
          name="email"
          onChange={handleChange}
          value={newMember.email}
        />
      </label>
      <label>
        Role:
        <input
          type="text"
          name="role"
          onChange={handleChange}
          value={newMember.role}
        />
      </label>

      <input type="submit" name="Submit" />
    </form>
  );
};

export default Form;
