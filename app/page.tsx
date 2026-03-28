import { I18nProvider } from "@/components/i18n/I18nProvider";
import { Landing } from "@/components/Landing";

export default function Home() {
  return (
    <I18nProvider>
      <Landing />
    </I18nProvider>
  );
}
