import { getContent } from '@/lib/getContent';
import { AnimatedSection } from '@/components/animations/AnimatedSection';
import { ProgramCard } from '@/components/programs/ProgramCards';
import PageHero from '@/components/PageHero';

export const revalidate = 0;

type Experience = {
  name?: string;
  tagline?: string;
  description?: string;
  perfectFor?: string;
  idealFor?: string[];
  modules?: string[];
  badge?: string;
  icon?: string;
};

type ProgramsContent = {
  hero?: {
    badge?: string;
    title?: string;
    subtitle?: string;
    description?: string;
  };
  experiences?: Experience[];
};

export default async function ExperiencesPage() {
  const programsSection = await getContent('programs');
  const siteSection = await getContent('site');
  const programs =
    (programsSection as ProgramsContent | null) ||
    ((siteSection as { programs?: ProgramsContent } | null)?.programs) ||
    {};

  const experiences = Array.isArray(programs.experiences) ? programs.experiences : [];
  const heroBadge = programs.hero?.badge || 'Experiences';

  return (
    <div className="bg-[var(--color-bg-primary)]">
      {/* Hero Section */}
      <PageHero
        className="bg-[hsl(235,52%,27%)] py-24"
        wrapContent={(content) => (
          <AnimatedSection className="text-center" type="fadeInUp">
            {content}
          </AnimatedSection>
        )}
        decorations={
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          </div>
        }
        badge={{ icon: '🎵', label: heroBadge }}
        title={programs.hero?.title}
        subtitle={programs.hero?.subtitle}
        description={
          programs.hero?.description ||
          'From corporate drum circles to custom experiences, we create moments that energize, connect, and inspire.'
        }
        titleClassName="text-5xl md:text-7xl font-black mb-6 tracking-tight !text-white"
        subtitleClassName="text-2xl md:text-3xl mb-6 font-semibold !text-white"
        descriptionClassName="text-lg md:text-xl max-w-3xl mx-auto !text-white/90 leading-relaxed"
      />

      {/* Experience Sections */}
      {experiences.map((experience: Experience, index: number) => (
        <section
          key={index}
          className={`py-20 ${index % 2 === 0 ? 'bg-[var(--color-bg-primary)]' : 'bg-[var(--color-bg-secondary)]'}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {experience.modules ? (
              <ProgramCard
                title={experience.name || ''}
                subtitle={experience.tagline || ''}
                description={experience.description || ''}
                perfectFor=""
                idealFor={experience.modules || []}
                badge={experience.badge || ''}
                badgeColor={
                  index % 3 === 0
                    ? 'bg-[var(--color-brand-accent)]/20 text-[var(--color-brand-secondary)]'
                    : index % 3 === 1
                      ? 'bg-green-100 text-green-700'
                      : 'bg-purple-100 text-purple-700'
                }
                gradientColors={
                  index % 3 === 0
                    ? 'bg-gradient-to-br from-yellow-100 to-orange-100'
                    : index % 3 === 1
                      ? 'bg-gradient-to-br from-green-100 to-teal-100'
                      : 'bg-gradient-to-br from-purple-100 to-indigo-100'
                }
                iconBg={
                  index % 3 === 0
                    ? 'bg-gradient-to-br from-yellow-500 to-orange-600'
                    : index % 3 === 1
                      ? 'bg-gradient-to-br from-green-500 to-teal-600'
                      : 'bg-gradient-to-br from-purple-500 to-indigo-600'
                }
                icon={experience.icon || (index === 0 ? 'A' : index === 1 ? 'B' : 'C')}
                order={index % 2 === 1 ? 'order-2' : undefined}
              />
            ) : (
              <ProgramCard
                title={experience.name || ''}
                subtitle={experience.tagline || ''}
                description={experience.description || ''}
                perfectFor={experience.perfectFor || ''}
                idealFor={experience.idealFor || []}
                badge={experience.badge || ''}
                badgeColor={
                  index % 3 === 0
                    ? 'bg-[var(--color-brand-accent)]/20 text-[var(--color-brand-secondary)]'
                    : index % 3 === 1
                      ? 'bg-green-100 text-green-700'
                      : 'bg-purple-100 text-purple-700'
                }
                gradientColors={
                  index % 3 === 0
                    ? 'bg-gradient-to-br from-yellow-100 to-orange-100'
                    : index % 3 === 1
                      ? 'bg-gradient-to-br from-green-100 to-teal-100'
                      : 'bg-gradient-to-br from-purple-100 to-indigo-100'
                }
                iconBg={
                  index % 3 === 0
                    ? 'bg-gradient-to-br from-yellow-500 to-orange-600'
                    : index % 3 === 1
                      ? 'bg-gradient-to-br from-green-500 to-teal-600'
                      : 'bg-gradient-to-br from-purple-500 to-indigo-600'
                }
                icon={experience.icon || (index === 0 ? 'A' : index === 1 ? 'B' : index === 2 ? 'C' : index === 3 ? 'D' : 'E')}
                order={index % 2 === 1 ? 'order-2' : undefined}
              />
            )}
          </div>
        </section>
      ))}
    </div>
  );
}
