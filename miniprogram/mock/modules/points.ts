import {PointsRecord} from '../../interfaces/points';

export const mockRecords: PointsRecord[] = [
  {
    id: "1",
    product: "美式咖啡",
    points: 100,
    time: "2024-03-15 09:30",
    type: "add",
    icon: "../../assets/images/美式咖啡.png" // 建议使用英文路径
  },
  {
    id: "2",
    product: "抹茶拿铁",
    points: 50,
    time: "2024-03-14 23:59",
    type: "reduce",
    icon: "../../assets/images/抹茶拿铁.png"
  },
  {
    id: "3",
    product: "拿铁",
    points: 30,
    time: "2024-03-14 23:59",
    type: "add",
    icon: "../../assets/images/拿铁咖啡.png"
  },
  {
    id: "4",
    product: "冰拿铁",
    points: 30,
    time: "2024-03-14 23:59",
    type: "add",
    icon: "../../assets/images/冰拿铁.png"
  }


]