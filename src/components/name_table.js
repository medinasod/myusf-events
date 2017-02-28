import React, { Component } from 'react';
import NameRow from './name_row';

class NameTable extends Component {

  render() {
    const rows = [];
    const eventsList = this.props.events;

    // eventsList = this.props.events.slice(0, numberPerPage);
    eventsList.forEach((event) => {
      if (event.EventTitle.search(new RegExp(this.props.filterText, 'i')) === -1 ||
      (event.female && !this.props.isFemaleOnly)) { // Not female.
        return;
      }
      if (event.EventTitle.search(new RegExp(this.props.filterText, 'i')) === -1 ||
      (event.male && !this.props.isMaleOnly)) { // Not male.
        return;
      }
      rows.push(<NameRow
        event={event}
        key={event.EventTitle}
        changedLastName={this.props.changedLastName}
      />);
    });
    return (
      <div>
      <table>
        <thead>
          <tr>
            <th>Event</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
    );
  }
}

export default NameTable;
