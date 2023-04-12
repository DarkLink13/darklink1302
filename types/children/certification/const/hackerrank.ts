import { INode } from '../../../core'

export const HackerRankAngularIntermediate: INode = {
  item: {
    id: 'angularintermediate',
    type: NodeItemType.Default,
    background: { src: '/assets/img/angular2.png' },
    sublabels: [
      { value: 'ID: 79dae210a5c7', type: NodeItemLabelType.Link, subvalue: 'https://www.hackerrank.com/certificates/79dae210a5c7' },
      { value: '21-09-2022', type: NodeItemLabelType.Date }
    ],
    colors: { primary: '#c4002b', secondary: '#de002d', hover: '#ec5f5f' }
  }
}

export const HackerRankProblemSolvingBasic: INode = {
  item: {
    id: 'problemsolvingbasic',
    type: NodeItemType.Default,
    icon: { key: 'carbon:boolean' },
    colors: {
      primary: '#1000b5', secondary: '#0043ff', hover: '#0090f9'
    },
    sublabels: [
      { value: 'ID: b54e92826714', type: NodeItemLabelType.Link, subvalue: 'https://www.hackerrank.com/certificates/b54e92826714' },
      { value: '19-01-2022', type: NodeItemLabelType.Date }
    ]
  }
}

export const HackerRankJavaScriptBasic: INode = {
  item: {
    id: 'javascriptbasic',
    type: NodeItemType.Default,
    background: { src: '/assets/img/javascript.png' },
    colors: { primary: '#e8960f', secondary: '#f7d800', hover: '#f7e771' },
    sublabels: [
      { value: 'ID: 757933f8c987', type: NodeItemLabelType.Link, subvalue: 'https://www.hackerrank.com/certificates/757933f8c987' },
      { value: '19-01-2022', type: NodeItemLabelType.Date }
    ]
  }
}

export const HackerRankPythonBasic: INode = {
  item: {
    id: 'pythonbasic',
    type: NodeItemType.Default,
    background: { src: '/assets/img/python.png' },
    colors: { primary: '#336d9e', secondary: '#202124', hover: '#f7d54d' },
    sublabels: [
      { value: 'ID: f4b6eac84565', type: NodeItemLabelType.Link, subvalue: 'https://www.hackerrank.com/certificates/f4b6eac84565' },
      { value: '18-01-2022', type: NodeItemLabelType.Date }
    ]
  }
}

export const HackerRankNodeBasic: INode = {
  item: {
    id: 'nodebasic',
    type: NodeItemType.Default,
    background: { src: '/assets/img/nodejs.png' },
    colors: { primary: '#313131', secondary: '#4e8e49', hover: '#78c839' },
    sublabels: [
      { value: 'ID: e2f6e0262fbd', type: NodeItemLabelType.Link, subvalue: 'https://www.hackerrank.com/certificates/e2f6e0262fbd' },
      { value: '19-01-2022', type: NodeItemLabelType.Date }
    ]
  }
}

export const CertificationHackerRank: INode = {
  item: {
    id: 'hackerrank',
    type: NodeItemType.Default,
    label: { value: 'HackerRank' },
    background: { src: '/assets/img/hackerrank.png' },
    colors: {
      primary: '#39424e',
      secondary: '#008143',
      hover: '#32c766'
    }
  },
  children: [
    HackerRankAngularIntermediate,
    HackerRankJavaScriptBasic,
    HackerRankNodeBasic,
    HackerRankProblemSolvingBasic,
    HackerRankPythonBasic
  ]
}
