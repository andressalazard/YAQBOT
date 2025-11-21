const formatDatetoYYYYMMDD = (DateString: string) => {
  const date = new Date(DateString);

  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');

  return `${year}${month}${day}`;
};

const getCurrentDate = (): string => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.toLocaleString('es-ES', { month: 'short' }).toUpperCase();
  const day = date.getDate().toString().padStart(2, '0');

  return `${day} ${month} ${year}`;
};

const getCurrentHour = (): string => {
  const date = new Date();
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');

  return `${hours}:${minutes}`;
};

const getNextHour = (hoursToAdd: number): string => {
  const date = new Date();
  date.setHours(date.getHours() + hoursToAdd);
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');

  return `${hours}:${minutes}`;
};

const getListOfNextHours = (numberOfHours: number, periodInterval: number): string[] => {
  const hourslist: string[] = [];
  for (let i = 1; i <= numberOfHours; i++) {
    hourslist.push(getNextHour(i * periodInterval));
  }
  return hourslist;
};

export { formatDatetoYYYYMMDD as formatDate, getCurrentDate, getCurrentHour, getListOfNextHours };
