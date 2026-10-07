import {
  CalendarDays,
  Users,
  Euro,
  MessageSquare,
  Phone
} from "lucide-react";


export const metricsData = [
  {
    id: "reservations",
    title: "Reservations",
    value: "68",
    icon: CalendarDays,
  },
  {
    id: "guests",
    title: "Guests",
    value: "272",
    icon: Users,
  },
  {
    id: "messages",
    title: "Messages",
    value: "270",
    icon: MessageSquare,
  },
   {
    id: "calls",
    title: "Calls handled",
    value: "540",
    icon: Phone,
  },
  {
    id: "reservation-value",
    title: "Reservation value",
    value: "€13,600",
    icon: Euro,
    highlight: true,
  },
];




export const activityData = [
  {
    day: "Mon",
    calls: 42,
    reservations: 8,
  },
  {
    day: "Tue",
    calls: 51,
    reservations: 11,
  },
  {
    day: "Wed",
    calls: 46,
    reservations: 9,
  },
  {
    day: "Thu",
    calls: 63,
    reservations: 14,
  },
  {
    day: "Fri",
    calls: 71,
    reservations: 17,
  },
  {
    day: "Sat",
    calls: 84,
    reservations: 21,
  },
  {
    day: "Sun",
    calls: 67,
    reservations: 16,
  },
];


export const activities = [

  {
    id: 1,
    title: "Reservation confirmed",
    detail: "4 guests · 19:30",
  },

  {
    id: 2,
    title: "Call handled",
    detail: "2m 34s · Reservation made",
  },

  {
    id: 3,
    title: "Reservation cancelled",
    detail: "2 guests · 20:00",
  },

  {
    id: 4,
    title: "Guest message",
    detail: "Asked about availability",
  },

];
