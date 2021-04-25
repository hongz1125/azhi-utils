/**
 * 根据id返回value
 * @param Array [{value:1,label:"xxxx"},...]
 * @example xxx | getText(Array)
 */
 export function getLabel(value, Arr = [], key = "value", nameKey = "label") {
  const match = Arr.find(item => {
    return item[key] === value;
  });
  return match ? match[nameKey] : "";
}

