
export const isFalsy = function (value) {
   return [undefined, null, '', false, 0].includes(value);
}

export const isEmpty = function (object) {
   return Object.keys(object).every(key => isFalsy(object[key]));
}

export const parseDate = function (dateString) {
   return typeof dateString === 'string' ? dateString.split('-').reverse().join('-') : '';
}