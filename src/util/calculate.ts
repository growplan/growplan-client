import moment from "moment-timezone";

export function calculateWeeksSince(
  date: string,
  timezone: string = "Asia/Seoul"
): number {
  const startDate = moment.tz(date, "YYYY-MM-DD", timezone);
  const currentDate = moment.tz(timezone);
  const weeksSince = currentDate.diff(startDate, "weeks");
  return weeksSince;
}
