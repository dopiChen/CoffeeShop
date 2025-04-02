//优惠券

export interface CouponItem {
  id: string
  amount: number
  type: 'cash' | 'discount'
  title: string
  threshold: number
  validDate: string
  statusClass: 'active' | 'used' | 'expired'
  tagText: string
  isExpired: boolean
}