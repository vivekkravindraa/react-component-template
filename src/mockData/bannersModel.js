import * as images from './images';
const bannersModel = [
  {
    type: '1:2:1:2',
    style: {
      background: '#f4efd1'
    },
    spaceAroundItems: '2px',
    header: {
      type: 'button',
      align: 'center',
      style: {
        color: 'red',
        fontSize: '25px'
      },
      buttons: [
        {
          text: 'MEN',
          id: '0',
          items: [
            {
              type: 'drawer',
              src: images.man1,
              drawer: {
                heading: 'Heading here',
                paragraph: "Cool style and comfort in the men's venice Highland! Buy now and pay later with",
                footerNote: '19 July 2017'
              }
            },
            {
              type: 'altImage',
              src: images.man2,
              altImageSrc: images.man5
            },
            {
              type: 'zoomImage',
              src: images.man3
            },
            {
              type: 'zoomImage',
              src: images.man4
            },
            {
              type: 'image',
              src: images.man5
            },
            {
              type: 'image',
              src: images.man6
            }
          ]
        },
        {
          text: 'WOMEN',
          id: '1',
          items: [
            {
              type: 'drawer',
              src: images.woman1,
              drawer: {
                heading: 'Heading here',
                paragraph: "Cool style and comfort in the men's venice Highland! Buy now and pay later with",
                footerNote: '19 July 2017'
              }
            },
            {
              type: 'image',
              src: images.woman3
            },
            {
              type: 'image',
              src: images.woman4
            },
            {
              type: 'drawer',
              src: images.woman2,
              drawer: {
                heading: 'Heading here',
                paragraph: "Cool style and comfort in the men's venice Highland! Buy now and pay later with",
                footerNote: '19 July 2017',
                style: {
                  background: 'rgba(225, 225, 225, 0.5)',
                  color: '#000'
                }
              }
            },
            {
              type: 'image',
              src: images.woman5
            },
            {
              type: 'image',
              src: images.woman6
            }
          ]
        },
        {
          text: 'KIDS',
          id: '2',
          items: [
            {
              type: 'drawer',
              src: images.kid1,
              drawer: {
                heading: 'Heading here',
                paragraph: "Cool style and comfort in the men's venice Highland! Buy now and pay later with",
                footerNote: '19 July 2017'
              }
            },
            {
              type: 'image',
              src: images.kid2
            },
            {
              type: 'image',
              src: images.kid3
            },
            {
              type: 'image',
              src: images.kid4
            },
            {
              type: 'image',
              src: images.kid5
            },
            {
              type: 'image',
              src: images.kid6
            }
          ]
        }
      ]
    }
  },
  {
    type: '1:2:1:2',
    style: {
      background: '#f4efd1'
    },
    spaceAroundItems: '2px',
    header: {
      type: 'button',
      className: 'header header--center',
      style: {
        color: 'red',
        fontSize: '25px'
      },
      buttons: [
        {
          className: 'btn btn--default btn--outline',
          text: 'MEN',
          id: '0',
          items: [
            {
              type: 'drawer',
              src: images.man1,
              drawer: {
                heading: 'Heading here',
                paragraph: "Cool style and comfort in the men's venice Highland! Buy now and pay later with",
                footerNote: '19 July 2017'
              }
            },
            {
              type: 'altImage',
              src: images.man2,
              altImageSrc: images.man5
            },
            {
              type: 'zoomImage',
              src: images.man3
            },
            {
              type: 'zoomImage',
              src: images.man4
            },
            {
              type: 'image',
              src: images.man5
            },
            {
              type: 'image',
              src: images.man6
            }
          ]
        },
        {
          className: 'btn btn--default btn--outline',
          text: 'WOMEN',
          id: '1',
          items: [
            {
              type: 'drawer',
              src: images.woman1,
              drawer: {
                heading: 'Heading here',
                paragraph: "Cool style and comfort in the men's venice Highland! Buy now and pay later with",
                footerNote: '19 July 2017'
              }
            },
            {
              type: 'image',
              src: images.woman3
            },
            {
              type: 'image',
              src: images.woman4
            },
            {
              type: 'drawer',
              src: images.woman2,
              drawer: {
                heading: 'Heading here',
                paragraph: "Cool style and comfort in the men's venice Highland! Buy now and pay later with",
                footerNote: '19 July 2017',
                style: {
                  background: 'rgba(225, 225, 225, 0.5)',
                  color: '#000'
                }
              }
            },
            {
              type: 'image',
              src: images.woman5
            },
            {
              type: 'image',
              src: images.woman6
            }
          ]
        },
        {
          className: 'btn btn--default btn--outline',
          text: 'KIDS',
          id: '2',
          items: [
            {
              type: 'drawer',
              src: images.kid1,
              drawer: {
                heading: 'Heading here',
                paragraph: "Cool style and comfort in the men's venice Highland! Buy now and pay later with",
                footerNote: '19 July 2017'
              }
            },
            {
              type: 'image',
              src: images.kid2
            },
            {
              type: 'image',
              src: images.kid3
            },
            {
              type: 'image',
              src: images.kid4
            },
            {
              type: 'image',
              src: images.kid5
            },
            {
              type: 'image',
              src: images.kid6
            }
          ]
        }
      ]
    },
    items: [
      [
        {
          type: 'drawer',
          src: images.man1,
          drawer: {
            heading: 'Heading here',
            paragraph: "Cool style and comfort in the men's venice Highland! Buy now and pay later with",
            footerNote: '19 July 2017'
          }
        },
        {
          type: 'altImage',
          src: images.man2,
          altImageSrc: images.man5
        },
        {
          type: 'zoomImage',
          src: images.man3
        },
        {
          type: 'zoomImage',
          src: images.man4
        },
        {
          type: 'image',
          src: images.man5
        },
        {
          type: 'image',
          src: images.man6
        }
      ],
      [
        {
          type: 'drawer',
          src: images.woman1,
          drawer: {
            heading: 'Heading here',
            paragraph: "Cool style and comfort in the men's venice Highland! Buy now and pay later with",
            footerNote: '19 July 2017'
          }
        },

        {
          type: 'image',
          src: images.woman3
        },
        {
          type: 'image',
          src: images.woman4
        },
        {
          type: 'drawer',
          src: images.woman2,
          drawer: {
            heading: 'Heading here',
            paragraph: "Cool style and comfort in the men's venice Highland! Buy now and pay later with",
            footerNote: '19 July 2017',
            style: {
              background: 'rgba(225, 225, 225, 0.5)',
              color: '#000'
            }
          }
        },
        {
          type: 'image',
          src: images.woman5
        },
        {
          type: 'image',
          src: images.woman6
        }
      ],
      [
        {
          type: 'drawer',
          src: images.kid1,
          drawer: {
            heading: 'Heading here',
            paragraph: "Cool style and comfort in the men's venice Highland! Buy now and pay later with",
            footerNote: '19 July 2017'
          }
        },
        {
          type: 'image',
          src: images.kid2
        },
        {
          type: 'image',
          src: images.kid3
        },
        {
          type: 'image',
          src: images.kid4
        },
        {
          type: 'image',
          src: images.kid5
        },
        {
          type: 'image',
          src: images.kid6
        }
      ]
    ]
  },
  {
    type: '1:2:2:1',
    header: {
      title: 'Heading',
      subtitle: 'Sub Heading'
    },
    items: [
      {
        type: 'image',
        src: images.man1
      },
      {
        type: 'image',
        src: images.man2
      },
      {
        type: 'image',
        src: images.man3
      },
      {
        type: 'image',
        src: images.man4
      },
      {
        type: 'image',
        src: images.man5
      },
      {
        type: 'image',
        src: images.man6
      }
    ]
  },
  {
    type: '1:2:1:2:1',
    header: {
      title: 'Heading',
      subtitle: 'Sub Heading'
    },
    items: [
      {
        type: 'image',
        src: images.kid1
      },
      {
        type: 'image',
        src: images.kid2
      },
      {
        type: 'image',
        src: images.kid3
      },
      {
        type: 'image',
        src: images.kid4
      },
      {
        type: 'image',
        src: images.kid5
      },
      {
        type: 'image',
        src: images.kid6
      },
      {
        type: 'text',
        heading: 'Shoes',
        paragraph: "Cool style and comfort in the men's venice"
      }
    ]
  },
  {
    type: '1',
    header: {
      type: 'text',
      title: 'Heading',
      subtitle: 'Sub Heading',
      className: 'header header--left',
      style: {
        color: 'red',
        fontFamily: 'Helvetica Neue',
        fontSize: '25px'
      }
    },
    items: [
      {
        type: 'image',
        src: images.banner,
        style: {
          borderRadius: '7px'
        }
      }
    ]
  },
  {
    type: '1:1',
    header: {
      type: 'text',
      title: 'Heading',
      subtitle: 'Sub Heading',
      className: 'header header--center',
      style: {
        color: 'red',
        fontFamily: 'Helvetica Neue',
        fontSize: '25px'
      }
    },
    items: [{}, {}]
  },
  {
    type: '1:1:1',
    header: {
      type: 'text',
      title: 'Heading',
      className: 'header header--right',
      style: {
        color: 'red',
        fontFamily: 'Helvetica Neue',
        fontSize: '25px'
      }
    },
    items: [{}, {}, {}]
  },
  {
    type: '1:2',
    header: {
      type: 'button',
      className: 'header header--center',
      style: {
        color: 'red',
        fontSize: '25px'
      },
      buttons: [
        {
          className: 'btn btn--default btn--outline',
          text: 'MEN'
        },
        {
          className: 'btn btn--default btn--outline',
          text: 'WOMEN'
        },
        {
          className: 'btn btn--default btn--outline',
          text: 'KIDS'
        }
      ]
    },
    items: [{}, {}, {}]
  },
  {
    type: '1:1:2',
    header: {
      type: 'button',
      className: 'header header--right',
      style: {
        color: 'red',
        fontSize: '25px'
      },
      buttons: [
        {
          className: 'btn btn--default btn--outline',
          text: 'MEN'
        },
        {
          className: 'btn btn--default btn--outline',
          text: 'WOMEN'
        },
        {
          className: 'btn btn--default btn--outline',
          text: 'KIDS'
        }
      ]
    },
    items: [{}, {}, {}, {}]
  },
  {
    type: '1:2:2',
    header: {
      type: 'button',
      className: 'header header--left',
      style: {
        color: 'red',
        fontSize: '25px'
      },
      buttons: [
        {
          className: 'btn btn--default btn--outline',
          text: 'MEN'
        },
        {
          className: 'btn btn--default btn--outline',
          text: 'WOMEN'
        },
        {
          className: 'btn btn--default btn--outline',
          text: 'KIDS'
        }
      ]
    },
    items: [{}, {}, {}, {}, {}]
  },
  {
    type: '1:2:1',
    header: {
      title: 'Heading',
      subtitle: 'Sub Heading'
    },
    items: [{}, {}, {}, {}]
  },

  {
    type: '2:1',
    header: {
      title: 'Heading',
      subtitle: 'Sub Heading'
    },
    items: [{}, {}, {}]
  },
  {
    type: '2:1:1',
    header: {
      title: 'Heading',
      subtitle: 'Sub Heading'
    },
    items: [{}, {}, {}, {}]
  },
  {
    type: '2:1:2',
    header: {
      title: 'Heading',
      subtitle: 'Sub Heading'
    },
    items: [{}, {}, {}, {}, {}]
  },
  {
    type: '2:2:1',
    header: {
      title: 'Heading',
      subtitle: 'Sub Heading'
    },
    items: [{}, {}, {}, {}, {}]
  },
  {
    type: '2:1:2:1',
    header: {
      title: 'Heading',
      subtitle: 'Sub Heading'
    },
    items: [{}, {}, {}, {}, {}, {}]
  },
  {
    type: '2:1:1:2',
    header: {
      title: 'Heading',
      subtitle: 'Sub Heading'
    },
    items: [{}, {}, {}, {}, {}]
  },
  {
    type: '2:1:2:1:2',
    header: {
      title: 'Heading',
      subtitle: 'Sub Heading'
    },
    items: [{}, {}, {}, {}, {}, {}, {}]
  },
  {
    type: '1:3',
    header: {
      title: 'Heading',
      subtitle: 'Sub Heading'
    },
    items: [{}, {}, {}, {}]
  },
  {
    type: '3:1',
    header: {
      title: 'Heading',
      subtitle: 'Sub Heading'
    },
    items: [{}, {}, {}, {}]
  }
];

export default bannersModel;
