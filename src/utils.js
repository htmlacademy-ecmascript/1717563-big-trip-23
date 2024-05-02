import dayjs from 'dayjs';

function humanizeDate(date, format) {
  return date ? dayjs(date).format(format) : '';
}

function convertTime(dateTo, dateFrom) {
  const time = dayjs(dateTo).diff(dayjs(dateFrom), 'minutes');
  return time ? `${Math.floor(time / 60)}H ${time % 60}M` : '';
}

export {humanizeDate, convertTime};
