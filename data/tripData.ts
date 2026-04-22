import { ItineraryDay, Location, Alert, Expense } from "@/types";

export const locations: Location[] = [
  {
    id: "loc_1",
    city: "London",
    country: "UK",
    places: [
      { name: "Aunt's House (Stay)", address: "29 Leeside Cres, London NW11 0DA", category: "Accommodation" },
      { name: "Golders Green Station", address: "North End Rd, London NW11 7RN", category: "Transit" },
      { name: "St Pancras International", address: "Euston Rd, London N1C 4QP", category: "Transit" },
      { name: "The Design Museum", address: "224-238 Kensington High St, London W8 6AG", category: "Museum" },
      { name: "Barbican Conservatory", address: "Silk St, London EC2Y 8DS", category: "Sights" },
      { name: "Jazz Cafe", address: "5 Parkway, London NW1 7PG", category: "Music" },
      { name: "Labour and Wait", address: "85 Redchurch St, London E2 7DJ", category: "Shopping" },
      { name: "Ronnie Scott's", address: "47 Frith St, London W1D 4HT", category: "Music" },
      { name: "St. John", address: "26 St John St, London EC1M 4AY", category: "Food" },
    ],
  },
  {
    id: "loc_2",
    city: "Frankfurt",
    country: "Germany",
    places: [
      { name: "Frankfurt (Main) Hauptbahnhof", address: "Am Hauptbahnhof, 60329 Frankfurt am Main", category: "Transit" },
      { name: "The Pure (Design Hotel)", address: "Niddastraße 86, 60329 Frankfurt am Main", category: "Accommodation" },
      { name: "Manufactum Warenhaus", address: "Bockenheimer Anlage 49-50, 60322 Frankfurt", category: "Shopping" },
      { name: "Kleinmarkthalle", address: "Hasengasse 5-7, 60311 Frankfurt am Main", category: "Food" },
      { name: "Jazzkeller", address: "Kleine Bockenheimer Str. 18a, 60313 Frankfurt", category: "Music" },
    ],
  },
  {
    id: "loc_3",
    city: "Berlin",
    country: "Germany",
    places: [
      { name: "Berlin Hauptbahnhof", address: "Europaplatz 1, 10557 Berlin", category: "Transit" },
      { name: "25hours Hotel Bikini Berlin", address: "Budapester Str. 40, 10787 Berlin", category: "Accommodation" },
      { name: "Voo Store", address: "Oranienstraße 24, 10999 Berlin", category: "Shopping" },
      { name: "Markthalle Neun", address: "Eisenbahnstraße 42/43, 10997 Berlin", category: "Food" },
      { name: "do you read me?!", address: "Auguststraße 28, 10117 Berlin", category: "Shopping" },
      { name: "A-Trane", address: "Bleibtreustraße 1, 10623 Berlin", category: "Music" },
      { name: "Tempelhofer Feld", address: "Tempelhofer Damm, 12101 Berlin", category: "Sights" },
    ],
  },
  {
    id: "loc_4",
    city: "Copenhagen",
    country: "Denmark",
    places: [
      { name: "Copenhagen Airport (CPH)", address: "Lufthavnsboulevarden 6, 2770 Kastrup", category: "Transit" },
      { name: "Coco Hotel", address: "Vesterbrogade 41, 1620 København", category: "Accommodation" },
      { name: "HAY House", address: "Østergade 61, 2, 1100 København", category: "Shopping" },
      { name: "Studio Arhoj", address: "Skindergade 7, st, 1159 København", category: "Shopping" },
      { name: "TorvehallerneKBH", address: "Frederiksborggade 21, 1362 København", category: "Food" },
      { name: "Jazzhus Montmartre", address: "Store Regnegade 19A, 1110 København", category: "Music" },
      { name: "La Fontaine", address: "Kompagnistræde 11, 1208 København", category: "Music" },
    ],
  },
];

