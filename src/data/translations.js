const translations = {
  en: {
    nav: {
      schedule: "Schedule",
      faq: "FAQ",
      eventInfo: "Event Info",
      rsvp: "RSVP"
    },

    hero: {
      title: "Jāņi 2026",
      greeting: "Dear friends and family!",
      description:
        "Celebrate the longest day of the year with food, music, bonfires and Latvian midsummer traditions.",
      date: "23 June 2026",
      location: "Latvia",
    },
    schedule: {
    title: "Schedule",
    items: [
        {
        time: "18:00",
        title: "Arrival",
        },
        {
        time: "19:00",
        title: "Flower crown workshop",
        },
        {
        time: "20:00",
        title: "Dinner",
        },
        {
        time: "21:30",
        title: "Traditional songs and dancing",
        },
        {
        time: "23:00",
        title: "Lighting the bonfire",
        },
        {
        time: "00:00",
        title: "Midnight swim",
        },
        {
        time: "04:30",
        title: "Sunrise",
        },
    ],
    },
    faq: {
    title: "Frequently Asked Questions",
    items: [
        {
        question: "What should I bring?",
        answer:
            "Comfortable clothes, food, drinks, and something warm for the evening.",
        },
        {
        question: "What happens if it rains?",
        answer:
            "The celebration continues. Covered areas will be available.",
        },
        {
        question: "Do I need to know Latvian traditions?",
        answer:
            "Not at all. The event is designed to introduce the traditions as we go.",
        },
    ],
    },
    eventInfo: {
        title: "Event Info",
        meetingPoint: "Meeting point",
        location: "Freedom Monument, Riga",
        mapLink: "View on map",
        contact: "Contact",
        email: "hello@jani2026.example",
    },
    rsvp: {
        title: "RSVP",
        name: "Name",
        guests: "Number of guests",
        dietaryNotes: "Dietary notes",
        stayUntilSunrise: "Will you stay until sunrise?",
        yes: "Yes",
        no: "No",
        submit: "Submit RSVP",
        errors: {
            nameRequired: "Name is required",
            guestsNegative: "Guest count cannot be negative",
        },
        success: "RSVP saved successfully!"
    },
  },

  lv: {
    nav: {
      schedule: "Dienas plāns",
      faq: "BUJ",
      eventInfo: "Informācija",
      rsvp: "RSVP"
    },

    hero: {
      title: "Jāņi 2026",
      greeting: "Dārgie draugi un ģimene!",
      description:
        "Svinēsim gada garākās dienas ar ēdienu, mūziku, ugunskuru un latviešu vasaras saulgriežu tradīcijām.",
      date: "2026. gada 23. jūnijs",
      location: "Latvija",
    },
    schedule: {
    title: "Dienas plāns",
    items: [
        {
        time: "18:00",
        title: "Ierašanās",
        },
        {
        time: "19:00",
        title: "Vainagu pīšana",
        },
        {
        time: "20:00",
        title: "Vakariņas",
        },
        {
        time: "21:30",
        title: "Dziesmas un dejas",
        },
        {
        time: "23:00",
        title: "Jāņugunskura iedegšana",
        },
        {
        time: "00:00",
        title: "Pusnakts pelde",
        },
        {
        time: "04:30",
        title: "Saullēkts",
        },
    ],
    },
    faq: {
    title: "Biežāk uzdotie jautājumi",
    items: [
        {
        question: "Ko man ņemt līdzi?",
        answer:
            "Ērtu un siltu apģērbu, ēdienu, dzērienus un mūzikas instrumentus.",
        },
        {
        question: "Kas notiek, ja līst?",
        answer:
            "Svinības turpinās! Būs arī vietas zem jumtiņa.",
        },
        {
        question: "Vai man jāzina latviešu tradīcijas?",
        answer:
            "Nē. Tradīcijas tiks iepazītas svinību laikā.",
        },
    ],
    },
    eventInfo: {
        title: "Pasākuma informācija",
        meetingPoint: "Tikšanās vieta",
        location: "Brīvības piemineklis, Rīga",
        mapLink: "Skatīt kartē",
        contact: "Kontakti",
        email: "hello@jani2026.piemērs",
    },
    rsvp: {
        title: "RSVP",
        name: "Vārds",
        guests: "Viesu skaits",
        dietaryNotes: "Diētas ierobežojumi",
        stayUntilSunrise: "Vai paliksi līdz saullēktam?",
        yes: "Jā",
        no: "Nē",
        submit: "Iesniegt RSVP",
        errors: {
            nameRequired: "Vārds ir obligāts",
            guestsNegative: "Viesu skaits nevar būt negatīvs",
        },
        success: "RSVP iesniegts!"
    },
    
  },
};

export default translations;