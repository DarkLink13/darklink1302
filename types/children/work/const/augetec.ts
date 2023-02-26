import { INode } from '~~/types/core'

export const AugeTec: INode = {
  item: {
    type: NodeItemType.Work,
    label: { name: 'Auge Tec' },
    background: { src: '/assets/auge.png' },
    colors: { primary: '#0c4151', secondary: '#246d5f', hover: '#35973b' }
  },
  children: [
    {
      item: {
        type: NodeItemType.Project,
        label: { name: 'Auge CRM' },
        background: { src: '/assets/auge.png' },
        colors: { primary: '#393939', secondary: '#828282', hover: '#c3c3c3' }
      },
      children: [
        {
          ...FrontEndDev,
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
        type: NodeItemType.Project,
        label: { name: 'Auge CS' },
        background: { src: '/assets/auge.png' },
        colors: { primary: '#393939', secondary: '#828282', hover: '#c3c3c3' }
      },
      children: [
        {
          ...FrontEndDev,
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
        type: NodeItemType.Project,
        label: { name: 'EvaluaMax' },
        background: { src: '/assets/evaluamax.png' },
        colors: { primary: '#009192', secondary: '#00d86d', hover: '#009ffd' }
      },
      children: [
        {
          ...FrontEndDev,
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
        type: NodeItemType.Project,
        label: { name: 'MultillantasMX' },
        background: { src: '/assets/multillantasmax.png' },
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
}
