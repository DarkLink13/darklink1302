import { WorkType } from './type'

export interface IWorkDetail {
  type: WorkType
  startDate: Date
  endDate: Date | undefined
  location: string
  description: string
}
