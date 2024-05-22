/** @format */

import { Component } from "react";
import Single from "./Single";

export default class Grid extends Component {
  removeNote(id) {
    this.props.removeNote(id);
  }

  renderItems() {
    const { notes } = this.props;
    if (!notes || notes.length === 0) {
      return null;
    }
    return notes.map((item) => (
      <Single key={item.id} note={item} removeNote={this.removeNote.bind(this)} />
    ));
  }

  render() {
    return (
      <div className="row">
        <ul>{this.renderItems()}</ul>
      </div>
    );
  }
}
