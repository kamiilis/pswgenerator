import TopMessage from "@/components/HomePage/TopMessage/TopMessage";
import PassGen from "@/components/HomePage/PassGen/PassGen";
import Information from "@/components/HomePage/Information/Information";
import InfoAccordion from '../components/HomePage/InfoAccordion/InfoAccordion';

export default function HomePage() {
  return (
    <main>
      <TopMessage/>
      <PassGen />
      <Information />
      <InfoAccordion />
    </main>
  );
}
