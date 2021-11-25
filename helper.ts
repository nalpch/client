import * as chai from 'chai'
import * as chaiDatetime from 'chai-datetime'

chai.use(chaiDatetime)
import * as fetchMock from 'fetch-mock'

const vendor = {
  tacs: [
    {
      terms: 'die AGB von Nalp.ch',
      url: 'https://nalp.ch/tos',
      required: true,
      id: 'NALP_TAC',
    },
  ],
  serviceGroups: [
    {
      name: 'What should we do?',
      services: [
        {
          name: 'Tech Talk',
          image:
            'public/vendor_6325b3a8-be1a-4042-a831-fc67c7335ae5/services/9538c40f-db41-4eaa-aa8b-4dc071eaa49b.jpg',
          durations: [
            {
              duration: 15,
              price: null,
              currency: null,
              id: 44,
              requiresPayment: false,
              primary: false,
              locationType: 'VIRTUAL',
            },
            {
              duration: 30,
              price: null,
              currency: null,
              id: 42,
              requiresPayment: false,
              primary: false,
              locationType: 'VIRTUAL',
            },
            {
              duration: 60,
              price: null,
              currency: null,
              id: 43,
              requiresPayment: false,
              primary: true,
              locationType: 'VIRTUAL',
            },
            {
              duration: 120,
              price: null,
              currency: null,
              id: 98,
              requiresPayment: false,
              primary: false,
              locationType: 'VIRTUAL',
            },
          ],
          description:
            'Get some private time with me and talk about your tech challenges, ideas or dreams!',
          descriptionHtml:
            '<p>Get some private time with me and talk about your tech challenges, ideas or dreams!</p>',
          id: 75,
          serviceGroup: 51,
          vendor: 50,
          calendars: [55],
          order: 0,
        },
        {
          name: 'Coffee & Cake',
          image:
            'public/vendor_6325b3a8-be1a-4042-a831-fc67c7335ae5/services/4553a7dc-89a3-4599-949c-6aaaa58f2d01.jpg',
          durations: [
            {
              duration: 30,
              price: null,
              currency: null,
              id: 71,
              requiresPayment: false,
              primary: false,
              locationType: 'VIRTUAL',
            },
            {
              duration: 60,
              price: null,
              currency: null,
              id: 72,
              requiresPayment: false,
              primary: false,
              locationType: 'VIRTUAL',
            },
            {
              duration: 120,
              price: null,
              currency: null,
              id: 74,
              requiresPayment: false,
              primary: false,
              locationType: 'VIRTUAL',
            },
          ],
          description:
            "Let's have a chat online or in person. I usually offer coffe and cake if I have some around :-)",
          descriptionHtml:
            "<p>Let's have a chat online or in person. I usually offer coffe and cake if I have some around :-)</p>",
          id: 76,
          serviceGroup: 51,
          vendor: 50,
          calendars: [55],
          order: 1,
        },
        {
          name: 'Call',
          image:
            'public/vendor_6325b3a8-be1a-4042-a831-fc67c7335ae5/services/66c35684-3317-4259-a3d7-6c57b04387f0.jpg',
          durations: [
            {
              duration: 30,
              price: null,
              currency: null,
              id: 157,
              requiresPayment: false,
              primary: false,
              locationType: 'TELEPHONE',
            },
          ],
          description:
            "Let's talk! No travel nor preparation - just a pure call.",
          descriptionHtml:
            "<p>Let's talk! No travel nor preparation - just a pure call.</p>",
          id: 131,
          serviceGroup: 51,
          vendor: 50,
          calendars: [55],
          order: 4,
        },
      ],
      id: 51,
      vendor: 50,
      order: 0,
    },
  ],
  calendars: [
    {
      name: 'Martin Eigenmann',
      services: [75, 76, 131],
      id: 55,
      description:
        'I am a passionate technologist with over 10 years of experience in infrastructure administration, web development and problem-solving. I love listening to and discussing other people challenges and I beleave that technology should be less difficult than it is right now.',
      descriptionHtml:
        '<p>I am a passionate technologist with over 10 years of experience in infrastructure administration, web development and problem-solving. I love listening to and discussing other people challenges and I beleave that technology should be less difficult than it is right now.</p>',
      image:
        'public/vendor_6325b3a8-be1a-4042-a831-fc67c7335ae5/calendars/4f4efb2d-f9cc-4a43-97dd-0a2_XFiooXQ.png',
    },
  ],
  name: 'Martin Eigenmann',
  street: 'Talstrasse 4',
  city: 'St. Gallen',
  zip: '9000',
  country: 'CH',
  phone: '+41 78 697 35 14',
  email: 'hallo@eigenmannmartin.ch',
  url: '',
  colorDark: '#088BA9',
  colorMedium: '#4CAFC6',
  colorLight: '#C0EAE4',
  logo:
    'public/vendor_6325b3a8-be1a-4042-a831-fc67c7335ae5/logo/38464467-fb73-4daf-aadd-41cbbea0f351.png',
  slug: 'martin',
  maintenance: null,
  pageIntro: '',
  pageTitle: 'Book Me',
  pageIntroHtml: '',
  googleAddressLink:
    'https://www.google.com/maps/search/?api=1&query=Martin+Eigenmann%2BTalstrasse+4%2B9000',
  demo: false,
  pricing: '',
  anonymousBookings: true,
  stripePublishableKey: null,
  timeslotProposal: true,
  specifiedCalendarOnly: false,
  bookingNoteMessage: null,
}

