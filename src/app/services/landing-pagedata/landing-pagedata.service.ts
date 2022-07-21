import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LandingPagedataService {

  //NOTE: working on the interation of this service to supply data to landing page.
  // need to make it subscribable.
  constructor() { }

  getLandingPageData():Array<LandingPagedataServiceType> {
    return [
      {
        id: 1,
        imageLink: 'https://cdn.shopify.com/s/files/1/0585/1172/0640/files/2Image_1280x1020_93489376-c9da-474b-8d7f-ef1130df8226_2040x.png?v=1658150034',
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
        imageLink: 'https://cdn.shopify.com/s/files/1/0585/1172/0640/files/2_b026f0a0-1540-431f-9f3f-e3e19558df9a_1901x.png?v=1657563037',
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
        imageLink: 'https://cdn.shopify.com/s/files/1/0585/1172/0640/files/3_010183e9-f767-4be3-a282-e8cf00e4c7e9_1901x.jpg?v=1657563036',
        preHeading: 'Introducing. Ear (1).',
        heading: 'Sound of change.',
        shortText: 'Raw beauty with precise engineering and state-of-the-art noise cancellation for a pure sound experience.       ',
        link1: {
          linkName: '',
          link: ''
        },
        overlayText: 'ear (1)',
        learnMore: ''
      }, {
        id:4,
        imageLink: 'https://cdn.shopify.com/s/files/1/0585/1172/0640/files/4_b4194c86-824f-46e7-af16-8c04c3c559aa_1901x.jpg?v=1657563037',
        preHeading: 'About. Nothing.',
        heading: 'About us.',
        shortText: 'It’s easy to make something. Even easier when it’s just like the thing before it. And the one before that. But like all good things, this one starts from scratch. No notes. No blueprints. No map to find our way back.',
        link1: {
          linkName: '',
          link: ''
        },
        overlayText: 'About us.',
        learnMore: ''
      },{
        id:5,
        imageLink: 'https://cdn.shopify.com/s/files/1/0585/1172/0640/files/5_55c23807-a351-44d3-a090-f3904eaf8d4d_1901x.jpg?v=1657563036',
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
  id:number,
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