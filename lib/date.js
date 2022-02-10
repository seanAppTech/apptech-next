export default function dateConversion(date) {
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
      ]

      const monthIndex = date.getMonth();
      const monthName = months[monthIndex];

      const dateString = `${monthName} ${date.getDate()}, ${date.getFullYear()}`;
      return dateString;
}