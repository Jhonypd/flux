/** @format */

const Single = ({ note, removeNote }) => {
  return (
    <div className="row">
      <div className="col s12 m6">
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <span className="card-title">{note.title}</span>
            <p>{note.details}</p>
          </div>
          <div className="card-action">
            <button
              onClick={() => removeNote(note.id)}
              className="waves-effect waves-light btn">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Single;
