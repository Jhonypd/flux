/** @format */

const initialState = {
  notes: [
    {
      id: "010101",
      title: "Nota 1",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad perspiciatis ex magni alias, voluptate modi veritatis impedit rerum.",
    },
    {
      id: "020202",
      title: "Nota 2",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit!",
    },
    {
      id: "030303",
      title: "Nota 3",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius libero pariatur nobis maiores!",
    },
  ],
  name: "Jhony",
};

const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_NOTE":
      return {
        ...state,
        notes: [...state.notes, action.note],
      };

    case "REMOVE_NOTE":
      return {
        ...state,
        notes: state.notes.filter((note) => note.id !== action.id),
      };

    case "GET_NOTES":
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default notesReducer;
