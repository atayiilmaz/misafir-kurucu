import { type ReactNode } from "react";
import { Navigate, useParams } from "react-router-dom";
import {
  ProgramAnalysisModesScene,
  ProgramBenefitCardsScene,
  ProgramHeroScene,
  ProgramListScene,
  ProgramNarrativeScene,
  ProgramPackageScene,
  ProgramProcessScene,
  ProgramSupportScene,
} from "@/components/programs/program-scenes";
import { programs, type ProgramSlug } from "@/content/programs";

const sectionBands = {
  blue:
    "bg-[linear-gradient(180deg,rgba(239,244,255,0.88),rgba(245,248,255,0.72))]",
  orange:
    "bg-[linear-gradient(180deg,rgba(255,246,240,0.92),rgba(255,250,246,0.76))]",
} as const;

export function ProgramDetailPage() {
  const { slug } = useParams();
  const program = slug ? programs[slug as ProgramSlug] : null;

  if (!program) {
    return <Navigate to="/" replace />;
  }

  const sections: Array<{ key: string; node: ReactNode }> = [];

  if (program.benefits) {
    sections.push({
      key: "benefits",
      node: (
        <ProgramBenefitCardsScene
          title={program.benefits.title}
          intro={program.benefits.intro}
          cards={program.benefits.cards}
          outro={program.benefits.outro}
        />
      ),
    });
  }

  if (program.audience) {
    sections.push({
      key: "audience",
      node: (
        <ProgramListScene
          title={program.audience.title}
          intro={program.audience.intro}
          items={program.audience.items}
          image={program.audienceImage}
          imageAlt={program.audienceImageAlt}
          dark
        />
      ),
    });
  }

  if (program.process) {
    sections.push({
      key: "process",
      node: (
        <ProgramProcessScene
          title={program.process.title}
          intro={program.process.intro}
          steps={program.process.steps}
          image={program.supportImage}
          imageAlt={program.supportImageAlt}
        />
      ),
    });
  } else if (program.narrative) {
    sections.push({
      key: "narrative-primary",
      node: (
        <ProgramNarrativeScene
          title={program.narrative.title}
          paragraphs={program.narrative.paragraphs}
          image={program.storyImage}
          imageAlt={program.storyImageAlt}
          imageOnRight={program.slug === "program-1"}
        />
      ),
    });
  }

  if (program.analysisModes) {
    sections.push({
      key: "analysis-modes",
      node: (
        <ProgramAnalysisModesScene
          title={program.analysisModes.title}
          columns={program.analysisModes.columns}
        />
      ),
    });
  }

  if (program.package) {
    sections.push({
      key: "package",
      node: (
        <ProgramPackageScene
          title={program.package.title}
          items={program.package.items}
        />
      ),
    });
  }

  if (program.advisoryAreas) {
    sections.push({
      key: "advisory",
      node: (
        <ProgramListScene
          title={program.advisoryAreas.title}
          intro={program.advisoryAreas.intro}
          items={program.advisoryAreas.items}
          dark
        />
      ),
    });
  }

  if (program.process && program.narrative) {
    sections.push({
      key: "narrative-secondary",
      node: (
        <ProgramNarrativeScene
          title={program.narrative.title}
          paragraphs={program.narrative.paragraphs}
          image={program.storyImage}
          imageAlt={program.storyImageAlt}
        />
      ),
    });
  }

  if (program.support) {
    sections.push({
      key: "support",
      node: (
        <ProgramSupportScene
          title={program.support.title}
          columns={program.support.columns}
        />
      ),
    });
  }

  return (
    <>
      <ProgramHeroScene program={program} />
      {sections.map((section, index) => (
        <div
          key={section.key}
          className={index % 2 === 0 ? sectionBands.blue : sectionBands.orange}
        >
          {section.node}
        </div>
      ))}
    </>
  );
}
