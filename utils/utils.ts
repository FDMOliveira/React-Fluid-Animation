export const formatDateToPortuguese = (date: Date) => {
  const formatter = new Intl.DateTimeFormat('pt-PT', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });

  return formatter.format(new Date(date));
}

export const darkenColor = (color: string) => {
  let num = parseInt(color?.slice(1), 16),
      amt = Math.round(2.55 * 15),
      R = (num >> 16) - amt,
      G = (num >> 8 & 0x00FF) - amt,
      B = (num & 0x0000FF) - amt;

  // Ensure values are within the valid range
  R = (R < 255 ? (R < 1 ? 0 : R) : 255);
  G = (G < 255 ? (G < 1 ? 0 : G) : 255);
  B = (B < 255 ? (B < 1 ? 0 : B) : 255);

  return "#" + (0x1000000 + (R * 0x10000) + (G * 0x100) + B).toString(16).slice(1).toUpperCase();
}
