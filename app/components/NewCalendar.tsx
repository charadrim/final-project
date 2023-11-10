// 'use client';

// import 'react-big-calendar/lib/css/react-big-calendar.css';
// import moment from 'moment';
// import React, { useState } from 'react';
// import { Calendar, momentLocalizer } from 'react-big-calendar';

// export default function MyCalendar() {
//   const localizer = momentLocalizer(moment);

//   const [events, setEvents] = useState([
//     {
//       title: 'Event 1',
//       start: new Date('2023-10-31'),
//       end: new Date('2023-10-31'),
//       food: '',
//     },
//     {
//       title: 'Event 2',
//       start: new Date('2023-11-05'),
//       end: new Date('2023-11-05'),
//       food: '',
//     },
//   ]);

//   const updateFood = (event, food) => {
//     const updatedEvents = events.map((e) => {
//       if (e === event) {
//         return { ...e, food };
//       }
//       return e;
//     });
//     setEvents(updatedEvents);
//   };

//   const handleSelectSlot = ({ start }) => {
//     const date = moment(start).format('YYYY-MM-DD');
//     const food = prompt('What did you eat on ' + date + '?');
//     if (food) {
//       const newEvent = {
//         title: 'New Event',
//         start,
//         end: start,
//         food,
//       };
//       setEvents([...events, newEvent]);
//     }
//   };

//   return (
//     <div>
//       <Calendar
//         localizer={localizer}
//         events={events}
//         startAccessor="start"
//         endAccessor="end"
//         style={{ height: 500 }} // Adjust the height as needed
//         onSelectSlot={handleSelectSlot}
//         onSelectEvent={(event) => {
//           const food = prompt(
//             'What did you eat on ' +
//               moment(event.start).format('YYYY-MM-DD') +
//               '?',
//           );
//           if (food) {
//             updateFood(event, food);
//           }
//         }}
//       />
//     </div>
//   );
// }