const timeslots = [
  {
    id: 'NzUtXy00My0xNjM3NzQzNTAwLUJPT0s=',
    start: '2021-11-24T09:45:00+01:00',
    end: '2021-11-24T10:45:00+01:00',
    duration: 60,
    durationId: 43,
    service: 75,
    calendar: null,
    bookable: true,
    requestable: false,
    anonymous: true,
    prepaid: false,
    price: null,
    currency: null,
    preferred: false,
    mode: 'BOOK',
    date: '2021-11-24',
    locationType: 'VIRTUAL',
  },
  {
    id: 'NzUtXy00My0xNjM3NzQ0NDAwLUJPT0s=',
    start: '2021-11-24T10:00:00+01:00',
    end: '2021-11-24T11:00:00+01:00',
    duration: 60,
    durationId: 43,
    service: 75,
    calendar: null,
    bookable: true,
    requestable: false,
    anonymous: true,
    prepaid: false,
    price: null,
    currency: null,
    preferred: false,
    mode: 'BOOK',
    date: '2021-11-24',
    locationType: 'VIRTUAL',
  },
]

const appointment = {
  created: '2021-11-23T18:38:28.620462Z',
  note: '',
  start: '2021-11-26T13:15:00Z',
  end: '2021-11-26T14:15:00Z',
  id: '6c505d87-a39c-494d-888e-e0fed165b3d2',
  service: { name: 'Tech Talk' },
  calendar: {
    chosen: false,
    uuid: 'e9a12663-01c4-4dd1-9cc1-0ef735bdf40a',
    name: 'Martin Eigenmann',
    image:
      'public/vendor_6325b3a8-be1a-4042-a831-fc67c7335ae5/calendars/4f4efb2d-f9cc-4a43-97dd-0a2_XFiooXQ.png',
  },
  cancelable: true,
  canceled: false,
  variant: 'BOOK',
  accepted: true,
  rejected: false,
  duration: 60,
  locationType: 'VIRTUAL',
  email: 'customeremail@gmail.com',
  tel: '',
}

const canceledAppointment = {
  created: '2021-11-23T18:38:28.620462Z',
  note: '',
  start: '2021-11-26T13:15:00Z',
  end: '2021-11-26T14:15:00Z',
  id: '6c505d87-a39c-494d-888e-e0fed165b3d2',
  service: { name: 'Tech Talk' },
  calendar: {
    chosen: false,
    uuid: 'e9a12663-01c4-4dd1-9cc1-0ef735bdf40a',
    name: 'Martin Eigenmann',
    image:
      'public/vendor_6325b3a8-be1a-4042-a831-fc67c7335ae5/calendars/4f4efb2d-f9cc-4a43-97dd-0a2_XFiooXQ.png',
  },
  cancelable: false,
  canceled: true,
  variant: 'BOOK',
  accepted: true,
  rejected: false,
  duration: 60,
  locationType: 'VIRTUAL',
  email: 'customeremail@gmail.com',
  tel: '',
}

fetchMock.mock(
  {
    url: 'https://api.nalp.ch/api/v2/vendors/martin/book/',
  },
  appointment,
)
fetchMock.mock(
  {
    url:
      'https://api.nalp.ch/api/v2/appointments/6c505d87-a39c-494d-888e-e0fed165b3d2/cancel/',
  },
  canceledAppointment,
)
fetchMock.mock(
  {
    url:
      'https://api.nalp.ch/api/v2/vendors/martin/timeslots/?duration=43&service=75',
  },
  timeslots,
)
fetchMock.mock(
  {
    url: 'https://api.nalp.ch/api/v2/vendors/martin/',
  },
  vendor,
)
