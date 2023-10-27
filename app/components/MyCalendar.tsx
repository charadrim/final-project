'use client';
import dayGridPlugin from '@fullcalendar/daygrid';
import FullCalendar from '@fullcalendar/react';
import React from 'react';

export default function MyCalendar() {
  const events = [
    {
      title: 'Event 1',
      date: '2023-10-31',
    },
    {
      title: 'Event 2',
      date: '2023-11-05',
    },
  ];

  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={events}
      />
    </div>
  );
}
