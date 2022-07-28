import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LandingPagedataService {

  //NOTE: working on the interation of this service to supply data to landing page.
  // need to make it subscribable.
  constructor() { }

  getLandingPageData(): Array<LandingPagedataServiceType> {
    return [
      {
        id: 1,
        imageLink: `../../assets/landingPageAssets/1.png`,
        preHeading: 'Introducing. Phone (1).',
        heading: 'Pure Instinct.',
        shortText: 'Designed with instinct, to bring joy back to the everyday. Through the Glyph Interface, a perfected OS and exceptional dual camera. All startlingly fast.',
        link1: {
          linkName: '( Know more details )',
          link: 'https://ca-en.nothing.tech/products/phone-1'
        },
        overlayText: 'phone ( 1 )',
        learnMore: ''
      },
      {
        id: 2,
        imageLink: `../../assets/landingPageAssets/2.png`,
        preHeading: 'Nothing. Event.',
        heading: 'Nothing Event: Return to instinct.',
        shortText: 'This is Phone (1). Designed with intention. Full of warmth. And joy.Watch the launch event here.',
        link1: {
          linkName: '',
          link: ''
        },
        overlayText: 'nothing event',
        learnMore: ''
      },
      {
        id: 3,
        imageLink: `../../assets/landingPageAssets/3.png`,
        preHeading: 'Nothing. Support.',
        heading: 'Our new support services.',
        shortText: 'We’ve completely redesigned our support services. More agents, new ways to contact us, device repairs and a brand new support portal. \nTo fully take care of our Phone (1) experience',
        link1: {
          linkName: '',
          link: ''
        },
        overlayText: 'support',
        learnMore: ''
      }, {
        id: 4,
        imageLink: `../../assets/landingPageAssets/4.png`,
        preHeading: 'Introducing. Ear (1).',
        heading: 'Sound of change.',
        shortText: 'Raw beauty with precise engineering and state-of-the-art noise cancellation for a pure sound experience.',
        link1: {
          linkName: '',
          link: ''
        },
        overlayText: 'ear (1)',
        learnMore: ''
      }, {
        id: 5,
        imageLink: `../../assets/landingPageAssets/5.png`,
        preHeading: 'About. Nothing.',
        heading: 'About us.',
        shortText: 'It’s easy to make something. Even easier when it’s just like the thing before it. And the one before that. But like all good things, this one starts from scratch. No notes. No blueprints. No map to find our way back.',
        link1: {
          linkName: '',
          link: ''
        },
        overlayText: 'About us.',
        learnMore: ''
      }, {
        id: 6,
        imageLink: `../../assets/landingPageAssets/6.png`,
        preHeading: 'Find. Phone (1).',
        heading: 'Where to buy Phone (1)',
        shortText: 'The wait is so nearly over.16 July. The first chance to get your hands on Phone (1). Here’s everything you need to know.',
        link1: {
          linkName: '',
          link: ''
        },
        overlayText: 'where to buy',
        learnMore: ''
      },

    ]
  }
}


export interface LandingPagedataServiceType {
  id: number,
  imageLink: string,
  preHeading: string,
  heading: string,
  shortText: string,
  link1: {
    linkName: string,
    link: string,
  },
  overlayText: string,
  learnMore: string
}