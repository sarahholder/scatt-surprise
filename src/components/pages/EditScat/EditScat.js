import React from 'react';

import './EditScat.scss';

class EditScat extends React.Component {
  render() {
    const editId = this.props
    return (
      <div className="EditScat">
        <h1>EditScat</h1>
        <h2>The Scat id is {editId}</h2>
      </div>
    );
  }
}

export default EditScat;
