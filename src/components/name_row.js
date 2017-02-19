import React, { Component } from 'react';

class NameRow extends Component {

  render() {
    const title =
    (this.props.event.female) ?
      <span style={{ color: 'LightCoral' }}>{ this.props.event.EventTitle}</span>
      : <span style={{ color: 'SkyBlue' }}>{ this.props.event.EventTitle}</span>;

      const formatDate = (date) => {
        const monthNames = [
          'Jan', 'Feb', 'Mar',
          'Apr', 'May', 'Jun', 'Jul',
          'Aug', 'Sep', 'Oct',
          'Nov', 'Dec',
        ];

        const day = date.getDate();
        const monthIndex = date.getMonth();
        const year = date.getFullYear();

        return `${monthNames[monthIndex]} ${day}, ${year}`;
      };

      const date = new Date(this.props.event.EventStartDate);

    return (
      <tr>
        <td>{title}</td>
        <td>{formatDate(date)}</td>
      </tr>
    );
  }
}

export default NameRow;
