import { Temporal } from "@js-temporal/polyfill";
// Instant = exact point in time (like a timestamp, always UTC)
const now = Temporal.Now.instant();
console.log(now.toString()); // e.g. 2025-08-22T11:20:45.123Z

// ZonedDateTime = exact time in a specific timezone
const here = Temporal.Now.zonedDateTimeISO();
console.log(here.toString()); // e.g. 2025-08-22T16:50:12.345+05:30[Asia/Kolkata]

// PlainDate = calendar date only (no time or zone)
const today = Temporal.Now.plainDateISO();
console.log(today.toString()); // "2025-08-22"
