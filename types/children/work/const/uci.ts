import { INode } from '~~/types/core'
import { NodeItemLabelType } from '~~/types/core/node/item/label/type'

export const UCI: INode = {
  item: {
    id: 'uci',
    type: NodeItemType.Work,
    label: { name: 'Universidad de las Ciencias Informáticas' },
    sublabels: [{ name: '2018-09,2022-01', type: NodeItemLabelType.Date }],
    colors: { primary: '#05235e', secondary: '#2c4e9a', hover: '#2c59e6' },
    background: { src: '/assets/img/uci.png' }
  },
  children: [
    {
      item: {
        id: 'apklis',
        type: NodeItemType.Project,
        label: { name: 'APKlis' },
        sublabels: [{ name: '2018-09,2022-01', type: NodeItemLabelType.Date }],
        background: { src: '/assets/img/apklis.png' },
        colors: { primary: '#f15323', secondary: '#ec9107', hover: '#f0e108' }
      },
      children: [
        {
          item: { ...FrontEndDev.item, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ultrices, mi eget euismod porta, augue enim lobortis sapien, ac sodales mauris diam vel nunc. Aenean tempus, lectus a ultrices interdum, eros diam ultricies velit, eu fringilla ante dui at felis. Sed commodo lectus nec ipsum faucibus eleifend. Donec placerat augue in ligula ornare placerat. Donec volutpat feugiat lacus sed ultrices. Mauris fermentum accumsan neque, sit amet venenatis neque lacinia sed. Etiam congue semper sapien, et aliquet sapien. Nam ligula odio, pretium non diam eu, volutpat tempor leo. Aliquam porttitor a ipsum et feugiat. Donec facilisis, est non euismod vehicula, lectus nunc tempor lectus, eget efficitur elit augue vel arcu. Sed ullamcorper neque at augue pellentesque, sed sollicitudin urna sollicitudin. Sed vitae risus gravida mi maximus auctor. Donec dapibus consequat ante ut tincidunt. Suspendisse vel finibus mi. ', sublabels: [{ name: '2018-09,2022-01', type: NodeItemLabelType.Date }] },
          children: [
            { item: { ...(Angular2.item), sublabels: [{ name: '6-10', type: NodeItemLabelType.Version }, { name: '3', type: NodeItemLabelType.Years }] } },
            { item: { ...(VueJS.item), sublabels: [{ name: '1,2', type: NodeItemLabelType.Version }, { name: '1', type: NodeItemLabelType.Years }] } }
          ]
        },
        undefined,
        {
          item: { ...BackEndDev.item, exp: 65, sublabels: [{ name: '2020-01,2021-10', type: NodeItemLabelType.Date }] },
          children: [
            {
              item: IDjango,
              children: [DjangoRestFramework, Pandas]
            }, PostgreSQL, Redis, ElasticSearch
          ]
        },
        undefined,
        { item: { ...DevOps.item, label: { name: 'DevOps Collaborator' }, exp: 20, sublabels: [{ name: '2020-03,2021-10', type: NodeItemLabelType.Date }] } }
      ]
    }
  ]
}
