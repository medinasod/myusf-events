import React, { Component } from 'react';
import FilterableNameTable from './filterable_name_table';
// import EVENTS_DATA from '../stores/events.json';

const EVENTS_DATA = [
   {
      male: false,
      female: true,
      EventTitle: 'Science & Environmental School Fair',
      EventStartDate: '2017-02-18 11:00:00',
   },
   {
      male: false,
      female: true,
      EventTitle: 'Men\'s Baseball vs Northern Colorado',
      EventStartDate: '2017-02-18 17:00:00',
   },
   {
      male: true,
      female: false,
      EventTitle: 'Club Rifle Practice',
      EventStartDate: '2017-02-19 08:00:00',
   },
   {
      male: false,
      female: true,
      EventTitle: 'Entrepreneurship and Innovation Information Session',
      EventStartDate: '2017-02-19 11:00:00',
   },
   {
      male: true,
      female: false,
      EventTitle: 'Vinyasa Yoga',
      EventStartDate: '2017-02-19 16:00:00',
   },
   {
      male: false,
      female: true,
      EventTitle: 'La Mateada',
      EventStartDate: '2017-02-20 08:00:00',
   },
   {
      male: true,
      female: false,
      EventTitle: 'Club Taekwondo Practice',
      EventStartDate: '2017-02-24 12:10:00',
   },
   {
      male: true,
      female: false,
      EventTitle: 'Pleasanton Campus Information Session',
      EventStartDate: '2017-02-24 16:45:00',
   },
   {
      male: true,
      female: false,
      EventTitle: 'Master of Public Administration Information Session',
      EventStartDate: '2017-02-25 09:15:00',
   },
   {
      male: false,
      female: true,
      EventTitle: 'School of Education Prospective Student Q&A Session',
      EventStartDate: '2017-02-25 10:30:00',
   },
   {
      male: true,
      female: false,
      EventTitle: 'How Integrated Approaches Improve Outcomes',
      EventStartDate: '2017-02-26 20:00:00',
   },
   {
      male: false,
      female: true,
      EventTitle: 'Spanish Conversation Tables',
      EventStartDate: '2017-02-27 06:00:00',
   },
   {
      male: false,
      female: true,
      EventTitle: 'Writing for the Real World',
      EventStartDate: '2017-02-27 10:45:00',
   },
   {
      male: true,
      female: false,
      EventTitle: 'Managing your Midterms',
      EventStartDate: '2017-02-27 14:15:00',
   },
   {
      male: true,
      female: false,
      EventTitle: 'Sport Management Info Webinar',
      EventStartDate: '2017-02-28 10:00:00',
   },
   {
      male: true,
      female: false,
      EventTitle: 'University Ministry Vigil',
      EventStartDate: '2017-02-28 18:00:00',
   },
   {
      male: false,
      female: true,
      EventTitle: 'Fair Use Workshop',
      EventStartDate: '2017-03-01 12:10:00',
   },
   {
      male: true,
      female: false,
      EventTitle: 'Marketing Made Real',
      EventStartDate: '2017-03-01 12:15:00',
   },
   {
      male: false,
      female: true,
      EventTitle: 'USF Men\'s Basketball vs LMU Lions',
      EventStartDate: '2017-03-01 17:30:00',
   },

];

require('normalize.css/normalize.css');
require('../styles/App.css');

class AppComponent extends Component {
  render() {
    return (
      <FilterableNameTable events={EVENTS_DATA} />
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
