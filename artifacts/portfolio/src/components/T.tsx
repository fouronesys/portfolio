import { useLang } from "@/i18n/LanguageContext";
import type { TKey } from "@/i18n/LanguageContext";
import { ScrambleText } from "./ScrambleText";

type Props = {
  k: TKey;
  className?: string;
  scramble?: boolean;
};

export function T({ k, className, scramble = true }: Props) {
  const { t } = useLang();
  const value = t(k);
  if (!scramble) return <span className={className}>{value}</span>;
  return <ScrambleText className={className}>{value}</ScrambleText>;
}
