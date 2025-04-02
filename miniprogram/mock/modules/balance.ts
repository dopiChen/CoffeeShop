import { BalanceRecord } from '../../interfaces/balance'

export const mockBalance: BalanceRecord[] = [
    {
      id: "1",
      type: "income",
      amount: "500.00",
      time: "2024-03-15 14:30",
      channel: "微信支付"
    },
    {
      id: "2",
      type: "expense",
      amount: "198.00",
      time: "2024-03-14 09:15",
      channel: "星巴克门店"
    },
    {
      id: "3",
      type: "expense",
      amount: "98.00",
      time: "2024-03-14 09:15",
      channel: "星巴克门店"
    }
]