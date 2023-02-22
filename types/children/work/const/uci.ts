import { INode } from '~~/types/core'

export const UCI: INode = new CNode({
  item: {
    type: NodeItemType.Work,
    details: {
    },
    label: { name: 'UCI' },
    colors: { primary: '#05235e', secondary: '#2c4e9a', hover: '#2c59e6' },
    background: { src: '/assets/uci.png', x: '30%', y: '25%', height: '25%' }
  },
  children: [
    {
      item: {
        type: NodeItemType.Project,
        label: { name: 'APKlis' },
        background: { src: '/assets/apklis.png', ...BackgroundDefault },
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
        undefined,
        {
          ...BackEndDev,
          children: [
            {
              item: IDjango,
              children: [DjangoRestFramework, Pandas]
            }, PostgreSQL, Redis, ElasticSearch
          ]
        },
        undefined,
        DevOps
      ]
    }
  ]
})
