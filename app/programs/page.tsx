import { getAllSiteContent } from '@/lib/getContent';
import { AnimatedSection } from '@/components/animations/AnimatedSection';
import { ProgramCard, CustomExperience } from '@/components/programs/ProgramCards';

export const revalidate = 0;

export default async function ExperiencesPage() {
  const siteContent = await getAllSiteContent();
  const programs = (siteContent as any).programs || (siteContent as any).site?.programs || {};

  return (
    <div className="bg-[var(--color-bg-primary)]">
      {/* Hero Section */}
      <section className="relative bg-[hsl(235,52%,27%)] text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection className="text-center" type="fadeInUp">
            <AnimatedSection
              type="scaleIn"
              delay={0.2}
              className="inline-block mb-6"
            >
              <span className="bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm font-semibold">
                ⚡ High-Energy Experiences
              </span>
            </AnimatedSection>
            
            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight !text-white">
              {programs.hero?.title}
            </h1>
            <p className="text-2xl md:text-3xl mb-6 font-semibold !text-white">
              {programs.hero?.subtitle}
            </p>
            <p className="text-lg md:text-xl max-w-3xl mx-auto !text-white/90 leading-relaxed">
              {programs.hero?.description}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Corporate Drum Circles */}
      {programs.experiences && programs.experiences.map((experience: any, index: number) => (
        <section key={index} className={`py-20 ${index % 2 === 0 ? 'bg-[var(--color-bg-primary)]' : 'bg-[var(--color-bg-secondary)]'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {experience.modules ? (
              // Workplace Culture Experiences with modules
              <ProgramCard
                title={experience.name}
                subtitle={experience.tagline}
                description={experience.description}
                perfectFor=""
                idealFor={experience.modules || []}
                badge={index === 0 ? '🥁 Signature Experience' : `⚡ ${experience.name}`}
                badgeColor={index % 3 === 0 ? 'bg-[var(--color-brand-accent)]/20 text-[var(--color-brand-secondary)]' : index % 3 === 1 ? 'bg-green-100 text-green-700' : 'bg-purple-100 text-purple-700'}
                gradientColors={index % 3 === 0 ? 'bg-gradient-to-br from-yellow-100 to-orange-100' : index % 3 === 1 ? 'bg-gradient-to-br from-green-100 to-teal-100' : 'bg-gradient-to-br from-purple-100 to-indigo-100'}
                iconBg={index % 3 === 0 ? 'bg-gradient-to-br from-yellow-500 to-orange-600' : index % 3 === 1 ? 'bg-gradient-to-br from-green-500 to-teal-600' : 'bg-gradient-to-br from-purple-500 to-indigo-600'}
                icon={index === 0 ? '🥁' : index === 1 ? '🎵' : '✨'}
                order={index % 2 === 1 ? 'order-2' : undefined}
              />
            ) : (
              // Standard experiences
              <ProgramCard
                title={experience.name}
                subtitle={experience.tagline || ''}
                description={experience.description}
                perfectFor={experience.perfectFor || ''}
                idealFor={experience.idealFor || []}
                badge={index === 0 ? '🥁 Signature Experience' : `⚡ ${experience.name}`}
                badgeColor={index % 3 === 0 ? 'bg-[var(--color-brand-accent)]/20 text-[var(--color-brand-secondary)]' : index % 3 === 1 ? 'bg-green-100 text-green-700' : 'bg-purple-100 text-purple-700'}
                gradientColors={index % 3 === 0 ? 'bg-gradient-to-br from-yellow-100 to-orange-100' : index % 3 === 1 ? 'bg-gradient-to-br from-green-100 to-teal-100' : 'bg-gradient-to-br from-purple-100 to-indigo-100'}
                iconBg={index % 3 === 0 ? 'bg-gradient-to-br from-yellow-500 to-orange-600' : index % 3 === 1 ? 'bg-gradient-to-br from-green-500 to-teal-600' : 'bg-gradient-to-br from-purple-500 to-indigo-600'}
                icon={index === 0 ? '🥁' : index === 1 ? '🎵' : index === 2 ? '🏢' : index === 3 ? '🎉' : '🎨'}
                order={index % 2 === 1 ? 'order-2' : undefined}
              />
            )}
          </div>
        </section>
      ))}
    </div>
  );
}
