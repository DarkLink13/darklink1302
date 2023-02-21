import { WorkPositionType } from './type'
import { INode } from '~~/types/core'

export interface IWorkPositionDetail {
  type: WorkPositionType
  startDate: Date
  endDate: Date | undefined
  skills: INode
}
