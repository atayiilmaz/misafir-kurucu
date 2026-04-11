import { Navigate, useParams } from "react-router-dom";
import {
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

  return (
    <>
      <ProgramHeroScene program={program} />

      {program.benefits ? (
        <div className={sectionBands.blue}>
          <ProgramListScene
            eyebrow={program.name}
            title={program.benefits.title}
            items={program.benefits.items}
            image={program.storyImage}
            imageAlt={program.storyImageAlt}
            dark
          />
        </div>
      ) : null}

      {program.audience ? (
        <div className={sectionBands.orange}>
          <ProgramListScene
            eyebrow={program.name}
            title={program.audience.title}
            items={program.audience.items}
            image={program.audienceImage}
            imageAlt={program.audienceImageAlt}
            imageOnRight
          />
        </div>
      ) : null}

      {program.narrative ? (
        <div className={sectionBands.blue}>
          <ProgramNarrativeScene
            title={program.narrative.title}
            paragraphs={program.narrative.paragraphs}
            image={program.storyImage}
            imageAlt={program.storyImageAlt}
          />
        </div>
      ) : null}

      {program.process ? (
        <div className={sectionBands.orange}>
          <ProgramProcessScene
            title={program.process.title}
            intro={program.process.intro}
            steps={program.process.steps}
            image={program.supportImage}
            imageAlt={program.supportImageAlt}
          />
        </div>
      ) : null}

      {program.package ? (
        <div className={sectionBands.blue}>
          <ProgramPackageScene
            title={program.package.title}
            items={program.package.items}
            image={program.audienceImage}
            imageAlt={program.audienceImageAlt}
          />
        </div>
      ) : null}

      {program.advisoryAreas ? (
        <div className={sectionBands.orange}>
          <ProgramListScene
            eyebrow={program.name}
            title={program.advisoryAreas.title}
            items={program.advisoryAreas.items}
            image={program.supportImage}
            imageAlt={program.supportImageAlt}
            dark
          />
        </div>
      ) : null}

      {program.support ? (
        <ProgramSupportScene
          title={program.support.title}
          columns={program.support.columns}
          image={program.supportImage}
          imageAlt={program.supportImageAlt}
        />
      ) : null}

    </>
  );
}