export const itinerary: ItineraryDay[] = [
  {
    date: "2026-04-25",
    city: "London",
    country: "UK",
    events: [
      { id: "e1", time: "Afternoon", title: "Arrive in London", location: "Aunt's House", type: "Check-in", address: "29 Leeside Cres, London NW11 0DA" },
      { id: "e2", time: "Evening", title: "Settle in & rest", location: "Golders Green", type: "Free" },
    ],
  },
  {
    date: "2026-04-26",
    city: "London",
    country: "UK",
    events: [
      { id: "e_r1", time: "07:30", title: "Morning run", location: "Golders Hill Park, NW11", type: "Activity" },
      { id: "e_c1", time: "09:00", title: "Flat white at Ginger & White", location: "Hampstead, NW3", type: "Food", address: "4a-5a Perrin's Court, London NW3 1QS" },
      { id: "e3", time: "11:00", title: "The Design Museum", location: "Kensington High St", type: "Museum", address: "224-238 Kensington High St, London W8 6AG" },
      { id: "e4", time: "14:00", title: "Labour and Wait", location: "Redchurch St, Shoreditch", type: "Shopping", address: "85 Redchurch St, London E2 7DJ" },
      { id: "e5", time: "20:00", title: "Jazz Cafe", location: "Camden", type: "Music", address: "5 Parkway, London NW1 7PG" },
    ],
  },
  {
    date: "2026-04-27",
    city: "London",
    country: "UK",
    events: [
      { id: "e_r2", time: "07:30", title: "Morning run", location: "Regent's Park, NW1", type: "Activity" },
      { id: "e6", time: "10:00", title: "Barbican Conservatory", location: "Barbican, EC2", type: "Sights", address: "Silk St, London EC2Y 8DS" },
      { id: "e7", time: "13:00", title: "Lunch at St. John", location: "Clerkenwell", type: "Food", address: "26 St John St, London EC1M 4AY" },
      { id: "e_rd1", time: "15:30", title: "Reading hour", location: "Barbican Library, EC2", type: "Free", address: "Silk St, London EC2Y 8DS" },
      { id: "e_s1", time: "18:30", title: "Evening with Brendan", location: "Soho, W1", type: "Social", notes: "Drinks & dinner — confirm spot with Brendan" },
      { id: "e8", time: "21:00", title: "Ronnie Scott's", location: "Soho, W1", type: "Music", address: "47 Frith St, London W1D 4HT", notes: "Brendan joining" },
    ],
  },
  {
    date: "2026-04-28",
    city: "London",
    country: "UK",
    events: [
      { id: "e9", time: "10:00", title: "Explore Notting Hill", location: "Portobello Road, W11", type: "Sights" },
      { id: "e_c2", time: "11:30", title: "Coffee at Books for Cooks", location: "Notting Hill, W11", type: "Food", address: "4 Blenheim Crescent, London W11 1NN" },
      { id: "e_m1", time: "14:00", title: "Tate Modern", location: "Bankside, SE1", type: "Museum", address: "Bankside, London SE1 9TG" },
      { id: "e10", time: "17:00", title: "Free afternoon", location: "Central London", type: "Free" },
    ],
  },
  {
    date: "2026-04-29",
    city: "London",
    country: "UK",
    events: [
      { id: "e_rd2", time: "08:30", title: "Morning reading & coffee", location: "Aunt's House", type: "Free" },
      { id: "e11", time: "11:00", title: "Pack & prep for travel", location: "Aunt's House", type: "Free" },
      { id: "e12", time: "Evening", title: "Farewell dinner", location: "London", type: "Food" },
    ],
  },
  {
    date: "2026-04-30",
    city: "Frankfurt",
    country: "Germany",
    events: [
      { id: "e13", time: "11:15", title: "Flight to Frankfurt", location: "London Heathrow — Terminal 5", type: "Transit", address: "Heathrow Airport Terminal 5, Longford, Hounslow TW6 2GA", notes: "Terminal 5 — arrive by 09:15 for check-in" },
      { id: "e14", time: "13:55", title: "Arrive Frankfurt (FRA)", location: "Frankfurt Airport — Terminal 2", type: "Transit", address: "Frankfurt Airport, 60547 Frankfurt am Main" },
      { id: "e15", time: "15:00", title: "Check in — The Pure", location: "Niddastraße 86, Frankfurt", type: "Check-in", address: "Niddastraße 86, 60329 Frankfurt am Main" },
      { id: "e_c3", time: "16:30", title: "Coffee at Café Metropol", location: "Weckmarkt 13, Frankfurt", type: "Food", address: "Weckmarkt 13, 60311 Frankfurt am Main" },
      { id: "e16", time: "19:00", title: "Museumsufer Walk", location: "Museumsufer, Sachsenhausen", type: "Sights" },
    ],
  },
  {
    date: "2026-05-01",
    city: "Frankfurt",
    country: "Germany",
    events: [
      { id: "e_r3", time: "07:00", title: "Morning run along the Main", location: "Sachsenhausen riverbank", type: "Activity" },
      { id: "e_c4", time: "09:00", title: "Coffee at Café Laumer", location: "Bockenheim, Frankfurt", type: "Food", address: "Bockenheimer Landstraße 67, 60325 Frankfurt" },
      { id: "e17", time: "10:30", title: "Manufactum Warenhaus", location: "Bockenheimer Anlage", type: "Shopping", address: "Bockenheimer Anlage 49-50, 60322 Frankfurt" },
      { id: "e_m2", time: "12:00", title: "Städel Museum", location: "Schaumainkai 63, Sachsenhausen", type: "Museum", address: "Schaumainkai 63, 60596 Frankfurt am Main", notes: "May Day — confirm opening hours" },
      { id: "e18", time: "14:30", title: "Kleinmarkthalle", location: "Hasengasse 5-7", type: "Food", address: "Hasengasse 5-7, 60311 Frankfurt am Main" },
      { id: "e19", time: "22:00", title: "Jazzkeller", location: "Kleine Bockenheimer Str.", type: "Music", address: "Kleine Bockenheimer Str. 18a, 60313 Frankfurt" },
    ],
  },
  {
    date: "2026-05-02",
    city: "Berlin",
    country: "Germany",
    events: [
      { id: "e20", time: "08:30", title: "ICE Train to Berlin", location: "Frankfurt (Main) Hauptbahnhof", type: "Transit", address: "Am Hauptbahnhof, 60329 Frankfurt am Main", notes: "~2h journey" },
      { id: "e21", time: "11:00", title: "Arrive Berlin Hbf", location: "Berlin Hauptbahnhof", type: "Transit", address: "Europaplatz 1, 10557 Berlin" },
      { id: "e22", time: "12:00", title: "Check in — 25hours Hotel Bikini", location: "Budapester Str. 40, Berlin", type: "Check-in", address: "Budapester Str. 40, 10787 Berlin" },
      { id: "e_c5", time: "13:30", title: "Coffee at The Barn", location: "Auguststraße 58, Mitte", type: "Food", address: "Auguststraße 58, 10119 Berlin" },
      { id: "e23", time: "15:00", title: "Explore Mitte", location: "Berlin Mitte", type: "Sights" },
    ],
  },
  {
    date: "2026-05-03",
    city: "Berlin",
    country: "Germany",
    events: [
      { id: "e_r4", time: "07:00", title: "Morning run", location: "Tiergarten, Berlin", type: "Activity" },
      { id: "e_c6", time: "09:00", title: "Coffee at Five Elephant", location: "Kreuzberg", type: "Food", address: "Reichenberger Str. 101, 10999 Berlin" },
      { id: "e24", time: "10:30", title: "do you read me?!", location: "Auguststraße 28, Mitte", type: "Shopping", address: "Auguststraße 28, 10117 Berlin" },
      { id: "e25", time: "12:30", title: "Markthalle Neun", location: "Kreuzberg", type: "Food", address: "Eisenbahnstraße 42/43, 10997 Berlin" },
      { id: "e26", time: "15:00", title: "Tempelhofer Feld", location: "Tempelhof", type: "Sights", address: "Tempelhofer Damm, 12101 Berlin" },
    ],
  },
  {
    date: "2026-05-04",
    city: "Berlin",
    country: "Germany",
    events: [
      { id: "e_rd3", time: "09:00", title: "Morning reading", location: "25hours Hotel Bikini — rooftop", type: "Free", notes: "Good spot with Tiergarten view" },
      { id: "e27", time: "14:00", title: "Voo Store", location: "Oranienstraße 24, Kreuzberg", type: "Shopping", address: "Oranienstraße 24, 10999 Berlin" },
      { id: "e28", time: "21:30", title: "A-Trane Jazz Club", location: "Bleibtreustraße 1, Charlottenburg", type: "Music", address: "Bleibtreustraße 1, 10623 Berlin" },
    ],
  },
  {
    date: "2026-05-05",
    city: "Copenhagen",
    country: "Denmark",
    events: [
      { id: "e29", time: "08:00", title: "Flight to Copenhagen", location: "Berlin Brandenburg Airport (BER)", type: "Transit", notes: "~1h 20min flight" },
      { id: "e30", time: "10:30", title: "Arrive Copenhagen CPH", location: "Copenhagen Airport (CPH)", type: "Transit", address: "Lufthavnsboulevarden 6, 2770 Kastrup" },
      { id: "e31", time: "12:00", title: "Check in — Coco Hotel", location: "Vesterbrogade 41", type: "Check-in", address: "Vesterbrogade 41, 1620 København" },
      { id: "e_c7", time: "13:30", title: "Coffee at The Coffee Collective", location: "Nørreport, København", type: "Food", address: "Jægersborggade 10, 2200 København" },
      { id: "e32", time: "15:00", title: "Explore Vesterbro", location: "Vesterbro, Copenhagen", type: "Sights" },
    ],
  },
  {
    date: "2026-05-06",
    city: "Copenhagen",
    country: "Denmark",
    events: [
      { id: "e_r5", time: "07:00", title: "Morning run", location: "Frederiksberg Canal, Copenhagen", type: "Activity" },
      { id: "e33", time: "10:00", title: "TorvehallerneKBH", location: "Frederiksborggade 21", type: "Food", address: "Frederiksborggade 21, 1362 København" },
      { id: "e34", time: "13:00", title: "HAY House", location: "Østergade 61", type: "Shopping", address: "Østergade 61, 2, 1100 København" },
      { id: "e_m3", time: "15:30", title: "Designmuseum Danmark", location: "Bredgade 68, København", type: "Museum", address: "Bredgade 68, 1260 København" },
      { id: "e35", time: "21:00", title: "Jazzhus Montmartre", location: "Store Regnegade 19A", type: "Music", address: "Store Regnegade 19A, 1110 København" },
    ],
  },
  {
    date: "2026-05-07",
    city: "Copenhagen",
    country: "Denmark",
    events: [
      { id: "e_rd4", time: "08:30", title: "Morning reading & coffee", location: "Coco Hotel, Vesterbro", type: "Free" },
      { id: "e36", time: "11:00", title: "Studio Arhoj", location: "Skindergade 7", type: "Shopping", address: "Skindergade 7, st, 1159 København" },
      { id: "e37", time: "14:00", title: "Nørrebro Wander", location: "Nørrebro, Copenhagen", type: "Sights" },
      { id: "e38", time: "22:00", title: "La Fontaine", location: "Kompagnistræde 11", type: "Music", address: "Kompagnistræde 11, 1208 København" },
    ],
  },
  {
    date: "2026-05-08",
    city: "London",
    country: "UK",
    events: [
      { id: "e39", time: "06:00", title: "Flight to London LHR", location: "Copenhagen Airport (CPH)", type: "Transit", address: "Lufthavnsboulevarden 6, 2770 Kastrup" },
      { id: "e40", time: "07:30", title: "Arrive London Heathrow", location: "London Heathrow (LHR)", type: "Transit" },
      { id: "e41", time: "Afternoon", title: "Air Canada to YYZ", location: "London Heathrow (LHR)", type: "Transit", notes: "Check in 3 hrs before departure" },
    ],
  },
];

