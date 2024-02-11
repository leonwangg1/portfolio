import PageLayout from "../PageLayout";
import { LayoutGrid } from "../components/LayoutGrid";

export default function Home() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <div className="flex flex-col text-left mb-36 lg:mb-80">
        <div className="w-[95%] lg:w-[65%]">
          <p className="flex flex-row text-4xl lg:text-6xl mb-10">
            Hi, I'm Leon. 🧑🏻‍💻
          </p>
          <p className="text-pretty text-md lg:text-xl">
            A full stack developer & web designer who enjoys solving complex
            problems, coming up with intuitive solutions and learning new
            skills.
          </p>
        </div>
      </div>
      {/* Body */}
      <LayoutGrid />
    </PageLayout>
  );
}