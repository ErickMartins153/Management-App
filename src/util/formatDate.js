export function formatDate(date) {
  const dateString = date.split("-");
  const year = dateString[0];
  const month = dateString[1];
  const day = dateString[2];
  const months = [
    null,
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return `${months[+month]} ${day}, ${year}`;
}
