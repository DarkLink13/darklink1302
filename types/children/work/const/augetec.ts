import { INode } from '~~/types/core'

export const AugeTec: INode = {
  item: {
    id: 'augetec',
    type: NodeItemType.Work,
    label: { name: 'Auge Tec' },
    background: { src: '/assets/img/auge.png' },
    colors: { primary: '#0c4151', secondary: '#246d5f', hover: '#35973b' }
  },
  children: [
    {
      item: {
        id: 'augecrm',
        type: NodeItemType.Project,
        label: { name: 'Auge CRM' },
        background: { src: '/assets/img/auge.png' },
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
        id: 'augecs',
        type: NodeItemType.Project,
        label: { name: 'Auge CS' },
        background: { src: '/assets/img/auge.png' },
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
        id: 'evaluamax',
        type: NodeItemType.Project,
        label: { name: 'EvaluaMax' },
        background: { src: '/assets/img/evaluamax.png' },
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
        id: 'mutillantasmax',
        type: NodeItemType.Project,
        label: { name: 'MultillantasMax' },
        background: { src: '/assets/img/multillantasmax.png' },
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
