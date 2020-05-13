export const availableRegions = [
  {
    cityName: '宜蘭縣',
    locationName: '龜山島',
    sunriseCityName: '宜蘭',
  },
  {
    cityName: '嘉義市',
    locationName: '嘉義市東區',
    sunriseCityName: '嘉義',
  },
  {
    cityName: '屏東縣',
    locationName: '枋山',
    sunriseCityName: '屏東',
  },
  {
    cityName: '雲林縣',
    locationName: '斗六',
    sunriseCityName: '屏東',
  },
  {
    cityName: '臺東縣',
    locationName: '向陽',
    sunriseCityName: '臺東',
  },
  {
    cityName: '臺北市',
    locationName: '平等',
    sunriseCityName: '臺北',
  },
  {
    cityName: '金門縣',
    locationName: '金沙',
    sunriseCityName: '金門',
  },
  {
    cityName: '桃園市',
    locationName: '楊梅',
    sunriseCityName: '桃園',
  },
  {
    cityName: '彰化縣',
    locationName: '埔鹽',
    sunriseCityName: '彰化',
  },
  {
    cityName: '嘉義縣',
    locationName: '大林',
    sunriseCityName: '嘉義',
  },
  {
    cityName: '高雄市',
    locationName: '鼓山',
    sunriseCityName: '高雄',
  },
  {
    cityName: '基隆市',
    locationName: '基隆嶼',
    sunriseCityName: '基隆',
  },
  {
    cityName: '臺南市',
    locationName: '安平',
    sunriseCityName: '臺南',
  },
  {
    cityName: '南投縣',
    locationName: '小奇萊',
    sunriseCityName: '南投',
  },
  {
    cityName: '臺中市',
    locationName: '南屯',
    sunriseCityName: '臺中',
  },
  {
    cityName: '新竹縣',
    locationName: '雪霸',
    sunriseCityName: '新竹',
  },
  {
    cityName: '花蓮縣',
    locationName: '玉里',
    sunriseCityName: '花蓮',
  },
  {
    cityName: '連江縣',
    locationName: '東引',
    sunriseCityName: '馬祖',
  },
  {
    cityName: '澎湖縣',
    locationName: '西嶼',
    sunriseCityName: '澎湖',
  },
  {
    cityName: '新北市',
    locationName: '三重',
    sunriseCityName: '新北市',
  },
];

export function findRegion(cityName) {
  return availableRegions.find(
    (regions) => regions.cityName === cityName,
  );
}
