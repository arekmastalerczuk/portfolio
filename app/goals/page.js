import { Goal } from "@/components/Goal/Goal";

const GOALS = [
  {
    id: 1,
    expirationDate: "2024-12-31",
    goal: "Nauczyć się Next.js",
    description:
      "Przerobić kurs Next.js i stworzyć aplikację typu to-do list. Poznać kluczowe koncepcje, takie jak strony, komponenty, propsy, stan i cykl życia komponentu. Pracować z wbudowanym routerem Next.js do zarządzania trasami w aplikacji oraz z SWR lub Reduxem do zarządzania stanem globalnym. Zakończyć projekt z pełną funkcjonalnością, testami i wdrożeniem na platformie hostingowej, takiej jak Vercel.",
  },
  {
    id: 2,
    expirationDate: "2024-09-30",
    goal: "Opanować Tailwind CSS",
    description:
      "Nauczyć się korzystać z Tailwind CSS i zastosować go w projekcie strony portfolio. Zapoznać się z koncepcjami utility-first, skonfigurować Tailwind CSS w projekcie oraz poznać najlepsze praktyki dotyczące tworzenia stylów. Zaimplementować responsywny design, różne layouty i animacje. Stworzyć profesjonalnie wyglądającą stronę, która będzie prezentować moje projekty i umiejętności.",
  },
  {
    id: 3,
    expirationDate: "2024-11-15",
    goal: "Zrozumieć TypeScript",
    description:
      "Przerobić kurs TypeScript i wdrożyć go w projekcie frontendu. Poznać podstawowe typy, interfejsy, klasy oraz zasady programowania obiektowego w TypeScript. Zrozumieć, jak TypeScript może poprawić jakość kodu i zmniejszyć liczbę błędów. Przeanalizować i przepisać istniejący projekt JavaScript na TypeScript, testując każdą funkcjonalność. Stworzyć dokumentację dla projektu i przygotować go do wdrożenia.",
  },
  {
    id: 4,
    expirationDate: "2024-10-01",
    goal: "Stworzyć aplikację SPA",
    description:
      "Nauczyć się tworzenia aplikacji Single Page Application (SPA) z użyciem Vue.js. Poznać podstawy Vue.js, takie jak reakcja na dane, dyrektywy, komponenty i routing. Zaprojektować architekturę aplikacji SPA, implementując dynamiczne ładowanie danych oraz zarządzanie stanem za pomocą Vuex. Przeprowadzić testy jednostkowe i end-to-end dla kluczowych funkcji aplikacji. Wdrożyć gotową aplikację na platformie hostingowej.",
  },
  {
    id: 5,
    expirationDate: "2024-08-31",
    goal: "Opanować GraphQL",
    description:
      "Nauczyć się podstaw GraphQL i zintegrować go z projektem frontendu. Zrozumieć różnice między GraphQL a REST oraz zalety używania GraphQL w aplikacjach frontendowych. Przerobić kurs GraphQL, implementując zapytania, mutacje i subskrypcje. Stworzyć serwer GraphQL i zintegrować go z frontendem za pomocą Apollo Client. Zaimplementować funkcje autoryzacji i zarządzania danymi, testując aplikację pod kątem wydajności i bezpieczeństwa.",
  },
];

const TargetList = () => {
  return (
    <>
      <h1 className="page-header">Lista najbliższych celów</h1>
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        {GOALS.map((goal, index) => (
          <Goal
            key={goal.id}
            isEven={index % 2 === 0}
            goal={goal.goal}
            description={goal.description}
            expirationDate={goal.expirationDate}
          />
        ))}
      </ul>
    </>
  );
};

export default TargetList;
