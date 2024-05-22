/** @format */

// ES6 Syntax

export const getNotes = () => {
  return {
    type: "GET_NOTES",
  };
};

export const addNote = (note) => {
  return {
    type: "ADD_NOTE",
    note,
  };
};

export const removeNote = (id) => {
  return {
    type: "REMOVE_NOTE",
    id,
  };
};
