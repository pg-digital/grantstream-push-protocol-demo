import { isAfter, isBefore } from "date-fns";
import { format, utcToZonedTime } from "date-fns-tz";
import { TeamMember, Time } from "./types";

export function getCurrentTimeZone() {
  return Intl.DateTimeFormat().resolvedOptions().timeZone;
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

export function getDateAtStartOfHours(time: Time, tz?: string) {
  const date = new Date();
  date.setMilliseconds(0);
  date.setHours(time.hours);
  date.setMinutes(time.minutes || 0);

  if (tz) {
    return utcToZonedTime(date, tz);
  }

  return date;
}

export function formatAvailableTime({
  tz,
  endTime,
  startTime,
}: TeamMember["available"]) {
  const formatStr = "K aaa";
  const timeZone = getCurrentTimeZone();
  const end = format(getDateAtStartOfHours(endTime, tz), formatStr, {
    timeZone,
  });

  const start = format(getDateAtStartOfHours(startTime, tz), formatStr, {
    timeZone,
  });

  return `${start} - ${end}`;
}

export function isMemberAvailable({
  tz,
  endTime,
  startTime,
}: TeamMember["available"]) {
  const timeZone = getCurrentTimeZone();
  const end = getDateAtStartOfHours(endTime, tz);
  const start = getDateAtStartOfHours(startTime, tz);
  const timeNow = utcToZonedTime(new Date(), timeZone);
  return isAfter(timeNow, start) && isBefore(timeNow, end);
}
