import { INode } from '~~/types/core'

export const DotNet: INode = new CNode({
  item: {
    type: NodeItemType.Skill,
    label: { name: 'ASP.NET Framefork' },
    background: { src: '/assets/dotnet.png', ...IconDefault },
    colors: { primary: '#572b8a', secondary: '#027fbc', hover: '#2c98bd' }
  }
})
