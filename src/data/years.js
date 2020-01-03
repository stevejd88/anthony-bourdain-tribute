import newYork from "./img/ny.jpg";
import article from "./img/article.jpg";
import book from "./img/book.jpg";
import cooks from "./img/cooks-tour.jpg";
import noReservations from "./img/no-re.jpg";
import layover from "./img/layover.jpg";
import partsUnknown from "./img/unknown.jpg";
import tribute from "./img/tribute.jpg";

class Year {
  constructor(year, title, desc, img) {
    this.year = year;
    this.title = title;
    this.desc = desc;
    this.img = img;
  }
}

export const Year1956 = [
  new Year(
    `1956-1957`,
    'Birth',
    "Anthony is born in New York City, New York, US.",
    newYork
  )
]

export const Year1999 = [
  new Year(
    `1999`,
    'New Yorker Article',
    `Anthony writes an article for the New Yorker titled "Don't eat Before Reading".`,
    article
  )
];

export const Year2000 = [
  new Year(
    `2000`,
    'Kitchen Confidential',
    "Bourdain gains national acclaim with the release of his book Kitchen Confidential: Adventures in the Culinary Underbellly",
    book
  )
];

export const Year2002 = [
  new Year(
    `2002-2003`,
    `A Cook's Tour`,
    `With the acclaim and noteriety after Kitchen Confiedential, Anthony get's his first show "A Cook's Tour" on the FOod Network.`,
    cooks
  )
];

export const Year2005 =[
  new Year(
    `2005-2012`,
    'No Reservations',
    `Following Bourdain's previous succeses, he gets a new telivision show on the Travel Channel: No Reservations.  This show would bring Anthony national recognition. The format would be similar to `,
    noReservations
  )
];

export const Year2011 = [
  new Year(
    `2011-2013`,
    'The Layover',
     `Bourdain gets another show on the Travel Channel: The Layover. The format of this show was to show what a traveler can do, eat, visit and enjoy within 24 to 48 hours in a city. `,
     layover
  )
];

export const Year2013 = [
  new Year(
    `2013-2018`,
    'Parts Unknown',
    `In 2013 Bourdain broke from the Travel Channel to film a new show on CNN: Parts Unknown. He cited his leave from his previous network as stemming from frustration on control of creative freedom. Once again though he followed the same basic format as his previous shows of eating and experiencing new places and things.`,
    partsUnknown
  )
];

export const Year2018 = [
  new Year(
    `2018`,
    'Death',
    `Sadly, while filming an episode of Parts Unknown, Anthony Bourdain was found dead in his hotel room in the Le Chambard hotel in Kaysersberg, France. Cause of death was by apparent suicide, and no foul play was suspected. Tragically he was found by his longtime friend chef Eric Ripert, who was in town with Bourdain filming the episode.`,
    tribute
  )
];




// export const Year1956 = [
//   {
//     year: 1956-1957,
//     title: 'Birth',
//     desc: "Anthony is born in New York City, New York, US.",
//     img: newYork
//   }
// ];

// export const Year1999 = [
//   {
//     year: 1999,
//     title: 'New Yorker Article',
//     desc: `Anthony writes an article for the New Yorker titled "Don't eat Before Reading".`,
//     img: article
//   }
// ];

// export const Year2000 = [
//   {
//     year: 2000,
//     title: 'Kitchen Confidential',
//     desc: "Bourdain gains national acclaim with the release of his book Kitchen Confidential: Adventures in the Culinary Underbellly",
//     img: book
//   }
// ];

// export const Year2002 = [
//   {
//     year: 2002-2003,
//     title: `A Cook's Tour`,
//     desc: `With the acclaim and noteriety after Kitchen Confiedential, Anthony get's his first show "A Cook's Tour" on the FOod Network.`,
//     img: cooks
//   }
// ];

// export const Year2005 = [
//   {
//     year: 2005-2012,
//     title: 'No Reservations',
//     desc: `Following Bourdain's previous succeses, he gets a new telivision show on the Travel Channel: No Reservations.  This show would bring Anthony national recognition. The format would be similar to `,
//     img: noReservations
//   }
// ];

// export const Year2011 = [
//   {
//     year: 2011-2013,
//     title: 'The Layover',
//     desc: `Bourdain gets another show on the Travel Channel: The Layover. The format of this show was to show what a traveler can do, eat, visit and enjoy within 24 to 48 hours in a city. `,
//     img: layover
//   }
// ];

// export const Year2013 = [
//   {
//     year: 2013-2018,
//     title: 'Parts Unknown',
//     desc: `In 2013 Bourdain broke from the Travel Channel to film a new show on CNN: Parts Unknown. He cited his leave from his previous network as stemming from frustration on control of creative freedom. Once again though he followed the same basic format as his previous shows of eating and experiencing new places and things.`,
//     img: partsUnknown
//   }
// ];

// export const Year2018 = [
//   {
//     year: 2018,
//     title: 'Death',
//     desc: `Sadly, while filming an episode of Parts Unknown, Anthony Bourdain was found dead in his hotel room in the Le Chambard hotel in Kaysersberg, France. Cause of death was by apparent suicide, and no foul play was suspected. Tragically he was found by his longtime friend chef Eric Ripert, who was in town with Bourdain filming the episode.`,
//     img: tribute
//   }
// ];



// export const Year2005 = [
//   {
//     year: ,
//     title: ,
//     desc: ``,
//     img:
//   }
// ];
