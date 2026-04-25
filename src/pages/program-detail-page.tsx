import { type ReactNode } from "react";
import { Navigate, useParams } from "react-router-dom";
import {
  ProgramAnalysisModesScene,
  ProgramBenefitCardsScene,
  ProgramHeroScene,
  ProgramHowItWorksScene,
  ProgramListScene,
  ProgramNarrativeScene,
  ProgramPackageScene,
  ProgramProcessScene,
  ProgramSessionContentScene,
  ProgramSplitListScene,
  ProgramSupportScene,
  ProgramWhyMeScene,
} from "@/components/programs/program-scenes";
import { programs, type ProgramSlug } from "@/content/programs";
import { SITE_NAME, SITE_URL, absoluteUrl, useSeo } from "@/lib/seo";

const sectionBands = {
  blue:
    "bg-[#edf1f5]",
  orange:
    "",
} as const;

export function ProgramDetailPage() {
  const { slug } = useParams();
  const program = slug ? programs[slug as ProgramSlug] : null;

  useSeo({
    title: program ? program.name : "Program bulunamadı",
    description: program
      ? program.listingDescription
      : "Aradığınız program bulunamadı.",
    path: program?.href ?? "/programlar",
    image: program?.heroImage ?? "/images/herosection.jpeg",
    noindex: !program,
    keywords: program
      ? [program.name, program.listingSubtitle, "moda markası danışmanlığı"]
      : undefined,
    structuredData: program
      ? {
          "@context": "https://schema.org",
          "@type": "Service",
          name: program.name,
          description: program.listingDescription,
          provider: {
            "@type": "Organization",
            name: SITE_NAME,
            url: SITE_URL,
          },
          url: absoluteUrl(program.href),
          image: absoluteUrl(program.heroImage),
          areaServed: "TR",
          serviceType: "Moda markası danışmanlığı",
        }
      : undefined,
  });

  if (!program) {
    return <Navigate to="/" replace />;
  }

  const sections: Array<{ key: string; node: ReactNode }> = [];
  const strategicSplitBlocks =
    program.slug === "program-3" && program.audience && program.advisoryAreas
      ? { audience: program.audience, advisoryAreas: program.advisoryAreas }
      : null;

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

  if (strategicSplitBlocks) {
    sections.push({
      key: "strategic-audience-advisory",
      node: (
        <ProgramSplitListScene
          leftTitle={strategicSplitBlocks.audience.title}
          leftItems={strategicSplitBlocks.audience.items}
          rightTitle={strategicSplitBlocks.advisoryAreas.title}
          rightItems={strategicSplitBlocks.advisoryAreas.items}
        />
      ),
    });
  } else if (program.audience) {
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

  if (program.advisoryAreas && !strategicSplitBlocks) {
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

  if (program.support && program.slug !== "program-3") {
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

  if (program.howItWorks) {
    sections.push({
      key: "how-it-works",
      node: (
        <ProgramHowItWorksScene
          order={program.howItWorks.order}
          title={program.howItWorks.title}
          intro={program.howItWorks.intro}
          steps={program.howItWorks.steps}
        />
      ),
    });
  }

  if (program.sessionContent) {
    sections.push({
      key: "session-content",
      node: (
        <ProgramSessionContentScene
          title={program.sessionContent.title}
          cards={program.sessionContent.cards}
        />
      ),
    });
  }

  if (program.whyMe) {
    sections.push({
      key: "why-me",
      node: (
        <ProgramWhyMeScene
          title={program.whyMe.title}
          quote={program.whyMe.quote}
          accent={program.whyMe.accent}
          paragraphs={program.whyMe.paragraphs}
        />
      ),
    });
  }

  if (program.support && program.slug === "program-3") {
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
          className={[
            section.key === "how-it-works"
              ? sectionBands.orange
              : section.key === "session-content"
                ? sectionBands.blue
                : section.key === "why-me"
                  ? sectionBands.orange
              : index % 2 === 0
                ? sectionBands.blue
                : sectionBands.orange,
            index === 0 ? "[&>section]:py-20 [&>section]:md:py-28" : "",
          ].join(" ")}
        >
          {section.node}
        </div>
      ))}
    </>
  );
}
