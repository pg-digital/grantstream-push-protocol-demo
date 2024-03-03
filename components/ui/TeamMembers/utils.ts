import { isAfter, isBefore } from "date-fns";
import { format, utcToZonedTime, zonedTimeToUtc } from "date-fns-tz";
import { TeamMember, Time } from "./types";

function getCurrentTimeZone() {
  return Intl.DateTimeFormat().resolvedOptions().timeZone;
}

function convertDateToTimeZone(date: Date, fromTz: string, toTz: string) {
  return utcToZonedTime(zonedTimeToUtc(date, fromTz), toTz);
}

function getDateNowInTimeZone(tz: string) {
  return convertDateToTimeZone(new Date(), getCurrentTimeZone(), tz);
}

function getDateAtStartOfTime(time: Time, tz: string) {
  let date = getDateNowInTimeZone(tz);
  date.setMinutes(time.minutes || 0);
  date.setHours(time.hours);
  date.setMilliseconds(0);
  date.setSeconds(0);
  return date;
}

export function getAvatarFallback(name: TeamMember["name"]) {
  const [firstName, lastName] = name.split(" ");
  const hasLastName = lastName?.length > 0;

  if (hasLastName) {
    return `${firstName[0]}${lastName[0]}`.toUpperCase();
  }

  if (firstName?.length > 1) {
    return `${firstName[0]}${firstName[1]}`.toUpperCase();
  }

  if (firstName?.length > 0) {
    return `${firstName[0]}`.toUpperCase();
  }

  return "NA";
}

export function formatAvailableTime({
  tz,
  endTime,
  startTime,
}: TeamMember["available"]) {
  const formatStr = "h aaa";
  const end = format(
    zonedTimeToUtc(getDateAtStartOfTime(endTime, tz), tz),
    formatStr
  );

  const start = format(
    zonedTimeToUtc(getDateAtStartOfTime(startTime, tz), tz),
    formatStr
  );

  return `${start} - ${end}`;
}

export function isMemberAvailableNow({
  tz,
  endTime,
  startTime,
}: TeamMember["available"]) {
  const now = getDateNowInTimeZone(tz);
  const end = getDateAtStartOfTime(endTime, tz);
  const start = getDateAtStartOfTime(startTime, tz);
  return isAfter(now, start) && isBefore(now, end);
}
