import { isAfter, isBefore } from "date-fns";
import { format, utcToZonedTime } from "date-fns-tz";
import { TeamMember } from "./types";

export function getCurrentTimeZone() {
  return Intl.DateTimeFormat().resolvedOptions().timeZone;
}

export function getAvatarFallback(name: TeamMember["name"]) {
  const splitNames = name.split(" ");
  const hasLastName = splitNames.length > 1;
  return `${splitNames[0][0]}${hasLastName ? splitNames[1][0] : ""}`;
}

export function getDateAtStartOfHours(hours: number, tz?: string) {
  const date = new Date();
  date.setMilliseconds(0);
  date.setHours(hours);
  date.setMinutes(0);

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
