// types/points.d.ts
//积分记录
export interface PointsRecord {
  id: string
  product: string
  points: number
  time: string
  type: 'add' | 'reduce'
  icon: string
}