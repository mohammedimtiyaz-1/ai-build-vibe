"use client";

import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";

export default function Client() {
  const trpc = useTRPC();
  const { data } = useSuspenseQuery(
    trpc.hello.queryOptions({
      text: "World",
    })
  );

  return (
    <div>
      <h1>Client</h1>
      <p>{data.greeting}</p>
    </div>
  );
}
