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
    undefined,
    { item: FrontEnd.item, children: [undefined, Nuxt, undefined, Angular2, undefined, Typescript] },
    { item: BackEnd.item, children: [undefined, Django, Python, undefined, NestJS, Typescript] },
    undefined,
    { item: DevOps.item, children: [undefined, PostgreSQL, undefined, undefined, undefined, ElasticSearch] },
    { item: AlgorithmDev.item, children: [undefined, DynamicProgramming, undefined, NumberTheory, undefined, GraphTheory] }
  ]
}
