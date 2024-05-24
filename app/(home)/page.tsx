import {
  Header,
  Cards,
  Premieres,
  Policity,
} from "@/components/sections/index";

export default function Home() {
  return (
    <main>
      <Header />
      <Cards />
      <Premieres />
      <Policity />
    </main>
  );
}

Home.noLayout = true;
