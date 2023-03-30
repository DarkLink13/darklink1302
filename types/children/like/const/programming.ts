import { INode } from '../../../core'

export const LikeProgramming: INode = {
  item: {
    type: NodeItemType.Like,
    id: 'programming',
    icon: { key: 'ic:outline-code' },
    colors: {
      primary: '#001d34',
      secondary: '#0043ff',
      hover: '#2fa3f7'
    }
  },
  children: [
    { item: FrontEnd.item, children: [Nuxt, Angular2, Typescript] },
    { item: BackEnd.item, children: [Django, Python, NestJS, Typescript] },
    { item: DevOps.item, children: [PostgreSQL, ElasticSearch] },
    { item: AlgorithmDev.item, children: [DynamicProgramming, NumberTheory, GraphTheory] }
  ]
}
