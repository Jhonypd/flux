/** @format */

import { Component, createRef } from "react";
import { v4 as uuidv4 } from "uuid";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.titleRef = createRef();
    this.detailsRef = createRef();
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const titleValue = this.titleRef.current.value.trim();
    const detailsValue = this.detailsRef.current.value.trim();
    if (!titleValue || !detailsValue) {
      return alert("preencha todos os campos...");
    }
    const note = {
      id: uuidv4(),
      title: this.titleRef.current.value,
      details: this.detailsRef.current.value,
    };

    this.titleRef.current.value = "";
    this.detailsRef.current.value = "";
    this.props.addNote(note);
  };
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="col s12">
          <div className="row">
            <div className="input-field col s3">
              <input
                id="title"
                name="currentTitle"
                type="text"
                className="validate"
                ref={this.titleRef}
              />
              <label htmlFor="title">Titulo</label>
            </div>
            <div className="input-field col s3">
              <input
                id="details"
                name="currentDetails"
                type="text"
                className="validate"
                ref={this.detailsRef}
              />
              <label htmlFor="details">Detalhes</label>
            </div>
            <div className="input-field col s2">
              <button
                className="btn-large waves-effect waves-light"
                type="submit"
                name="action">
                Add note
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
