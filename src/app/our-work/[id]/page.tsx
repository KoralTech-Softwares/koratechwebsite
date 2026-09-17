import { notFound } from "next/navigation";
import { PORTFOLIO_PROJECTS, PortfolioProject } from "@/lib/portfolio-content";
import { Metadata } from "next";
import CaseStudyDetailView from "@/components/CaseStudyDetailView";

interface CaseStudyPageProps {
  params: { id: string };
}

export async function generateStaticParams() {
  return PORTFOLIO_PROJECTS.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { id } = params;
  const project = PORTFOLIO_PROJECTS.find((p) => p.id === id);

  if (!project) {
    return {
      title: "Case Study Not Found — Koraltech Softwares",
    };
  }

  return {
    title: `${project.title} — Case Study | Koraltech Softwares`,
    description: project.description,
    openGraph: {
      title: `${project.title} — Case Study`,
      description: project.description,
      images: [project.image],
    },
  };
}

export default async function CaseStudyDetailPage({ params }: CaseStudyPageProps) {
  const { id } = params;
  const projectIndex = PORTFOLIO_PROJECTS.findIndex((p) => p.id === id);

  if (projectIndex === -1) {
    notFound();
  }

  const project: PortfolioProject = PORTFOLIO_PROJECTS[projectIndex];
  const prevProject =
    projectIndex > 0 ? PORTFOLIO_PROJECTS[projectIndex - 1] : PORTFOLIO_PROJECTS[PORTFOLIO_PROJECTS.length - 1];
  const nextProject =
    projectIndex < PORTFOLIO_PROJECTS.length - 1 ? PORTFOLIO_PROJECTS[projectIndex + 1] : PORTFOLIO_PROJECTS[0];

  return (
    <CaseStudyDetailView
      project={project}
      prevProject={prevProject}
      nextProject={nextProject}
    />
  );
}
