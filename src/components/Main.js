import React, { Component } from 'react';
import FilterableNameTable from './filterable_name_table';
// import EVENTS_DATA from '../stores/events.json';

const EVENTS_DATA = [
   {
      male: false,
      female: true,
      EventTitle: 'Science & Environmental School Fair',
      EventStartDate: '2017-02-18 11:00:00',
      EventLocation: 'Off-Campus Event -  Virtual Graduate Fair',
      EventLink: 'https://www.usfca.edu/event/2017-03-29-0900/science-environmental-studies-virtual-grad-school-fair',
   },
   {
      male: false,
      female: true,
      EventTitle: 'Men\'s Baseball vs Northern Colorado',
      EventStartDate: '2017-02-18 17:00:00',
      EventLocation: 'Sobrato Center - MG Benedetti Diamond',
      EventLink: 'https://www.usfca.edu/event/2017-02-18-1430/baseball-vs-northern-colorado',
   },
   {
      male: true,
      female: false,
      EventTitle: 'Club Rifle Practice',
      EventStartDate: '2017-02-19 08:00:00',
      EventLocation: 'Koret Health and Recreation Center - KO L105 - Rifle Range',
      EventLink: 'https://www.usfca.edu/event/2017-02-22-1530/club-rifle-practice',
   },
   {
      male: false,
      female: true,
      EventTitle: 'Entrepreneurship and Innovation Information Session',
      EventLocation: 'University Center - UC 502 - Conference Room',
      EventStartDate: '2017-02-19 11:00:00',
      EventLink: 'https://www.usfca.edu/management/event/2017-03-03-0900/social-entrepreneurship-and-innovation-conference',
   },
   {
      male: true,
      female: false,
      EventTitle: 'Vinyasa Yoga',
      EventBuilding: 'Koret Health and Recreation Center',
      EventStartDate: '2017-02-19 16:00:00',
      EventLink: 'https://www.usfca.edu/event/2017-03-03-1500/vinyasa-yoga',
   },
   {
      male: false,
      female: true,
      EventTitle: 'La Mateada',
      EventLocation: 'Kalmanovitz Hall - KA 183 - Lounge',
      EventStartDate: '2017-02-20 08:00:00',
      EventLink: 'https://www.usfca.edu/event/2017-02-22-1630/la-mateada',
   },
   {
      male: true,
      female: false,
      EventTitle: 'Club Taekwondo Practice',
      EventBuilding: 'Koret Health and Recreation Center',
      EventStartDate: '2017-02-24 12:10:00',
      EventLink: 'https://www.usfca.edu/event/2017-02-22-1700/club-taekwondo-practice',
   },
   {
      male: true,
      female: false,
      EventTitle: 'Pleasanton Campus Information Session',
      EventLocation: 'Pleasanton Campus - EB 111 - Classroom',
      EventStartDate: '2017-02-24 16:45:00',
      EventLink: 'https://www.usfca.edu/event/2017-02-22-1730/pleasanton-campus-information-session',
   },
   {
      male: true,
      female: false,
      EventTitle: 'Master of Public Administration Information Session',
      EventLocation: 'Downtown Campus - SFH 153 - Classroom',
      EventStartDate: '2017-02-25 09:15:00',
      EventLink: 'https://www.usfca.edu/management/event/2017-02-22-1800/master-of-public-administration-information-session',
   },
   {
      male: false,
      female: true,
      EventTitle: 'School of Education Prospective Student Q&A Session',
      EventLocation: 'Education Building - ED 202 - Conference Room',
      EventStartDate: '2017-02-25 10:30:00',
      EventLink: 'https://www.usfca.edu/event/2017-02-22-1815/school-of-education-prospective-student-qa-session-0',
   },
   {
      male: true,
      female: false,
      EventTitle: 'How Integrated Approaches Improve Outcomes',
      EventLocation: 'Off-Campus Event -  Jillian&#039;s, San Francisco, CA 94103',
      EventStartDate: '2017-02-26 20:00:00',
      EventLink: 'https://www.usfca.edu/event/2017-02-22-1830/health-made-whole-how-integrated-approaches-improve-outcomes',
   },
   {
      male: false,
      female: true,
      EventTitle: 'Spanish Conversation Tables',
      EventLocation: 'Kalmanovitz Hall - KA 172 - Classroom',
      EventStartDate: '2017-02-27 06:00:00',
      EventLink: 'https://www.usfca.edu/event/2017-02-23-1145/spanish-conversation-tables',
   },
   {
      male: false,
      female: true,
      EventTitle: 'Writing for the Real World',
      EventLocation: 'Kalmanovitz Hall - KA 263 - Classroom',
      EventStartDate: '2017-02-27 10:45:00',
      EventLink: 'https://www.usfca.edu/event/2017-02-23-1145/14th-annual-writing-real-world-book-release',
   },
   {
      male: true,
      female: false,
      EventTitle: 'Managing your Midterms',
      EventLocation: 'McLaren Complex - MC 250',
      EventStartDate: '2017-02-27 14:15:00',
      EventLink: 'https://www.usfca.edu/event/2017-02-23-1150/whats-time-got-do-it-managing-your-midterms',
   },
   {
      male: true,
      female: false,
      EventTitle: 'Sport Management Info Webinar',
      EventLocation: 'Off-Campus Event -  Remote Webinar',
      EventStartDate: '2017-02-28 10:00:00',
      EventLink: 'https://www.usfca.edu/event/2017-02-23-1200/sport-management-info-webinar',
   },
   {
      male: true,
      female: false,
      EventTitle: 'University Ministry Vigil',
      EventLocation: 'Gleeson Library - GL Plaza',
      EventStartDate: '2017-02-28 18:00:00',
      EventLink: 'https://www.usfca.edu/event/2017-02-23-1200/university-ministry-vigil',
   },
   {
      male: false,
      female: true,
      EventTitle: 'Fair Use Workshop',
      EventLocation: 'Zief Law Library - ZL 201 -Terrace Room',
      EventStartDate: '2017-03-01 12:10:00',
      EventLink: 'https://www.usfca.edu/event/2017-02-23-1130/fair-use-week-2017-brown-bag-using-copyrighted-work-your-courses',
   },
   {
      male: true,
      female: false,
      EventTitle: 'Marketing Made Real',
      EventLocation: 'Kendrick Hall - KN 100 - Classroom',
      EventStartDate: '2017-03-01 12:15:00',
      EventLink: 'https://www.usfca.edu/management/2017-02-23-1245/marketing-speaker-series-scott-baker',
   },
   {
      male: false,
      female: true,
      EventTitle: 'USF Men\'s Basketball vs LMU Lions',
      EventLocation: 'Off-Campus Event -  McIntosh Room, University Hall, LMU Campus',
      EventStartDate: '2017-03-01 17:30:00',
      EventLink: 'https://www.usfca.edu/event/2017-02-23-1700/usf-mens-basketball-vs-lmu-lions-networking-pregame-reception',
   },
   {
      male: false,
      female: true,
      EventTitle: 'Deep Waters Pacific Film Series',
      EventStartDate: '2017-03-01 18:00:00',
      EventLocation: 'Fromm Hall - FR 125 - Maraschi Room',
      EventLink: 'https://www.usfca.edu/event/2017-03-01-1800/deep-waters-pacific-film-series',
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