export const seedExpenses: Expense[] = [
  { id: "exp1", amount: 320, currency: "GBP", category: "Transit", description: "Eurostar London→Frankfurt", date: "2026-04-30", city: "London" },
  { id: "exp2", amount: 180, currency: "EUR", category: "Accommodation", description: "The Pure Hotel (2 nights)", date: "2026-04-30", city: "Frankfurt" },
  { id: "exp3", amount: 38, currency: "EUR", category: "Food", description: "Kleinmarkthalle lunch", date: "2026-05-01", city: "Frankfurt" },
  { id: "exp4", amount: 24, currency: "EUR", category: "Entertainment", description: "Jazzkeller cover", date: "2026-05-01", city: "Frankfurt" },
  { id: "exp5", amount: 65, currency: "EUR", category: "Transit", description: "ICE Frankfurt→Berlin", date: "2026-05-02", city: "Frankfurt" },
  { id: "exp6", amount: 420, currency: "EUR", category: "Accommodation", description: "25hours Hotel Bikini (3 nights)", date: "2026-05-02", city: "Berlin" },
  { id: "exp7", amount: 54, currency: "EUR", category: "Shopping", description: "do you read me?! books", date: "2026-05-03", city: "Berlin" },
  { id: "exp8", amount: 30, currency: "EUR", category: "Food", description: "Markthalle Neun", date: "2026-05-03", city: "Berlin" },
];

export const initialAlerts: Alert[] = [
  {
    id: "alert1",
    type: "info",
    title: "Upcoming: Flight to Frankfurt",
    message: "Departs Heathrow T5 at 11:15 on Apr 30. Arrive at the airport by 09:15 for check-in.",
    date: "2026-04-28",
    dismissed: false,
  },
  {
    id: "alert2",
    type: "warning",
    title: "May Day — Frankfurt",
    message: "May 1st is a public holiday in Germany. Most shops closed; Kleinmarkthalle open limited hours.",
    date: "2026-04-29",
    dismissed: false,
  },
  {
    id: "alert3",
    type: "info",
    title: "Frankfurt arrival — Terminal 2",
    message: "Landing at FRA Terminal 2 at 13:55. Taxi or S-Bahn into the city takes ~15–25 mins.",
    date: "2026-04-29",
    dismissed: false,
  },
];
