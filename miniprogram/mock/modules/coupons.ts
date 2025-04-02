import { CouponItem } from '../../interfaces/coupon'

export const mockCoupons: CouponItem[] = [
  {
    id: '1',
    amount: 20,
    type: 'cash',
    title: '新客专享券',
    threshold: 50,
    validDate: '2024-06-30 ~ 2024-07-30',
    statusClass: 'active',
    tagText: '可使用',
    isExpired: false
  },
  {
    id: '2',
    amount: 10,
    type: 'cash',
    title: '专属专享券',
    threshold: 20,
    validDate: '2024-06-30 ~ 2024-07-30',
    statusClass: 'active',
    tagText: '可使用',
    isExpired: false
  },
  {
    id: '3',
    amount: 10,
    type: 'cash',
    title: '新客专享券',
    threshold: 50,
    validDate: '2024-06-30 ~ 2024-07-30',
    statusClass: 'active',
    tagText: '可使用',
    isExpired: false
  },
  // 更多模拟数据...
]