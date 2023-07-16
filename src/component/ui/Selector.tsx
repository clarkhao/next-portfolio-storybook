"use client";
import SelectorUI from "../../stories/ui/Selector/Selector";
import type { TSelect } from "../../stories/ui/Selector/Selector";
//hooks
import { useParams, useRouter } from "next/navigation";

interface SelectorProps {}

export default function Selector({ ...props }: SelectorProps) {
  const params = useParams();
  const router = useRouter();
  return <SelectorUI gotoUrl={router.push} routerLocale={params.locale} />;
}
