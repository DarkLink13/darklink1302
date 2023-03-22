import { INode } from '~~/types/core'

export const PostgreSQL: INode = {
  item: {
    id: 'postgresql',
    type: NodeItemType.Skill,
    exp: 85,
    sublabels: [{ value: '5', type: NodeItemLabelType.Years }, { value: '9-15', type: NodeItemLabelType.Version }],
    label: { value: 'PostgreSQL' },
    background: { src: '/assets/img/postgresql.png' },
    colors: { primary: '#306792', secondary: '#000000', hover: '#ffffff' }
  }
}
export const Redis: INode = {
  item: {
    id: 'redis',
    exp: 30,
    sublabels: [{ value: '1', type: NodeItemLabelType.Years }, { value: '5', type: NodeItemLabelType.Version }],
    type: NodeItemType.Skill,
    label: { value: 'Redis' },
    background: { src: '/assets/img/redis.png' },
    colors: { primary: '#a32321', secondary: '#dc382d', hover: '#ffffff' }
  }
}
export const ElasticSearch: INode = {
  item: {
    id: 'elasticsearch',
    exp: 45,
    sublabels: [{ value: '2', type: NodeItemLabelType.Years }, { value: '7,8', type: NodeItemLabelType.Version }],
    type: NodeItemType.Skill,
    label: { value: 'ElasticSearch' },
    background: { src: '/assets/img/elasticsearch.png' },
    colors: { primary: '#343741', secondary: '#00bfb3', hover: '#fec514' }
  }
}
