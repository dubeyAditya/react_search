
function getDate(day) {
  let today = new Date();
  let date = new Date().getDate() + day;
  let month = today.getMonth();
  month = month < 9 ? `0${month + 1}` : month + 1;
  return `${date}-${month}-${today.getFullYear()}`
}
export default [{
  name: "AI-101",
  fare: 5000,
  origin: "Pune",
  dest: "Delhi",
  departs: "1:00 AM",
  arrives: "12:30 PM",
  doj: "03-11-2020",
  flightClass: [{
    title: 'Baisc',
    fare: '125',
    seats: 6
  },
  {
    title: 'Main',
    fare: '225',
    seats: 6
  },
  {
    title: 'Economy',
    fare: '325',
    seats: 6
  }]
},
{
  name: "AI-102",
  fare: 4000,
  origin: "Pune",
  dest: "Delhi",
  departs: "1:00 AM",
  arrives: "12:30 PM",
  doj: "01-12-2020",
  flightClass: [{
    title: 'Baisc',
    fare: '125',
    seats: 6
  },
  {
    title: 'Main',
    fare: '225',
    seats: 6
  },
  {
    title: 'Economy',
    fare: '325',
    seats: 6
  }]
},
{
  name: "AI-103",
  fare: 3000,
  origin: "Delhi",
  dest: "Pune",
  departs: "1:00 AM",
  arrives: "12:30 PM",
  doj: "02-11-2020",
  flightClass: [{
    title: 'Baisc',
    fare: '125',
    seats: 6
  },
  {
    title: 'Main',
    fare: '225',
    seats: 6
  },
  {
    title: 'Economy',
    fare: '325',
    seats: 6
  }]
},
{
  name: "AI-104",
  fare: 4500,
  origin: "Pune",
  dest: "Delhi",
  departs: "2:00 AM",
  arrives: "5:30 AM",
  doj: "11-11-2020",
  flightClass: [{
    title: 'Baisc',
    fare: '125',
    seats: 6
  },
  {
    title: 'Main',
    fare: '225',
    seats: 6
  },
  {
    title: 'Economy',
    fare: '325',
    seats: 6
  }]
},
{
  name: "AI-105",
  fare: 3000,
  origin: "Delhi",
  dest: "Pune",
  departs: "4:00 PM",
  arrives: "9:00 PM",
  doj: "18-10-2020",
  flightClass: [{
    title: 'Baisc',
    fare: '125',
    seats: 6
  },
  {
    title: 'Main',
    fare: '225',
    seats: 6
  },
  {
    title: 'Economy',
    fare: '325',
    seats: 6
  }]
},
{
  name: "AI-106",
  fare: 1500,
  origin: "Pune",
  dest: "Delhi",
  departs: "9:00 AM",
  arrives: "12:30 PM",
  doj: "25-12-2020",
  flightClass: [{
    title: 'Baisc',
    fare: '125',
    seats: 6
  },
  {
    title: 'Main',
    fare: '225',
    seats: 6
  },
  {
    title: 'Economy',
    fare: '325',
    seats: 6
  }]
},
{
  name: "AI-107",
  fare: 2500,
  origin: "Delhi",
  dest: "Pune",
  departs: "10:00 AM",
  arrives: "1:30 PM",
  doj: "01-01-2021",
  flightClass: [{
    title: 'Baisc',
    fare: '125',
    seats: 6
  },
  {
    title: 'Main',
    fare: '225',
    seats: 6
  },
  {
    title: 'Economy',
    fare: '325',
    seats: 6
  }]
},
{
  name: "AI-108",
  fare: 5000,
  origin: "Delhi",
  dest: "Pune",
  departs: "8:00 PM",
  arrives: "10:30 PM",
  doj: getDate(2),
  flightClass: [{
    title: 'Baisc',
    fare: '125',
    seats: 2,
  },
  {
    title: 'Main',
    fare: '225',
    seats: 3
  },
  {
    title: 'Economy',
    fare: '325',
    seats: 4
  }]
},
{
  name: "AI-109",
  fare: 6500,
  origin: "Pune",
  dest: "Delhi",
  departs: "10:00 AM",
  arrives: "1:30 PM",
  doj: getDate(2),
  flightClass: [{
    title: 'Baisc',
    fare: '125',
    seats: 5
  },
  {
    title: 'Main',
    fare: '225',
    seats: 6
  },
  {
    title: 'Economy',
    fare: '325',
    seats: 6
  }]
},
{
  name: "AI-110",
  fare: 8000,
  origin: "Delhi",
  dest: "Pune",
  departs: "10:00 AM",
  arrives: "1:30 PM",
  doj: getDate(2),
  flightClass: [{
    title: 'Baisc',
    fare: '125',
    seats: 6
  },
  {
    title: 'Main',
    fare: '225',
    seats: 2
  },
  {
    title: 'Economy',
    fare: '325',
    seats: 4
  }]
},
{
  name: "AI-128",
  fare: 9000,
  origin: "Delhi",
  dest: "Pune",
  departs: "10:00 AM",
  arrives: "1:30 PM",
  doj: getDate(2),
  flightClass: [{
    title: 'Baisc',
    fare: '125',
    seats: 2
  },
  {
    title: 'Main',
    fare: '225',
    seats: 6
  },
  {
    title: 'Economy',
    fare: '325',
    seats: 7
  }]
},
{
  name: "AI-111",
  fare: 2800,
  origin: "Pune",
  dest: "Delhi",
  departs: "8:00 AM",
  arrives: "10:30 AM",
  doj: getDate(1),
  flightClass: [{
    title: 'Baisc',
    fare: '125',
    seats: 8
  },
  {
    title: 'Main',
    fare: '225',
    seats: 5
  },
  {
    title: 'Economy',
    fare: '325',
    seats: 3
  }]
},
{
  name: "AI-112",
  fare: 3200,
  origin: "Delhi",
  dest: "Pune",
  departs: "8:00 PM",
  arrives: "10:30 PM",
  doj: getDate(1),
  flightClass: [{
    title: 'Baisc',
    fare: '125',
    seats: 8
  },
  {
    title: 'Main',
    fare: '225',
    seats: 9
  },
  {
    title: 'Economy',
    fare: '325',
    seats: 9
  }]
},
{
  name: "AI-113",
  fare: 4500,
  origin: "Pune",
  dest: "Delhi",
  departs: "10:00 AM",
  arrives: "1:30 PM",
  doj: getDate(1),
  flightClass: [{
    title: 'Baisc',
    fare: '125',
    seats: 6
  },
  {
    title: 'Main',
    fare: '225',
    seats: 54
  },
  {
    title: 'Economy',
    fare: '325',
    seats: 87
  }]
},
{
  name: "AI-114",
  fare: 2500,
  origin: "Pune",
  dest: "Delhi",
  departs: "8:00 AM",
  arrives: "10:30 AM",
  doj: getDate(2),
  seats: 65
},
{
  name: "AI-115",
  fare: 5700,
  origin: "Delhi",
  dest: "Pune",
  departs: "10:00 AM",
  arrives: "1:30 PM",
  doj: getDate(1),
  flightClass: [{
    title: 'Baisc',
    fare: '125',
    seats: 7
  },
  {
    title: 'Main',
    fare: '225',
    seats: 4
  },
  {
    title: 'Economy',
    fare: '325',
    seats: 8
  }]
},
{
  name: "AI-114",
  fare: 5000,
  origin: "Pune",
  dest: "Delhi",
  departs: "8:00 AM",
  arrives: "10:30 AM",
  doj: getDate(3),
  flightClass: [{
    title: 'Baisc',
    fare: '125',
    seats: 67
  },
  {
    title: 'Main',
    fare: '225',
    seats: 69
  },
  {
    title: 'Economy',
    fare: '325',
    seats: 65
  }]
},
{
  name: "AI-115",
  fare: 6000,
  origin: "Delhi",
  dest: "Pune",
  departs: "10:00 AM",
  arrives: "1:30 PM",
  doj: getDate(3),
  flightClass: [{
    title: 'Baisc',
    fare: '125',
    seats: 5
  },
  {
    title: 'Main',
    fare: '225',
    seats: 9
  },
  {
    title: 'Economy',
    fare: '325',
    seats: 9
  }]
},
{
  name: "AI-114",
  fare: 4000,
  origin: "Pune",
  dest: "Delhi",
  departs: "8:00 AM",
  arrives: "10:30 AM",
  doj: getDate(4),
  flightClass: [{
    title: 'Baisc',
    fare: '125',
    seats: 90
  },
  {
    title: 'Main',
    fare: '225',
    seats: 76
  },
  {
    title: 'Economy',
    fare: '325',
    seats: 43
  }]
},
{
  name: "AI-115",
  fare: 5000,
  origin: "Delhi",
  dest: "Pune",
  departs: "10:00 AM",
  arrives: "1:30 PM",
  doj: getDate(4),
  flightClass: [{
    title: 'Baisc',
    fare: '125',
    seats: 34
  },
  {
    title: 'Main',
    fare: '225',
    seats: 23
  },
  {
    title: 'Economy',
    fare: '325',
    seats: 10
  }]
}
];