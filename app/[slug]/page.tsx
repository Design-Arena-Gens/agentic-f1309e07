import { notFound } from "next/navigation";
import { sections } from "../../content/sections";

type PageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  return Object.keys(sections).map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps) {
  const section = sections[params.slug];
  if (!section) {
    return {};
  }
  return {
    title: `${section.title} - أخطار المهنة`,
    description: section.summary
  };
}

export default function SectionPage({ params }: PageProps) {
  const section = sections[params.slug];

  if (!section) {
    notFound();
  }

  return (
    <article>
      <h2>{section.title}</h2>
      <p className="summary">{section.summary}</p>
      {section.paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </article>
  );
}
