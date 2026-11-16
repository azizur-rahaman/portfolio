"use client";

import { useEffect, useState } from "react";

interface LocalTimeProps {
  location: string;
  timeZone: string;
}

export default function LocalTime({ location, timeZone }: LocalTimeProps) {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const update = () => {
      const formatted = new Intl.DateTimeFormat("en-GB", {
        timeZone,
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }).format(new Date());
      setTime(formatted);
    };

    update();
    const timer = window.setInterval(update, 30_000);
    return () => window.clearInterval(timer);
  }, [timeZone]);

  return (
    <p className="text-[12px] leading-[18px] text-[var(--color-text-secondary)] mt-0.5 tabular-nums">
      {location}
      {time ? ` · ${time} local time` : ""}
    </p>
  );
}
