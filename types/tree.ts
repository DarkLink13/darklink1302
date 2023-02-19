import { Angular2, Apollo, Django, DjangoRestFramework, DotNet, Nx, ElasticSearch, ExpressJS, GCP, GraphQL, Hasura, Hugo, IDjango, KnockoutJS, NestJS, NodeJS, Pandas, PostgreSQL, React, Redis, VueJS, Vuetify, Nuxt } from './tech.ts'
export class CIcon {
  key: string
  size?: string
  top?: string
}

export class CLabel {
  size: string
  name: string
  bottom: string
  color: string
}

export class CGlow {
  blur: number
  color: string
}
export class TGlowNormalize {
  array: Array<Number>
  blur: Number
}

export class CColors {
  primary?: string
  secondary?: string
  hover?: string
  glow?: CGlow[]
}

export class CBackground {
  src: string
  height?: string
  x?: string
  y?: string
}

export class CItem {
  label: CLabel
  icon?: CIcon
  description?: string
  background?: CBackground
  colors?: CColors
}

export const defaultBackground = {
  height: '25%',
  x: '31%',
  y: '25%'
}

export class CNode {
  item: CItem
  // eslint-disable-next-line no-use-before-define
  children?: CNode[]
}
export const FronEndDev: CNode = {
  item: {
    label: { name: 'Front-End Developer' },
    icon: { key: 'mdi:code-tags' },
    colors: { primary: '#146487', secondary: '#2e9fd4', hover: '#8096a7' }
  }
}
export const BackEndDev: CNode = {
  item: {
    label: { name: 'Back-End Developer' },
    icon: { key: 'mdi:code-json' },
    colors: { primary: '#c0193e', secondary: '#d84346', hover: '#dca398' }
  }
}
export const FullStackDev: CNode = {
  item: {
    label: { name: 'Full-Stack Developer' },
    icon: { key: 'ion:code-working' },
    colors: { primary: '#043a32', secondary: '#01450f', hover: '#1aa177' }
  }
}
export const DevOps: CNode = {
  item: {
    label: { name: 'DevOps' },
    icon: { key: 'grommet-icons:console' },
    colors: { primary: '#055451', secondary: '#086519', hover: '#25b585' }
  }
}
export const Tree: CNode = {
  item: {
    label: {
      name: 'darklink',
      bottom: '75%'
    },
    background: { src: '/assets/avatar.jpg' },
    colors: {
      primary: '#2ac7ec',
      secondary: '#f0e5b1',
      hover: 'white',
      glow: [{ color: '#d773d6', blur: 1 }, { color: '#2ac7ec', blur: 2 }, { color: '#f0e5b1', blur: 5 }]
    }
  },
  children: [
    {
      item: {
        label: { name: 'Works' },
        icon: {
          key: 'material-symbols:work-outline'
        },
        colors: {
          primary: '#002c71',
          secondary: '#1a4a97',
          hover: '#244f93'
        }
      },
      children: [
        {
          item: {
            label: { name: 'UCI' },
            colors: { primary: '#05235e', secondary: '#2c4e9a', hover: '#6a6b6d' },
            background: { src: '/assets/uci.png', x: '30%', y: '25%', height: '25%' }
          },
          children: [
            {
              item: {
                label: { name: 'APKlis' },
                background: { src: '/assets/apklis.png', ...defaultBackground },
                colors: { primary: '#f15323', secondary: '#ec9107', hover: '#f0e108' }
              },
              children: [
                {
                  ...FronEndDev,
                  children: [
                    Angular2,
                    VueJS
                  ]
                },
                {
                  ...BackEndDev,
                  children: [
                    {
                      item: IDjango,
                      children: [DjangoRestFramework, Pandas]
                    }, PostgreSQL, Redis, ElasticSearch
                  ]
                },
                DevOps
              ]
            }
          ]
        },
        {
          item: {
            label: { name: 'Auge Tec' },
            background: { src: '/assets/auge.png', ...defaultBackground },
            colors: { primary: '#393939', secondary: '#828282', hover: '#c3c3c3' }
          },
          children: [
            {
              item: {
                label: { name: 'Auge CRM' },
                background: { src: '/assets/auge.png', ...defaultBackground },
                colors: { primary: '#393939', secondary: '#828282', hover: '#c3c3c3' }
              },
              children: [
                {
                  ...FronEndDev,
                  children: [
                    {
                      ...Nuxt,
                      children: [Vuetify,
                        VueJS]
                    }

                  ]
                },
                {
                  item: { ...BackEndDev.item, label: { name: 'Back-End Collaborator' } },
                  children: [Django, PostgreSQL, ElasticSearch]
                }
              ]
            },
            {
              item: {
                label: { name: 'Auge CS' },
                background: { src: '/assets/auge.png', ...defaultBackground },
                colors: { primary: '#393939', secondary: '#828282', hover: '#c3c3c3' }
              },
              children: [
                {
                  ...FronEndDev,
                  children: [
                    {
                      ...Nuxt,
                      children: [Vuetify,
                        VueJS]
                    },
                    GraphQL,
                    Apollo
                  ]
                },
                {
                  item: { ...BackEndDev.item, label: { name: 'Back-End Collaborator' } },
                  children: [GraphQL, Hasura, PostgreSQL]
                }
              ]
            },
            {
              item: {
                label: { name: 'EvaluaMax' },
                background: { src: '/assets/evaluamax.png', ...defaultBackground },
                colors: { primary: '#009192', secondary: '#00d86d', hover: '#009ffd' }
              },
              children: [
                {
                  ...FronEndDev,
                  children: [
                    {
                      ...Nuxt,
                      children: [Vuetify,
                        VueJS]
                    },
                    GraphQL,
                    Apollo
                  ]
                }
              ]
            },
            {
              item: {
                label: { name: 'MultillantasMX' },
                background: { src: '/assets/multillantasmax.png', ...defaultBackground },
                colors: { primary: '#2867ab', secondary: '#c2230d', hover: '#ffffff' }
              },
              children: [
                {
                  ...FullStackDev,
                  children: [Hugo]
                }
              ]
            }
          ]
        },
        {
          item: {
            label: { name: 'Cubacitas' },
            background: { src: '/assets/cubacitas.png', ...defaultBackground },
            colors: { primary: '#fe4860', secondary: '#ff8548', hover: '#ffa542' }
          },
          children: [
            {
              item: { label: { name: 'Cubacitas Web' } },
              children: [
                {
                  ...FronEndDev,
                  children: [Angular2]
                }
              ]
            }
          ]
        },
        {
          item: {
            label: { name: 'Intellisys D Corp' },
            colors: { primary: '#73abb3', secondary: '#cfd252', hover: '#f7f7f7' },
            background: { src: '/assets/intellisys.png', ...defaultBackground }
          },
          children: [
            {
              item: {
                label: { name: 'VacunateRD' },
                background: { src: '/assets/vacunaterd.png', ...defaultBackground },
                colors: { primary: '#061e57', secondary: '#e30f1f', hover: '#f2f2f2' }
              },
              children: [
                {
                  ...BackEndDev,
                  children: [NodeJS, PostgreSQL, ExpressJS, NestJS]
                },
                {
                  ...DevOps,
                  children: [GCP]
                }
              ]
            }
          ]
        },
        {
          item: {
            label: { name: 'Opsec Security' },
            background: { src: '/assets/opsecsecurity.png', ...defaultBackground },
            colors: { primary: '#181e41', secondary: '#003b78', hover: '#3d6292' }
          },
          children: [
            {
              item: {
                label: { name: 'Insight' },
                background: { src: '/assets/opsecsecurity.png', ...defaultBackground },
                colors: { primary: '#181e41', secondary: '#003b78', hover: '#3d6292' }
              },
              children: [
                {
                  ...FullStackDev,
                  children: [DotNet, KnockoutJS]
                }
              ]
            },
            {
              item: {
                label: { name: 'eRE' },
                background: { src: '/assets/ere.png', ...defaultBackground },
                colors: { primary: '#000000', secondary: '#faec17', hover: '#FFFFFF' }
              },
              children: [
                {
                  ...FullStackDev,
                  children: [DotNet, React]
                }
              ]
            }
          ]
        },
        {
          item: {
            label: { name: 'payever' },
            background: { src: '/assets/payever.png', ...defaultBackground },
            colors: { primary: '#333333', secondary: '#888888', hover: '#FFFFFF' }
          },
          children: [
            {
              item: {
                label: { name: 'Commerceos' },
                background: { src: '/assets/commerceos.png', ...defaultBackground },
                colors: { primary: '#333333', secondary: '#888888', hover: '#FFFFFF' }
              },
              children: [
                {
                  ...FronEndDev,
                  children: [Angular2, Nx]
                }
              ]
            }
          ]
        },
        {
          item: {
            label: { name: 'CopSonic' },
            background: { src: '/assets/copsonic.png', ...defaultBackground },
            colors: { primary: '#a62831', secondary: '#c01925', hover: '#c6c8c7' }
          }
        }
      ]
    },
    {
      item: {
        label: { name: 'Skills' },
        icon: {
          key: 'carbon:skill-level'
        },
        colors: {
          primary: '#281b62',
          secondary: '#403084',
          hover: '#5a48b5'
        }
      },
      children: [
        {
          item: { label: { name: 'Web Developer' } }
        },
        {
          item: { label: { name: 'Algorithm Developer' } }
        },
        {
          item: { label: { name: 'Web Designer' } }
        },
        {
          item: { label: { name: 'Image Designer' } }
        }
      ]
    },
    {
      item: {
        label: { name: 'Likes' },
        icon: { key: 'icon-park-outline:like' },
        colors: {
          primary: '#6d1414',
          secondary: '#952727',
          hover: '#bb4141'
        }
      },
      children: [
        {
          item: { label: { name: 'Programming' } }
        },
        {
          item: { label: { name: 'Music' } }
        },
        {
          item: { label: { name: 'Painting' } }
        },
        {
          item: { label: { name: 'Fitness' } }
        },
        {
          item: { label: { name: 'Gamming' } }
        },
        {
          item: { label: { name: 'Soccer' } }
        }
      ]
    },
    {
      item: {
        label: { name: 'Contact' },
        icon: { key: 'material-symbols:android-contacts-outline' },
        colors: {
          primary: '#77380c',
          secondary: '#914916',
          hover: '#b76d39'
        }
      },
      children: [
        {
          item: { label: { name: 'Phone Number' } }
        },
        {
          item: { label: { name: 'Email' } }
        }
      ]
    },
    {
      item: {
        label: { name: 'Info' },
        icon: { key: 'material-symbols:info-outline-rounded' },
        colors: {
          primary: '#604c08',
          secondary: '#7b661c',
          hover: '#95813c'
        }
      }
    },
    {
      item: {
        label: { name: 'Certifications' },
        icon: { key: 'game-icons:achievement' },
        colors: {
          primary: '#043e26',
          secondary: '#0e4d33',
          hover: '#25664b'
        }
      },
      children: [
        {
          item: { label: { name: 'HackerRank' } }
        }
      ]
    }
  ]
}
