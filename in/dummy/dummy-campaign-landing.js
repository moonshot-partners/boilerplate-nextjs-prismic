export const dummyFeatureSection = {
  prismicData: {
    primary: {
      image: {
        url: "/assets/images/feature_background_desktop.png",
        alt: "feature img",
      },
      image_mobile: {
        url: "/assets/images/feature_background_mobile.png",
        alt: "feature img mobile",
      },
      image_align: "center",
      title: [
        {
          semanticElement: "h1",
          visualHeadingLevel: "Heading 1",
          text: "Do you share our love of learning?",
          spans: []
        }
      ],
      title_color: "fluro_yellow",
      description: [
        {
          type: "paragraph",
          text: "Evolve your content distribution with a solution for learning providers of all sectors  and sizes. With Go1 Connect you can distribute your content wherever  users need it, seamlessly. ",
          spans: []
        }
      ],
      description_color: "soft",
      description_align: "center",
      action_link: "https://readyset.go1.com/",
      action_text: "Explore our learning assets",
      action_theme: "vividMid",
      background_color: "accent"
    }
  }
}

export const dummyCampaignLanding = {
  // title: "A learning ecosystem to help your workforce thrive",
  title: [
    {
      semanticElement: "h1",
      visualHeadingLevel: "Heading 1",
      text: "A learning ecosystem to help your workforce thrive",
      spans: []
    }
  ],
  image: {
    url: "/assets/images/img.png",
    alt: "learning img",
  },
  demo: {
    text: "Request a demo",
    href: "https://readyset.go1.com/book-a-demo"
  }
}

export const response = [
  {
    slice_type: "header",
    primary: {
      title: [
        {
          semanticElement: "h1",
          visualHeadingLevel: "Heading 1",
          text: "A learning ecosystem to help your workforce thrive",
          spans: []
        }
      ],
      image: {
        src: "/assets/images/headhots-content-slide.png",
        alt: "learning img",
      },
      demo: {
        text: "Request a demo",
        href: "https://readyset.go1.com/book-a-demo"
      }
    }
  },
  {
    slice_type: "header",
    primary: {
      title: [
        {
          semanticElement: "h4",
          visualHeadingLevel: "Heading 4",
          text: "This is a title in h4",
          spans: []
        }
      ],
      image: {
        url: "/assets/images/img.png",
        alt: "learning img",
      },
      demo: {
        text: "Request a demo",
        href: "https://readyset.go1.com/book-a-demo"
      },
    }
  },
  {
    slice_type: "people_feature",
    slice_label: null,
    primary: {
      image: {
        url: "/assets/images/make-a-difference.png",
        alt: "learning img",
      },
      image_align: "right",
      title: [
        {
          text: "Spend less time searching and more time making a difference!",
          semanticElement: "h1",
          visualHeadingLevel: "Heading 2",
        }
      ],
      title_color: "accent",
      description: [
        {
            "type": "paragraph",
            "text": "With our customer success team’s deep knowledge of the Go1 library, they can help curate custom playlists with the most relevant content ensuring you always have the right training courses to upskill, re-train, and retain your employees.",
            "spans": [
                {
                    "start": 26,
                    "end": 47,
                    "type": "strong"
                },
                {
                    "start": 175,
                    "end": 213,
                    "type": "em"
                },
                {
                    "start": 215,
                    "end": 221,
                    "type": "hyperlink",
                    "data": {
                      "link_type": "Web",
                      "url": "https://d2qfzumdvo5sp3.cloudfront.net/index.html"
                    }
                }
            ]
        }
    ],
      description_color: "accent",
      description_align: "justify",
      action_link: "https://readyset.go1.com/book-a-demo",
      // action_text: "Book a demo",
      action_text_color: "fluro_yellow",
      action_bg_color: "accent",
      background_color: "creme"
    }
  },
  {
    slice_type: "feature_section",
    primary: dummyFeatureSection.prismicData.primary
  }
]

export const dummyTestimonial = {
  theme: "dangerHigh",
  bubbles: [
    {
      icon: {
        src: "/assets/images/img_7.png",
      },
      name: {
          text: "Clark Edwards",
      },
      role: {
        text: "Senior Marketing Manager, Tiktok",
      },
      quote:{
        text: "‘I can’t even imagine trying to provide training for 9,000 employees without the breadth and variety we get covered with Go1.’"
      }
    },
    {
      icon: {
        src: "/assets/images/img_1.png",
      },
      name: {
          text: "Kylie Lano",
      },
      role: {
        text: "State Manager Equipment Finance, Westpac",
      },
      quote:{
        text: "‘I can’t even imagine trying to provide training for 9,000 employees  without the breadth and variety we get covered with Go1.’"
      }
    },
    // {
    //   icon: {
    //     src: "/assets/images/img_7.png",
    //   },
    //   name: {
    //       text: "Clark Edwards",
    //   },
    //   role: {
    //     text: "Senior Marketing Manager, Tiktok",
    //   },
    //   quote:{
    //     text: "‘I can’t even imagine trying to provide training for 9,000 employees without the breadth and variety we get covered with Go1.’"
    //   }
    // },
    // {
    //   icon: {
    //     src: "/assets/images/img_1.png",
    //   },
    //   name: {
    //       text: "Kylie Lano",
    //   },
    //   role: {
    //     text: "State Manager Equipment Finance, Westpac",
    //   },
    //   quote:{
    //     text: "‘I can’t even imagine trying to provide training for 9,000 employees  without the breadth and variety we get covered with Go1.’"
    //   }
    // }
  ]
}

export const dummyFeatureAsset = {
  prismicData: {
    primary: {
      media: {
        url: "https://drive.google.com/file/d/1-iVserv7pWo4k7HCoGHSS4pLfLmewQEV/view",
        fileType: "mp4",
      },
      title: {
        text: "Find the right content, in the right format and deliver it in the right system.",
        semanticElement: "h2",
        visualHeadingLevel: "Heading 1",
        spans: []
      },
      demo: {
        text: "Request a demo",
        href: "https://readyset.go1.com/book-a-demo",
        theme: "vividMid",
      },
      background_color: "dangerMid"
    }
  }
}
