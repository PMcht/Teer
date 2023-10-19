import moment from 'moment'
import { useEffect } from 'react'

export let departsList = [
    {
      id: 0,
      golfName: "Baden",
      golfIMG: require('../../assets/Booking/Resa/1.jpg'),
      golfAddress: 'Baden, Bretagne',
      type: 'Parcours',
      date: "20 Oct.",
      hour: '14h00',
      with: ['Aymeric', 'Valentin', 'Ben'],
    },

    {
      id: 1,
      golfName: "St Laurent",
      golfIMG: require('../../assets/Booking/Resa/2.webp'),
      golfAddress: 'Ploemel, Bretagne',
      type: 'Cours',
      date: "24 Oct.",
      hour: '10h20',
      with: ['Arnaud'],
    },

    {
      id: 2,
      golfName: "St Laurent",
      golfIMG: require('../../assets/Booking/Resa/2.webp'),
      golfAddress: 'Ploemel, Bretagne',
      type: 'Parcours',
      date: "28 Oct.",
      hour: '15h40',
      with: ['Corentin'],
    },
  ]
  

export const sortDepart = () => {
  const filteredDepart = departsList.sort((a, b) => moment(a.date, 'DD-MMM').diff(moment(b.date, 'DD-MMM')))
  departsList = filteredDepart
}
