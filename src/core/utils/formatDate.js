const persianDateFormatter = new Intl.DateTimeFormat("fa-IR-u-ca-persian", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

export function formatDate(date) {
  return persianDateFormatter.format(new Date(date));
}
