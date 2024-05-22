/** @format */

import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "./components/Header";
import Grid from "./components/Grid";
import Form from "./components/Form.js";
import { getNotes, addNote, removeNote } from "./store/actions";

class App extends Component {
  componentDidMount() {
    this.props.getNotes();
  }
  render() {
    const { name, notes, addNote, removeNote } = this.props;
    return (
      <div>
        <Header name={name} />
        <Form addNote={addNote} />
        <Grid notes={notes} removeNote={(id) => removeNote(id)} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getNotes: () => {
      dispatch(getNotes());
    },
    addNote: (note) => {
      dispatch(addNote(note));
    },
    removeNote: (id) => {
      dispatch(removeNote(id));
    },
  };
};

const mapStateToProps = (state, ownProps) => {
  return {
    notes: state.notes,
    name: state.name,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
