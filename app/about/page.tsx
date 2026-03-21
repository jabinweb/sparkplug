import { getAllSiteContent } from '@/lib/getContent';
import { AnimatedSection, AnimatedCard } from '@/components/animations/AnimatedSection';
import { ValueCard, VisionMissionCard } from '@/components/about/AboutCards';
import Image from 'next/image';
import { TeamFooterNote } from '@/components/about/TeamFooterNote';

export const revalidate = 0;

type AboutValueItem = {
  title?: string;
  description?: string;
};

type TeamMember = {
  name?: string;
  role?: string;
  description?: string;
  photo?: string;
};

type AboutContent = {
  hero?: {
    title?: string;
    subtitle?: string;
    description?: string;
  };
  foundingAspiration?: {
    title?: string;
    lead?: string;
    content?: string;
    image?: string;
    storyImage?: string;
  };
  vision?: string;
  mission?: string;
  values?: AboutValueItem[];
  whatMakesDifferent?: {
    title?: string;
    items?: AboutValueItem[];
  };
  team?: {
    title?: string;
    subtitle?: string;
    members?: TeamMember[];
  };
  founder?: {
    title?: string;
    content?: string;
  };
};

export default async function AboutPage() {
  const siteContent = await getAllSiteContent();
  const siteContentRecord = siteContent as Record<string, unknown>;
  const siteSection = siteContentRecord.site as { about?: AboutContent } | undefined;
  const about = (siteContentRecord.about as AboutContent | undefined) || siteSection?.about || {};
  const team = about.team || {};
  const rawTeamMembers = team.members;
  const teamMembers = Array.isArray(rawTeamMembers)
    ? rawTeamMembers
    : rawTeamMembers && typeof rawTeamMembers === 'object'
      ? (Object.values(rawTeamMembers) as TeamMember[])
      : [];
  const storyImage =
    about.foundingAspiration?.image ||
    about.foundingAspiration?.storyImage ||
    'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80';

  return (
    <div className="bg-[var(--color-bg-primary)]">
      {/* Hero Section */}
      <section className="relative bg-[hsl(235,52%,27%)] text-white pt-24 pb-16 sm:pb-24 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[var(--color-brand-accent)]/10 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center" type="fadeInUp">
            <AnimatedSection
              type="scaleIn"
              delay={0.2}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm border border-white/30 text-white text-sm font-medium rounded-full mb-8"
            >
              <span aria-hidden="true">🎯</span>
              <span>Who We Are</span>
            </AnimatedSection>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white">
              {about.hero?.title}
            </h1>
            <p className="text-xl md:text-2xl mb-6 font-light max-w-4xl mx-auto leading-relaxed">
              {about.hero?.subtitle}
            </p>
            {about.hero?.description && (
              <div 
                className="prose prose-lg dark:prose-invert max-w-3xl mx-auto text-white"
                dangerouslySetInnerHTML={{ __html: about.hero.description }}
              />
            )}
          </AnimatedSection>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-[var(--color-bg-primary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* <AnimatedSection className="text-center mb-16" viewport={true}>
            <div className="inline-flex items-center px-4 py-2 bg-[var(--color-brand-primary)]/10 text-[var(--color-brand-primary)] rounded-full text-sm font-medium mb-6">
              Our Beginning
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-text-primary)] mb-8 leading-tight">
              {about.foundingAspiration?.title}
            </h2>
          </AnimatedSection> */}

          <AnimatedCard
            className="bg-gradient-to-br from-[var(--color-bg-secondary)] to-[var(--color-bg-primary)] rounded-3xl p-8 md:p-12 shadow-xl border border-[var(--color-brand-primary)]/10"
            delay={0.2}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden border border-[var(--color-brand-primary)]/20 shadow-lg">
                <Image
                  src={storyImage}
                  alt={about.foundingAspiration?.title || 'Our Story'}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              <div className="prose prose-lg dark:prose-invert max-w-none">
                {about.foundingAspiration?.lead && (
                  <div 
                    className="text-xl md:text-2xl font-medium text-[var(--color-text-primary)] mb-6"
                    dangerouslySetInnerHTML={{ __html: about.foundingAspiration.lead }}
                  />
                )}
                {about.foundingAspiration?.content && (
                  <div 
                    className="text-[var(--color-text-secondary)] leading-relaxed prose-p:mb-4 overflow-hidden"
                    dangerouslySetInnerHTML={{ __html: about.foundingAspiration.content }}
                  />
                )}
              </div>
            </div>
          </AnimatedCard>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-[var(--color-bg-primary)]">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <VisionMissionCard
              type="vision"
              title="Our Vision"
              content={about.vision || ''}
            />

            <VisionMissionCard
              type="mission"
              title="Our Mission"
              content={about.mission || ''}
            />
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 bg-[var(--color-bg-secondary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16" viewport={true}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-brand-primary)]/10 text-[var(--color-brand-primary)] rounded-full text-sm font-medium mb-6">
              <span aria-hidden="true">✨</span>
              <span>Built Differently</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-text-primary)] mb-8 leading-tight">
              {about.whatMakesDifferent?.title || 'What Makes Sparkplug Different'}
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {(about.whatMakesDifferent?.items || about.values || []).map((value: AboutValueItem, index: number) => (
              <ValueCard
                key={index}
                title={value.title || ''}
                description={value.description || ''}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      {teamMembers.length > 0 && (
        <section className="py-20 bg-[var(--color-bg-primary)]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-16" viewport={true}>
              {team.title && (
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-brand-primary)]/10 text-[var(--color-brand-primary)] rounded-full text-sm font-medium mb-6">
                  <span>👥 {team.title}</span>
                </div>
              )}
              {team.subtitle && (
                <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-text-primary)] mb-4 leading-tight">
                  {team.subtitle}
                </h2>
              )}
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {teamMembers.map((member, index) => {
                const stripHtml = (html: string) => {
                  if (typeof window === 'undefined') return html; // Fallback for SSR if needed
                  const tmp = document.createElement('DIV');
                  tmp.innerHTML = html;
                  return tmp.textContent || tmp.innerText || '';
                };
                
                // Server-side safe version using regex as fallback or primary
                const cleanDescription = member.description ? member.description.replace(/<[^>]*>?/gm, '') : '';

                return (
                  <AnimatedCard
                    key={`${member.name || 'member'}-${index}`}
                    className="bg-[var(--color-bg-secondary)] rounded-3xl p-6 md:p-8 shadow-lg border border-[var(--color-brand-primary)]/10"
                    delay={index * 0.1}
                  >
                    <div className="flex flex-col sm:flex-row gap-6">
                      {member.photo && (
                        <div className="relative w-full sm:w-40 aspect-[3/4] sm:aspect-auto sm:h-48 rounded-2xl overflow-hidden border border-[var(--color-brand-primary)]/20 shadow-md">
                          <Image
                            src={member.photo}
                            alt={member.name || 'Team member'}
                            fill
                            sizes="(max-width: 640px) 100vw, 160px"
                            className="object-cover object-top"
                          />
                        </div>
                      )}
                      <div className="flex-1">
                        {member.name && (
                          <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-2">
                            {member.name}
                          </h3>
                        )}
                        {member.role && (
                          <p className="text-[var(--color-brand-secondary)] font-semibold mb-3">
                            {member.role}
                          </p>
                        )}
                        {cleanDescription && (
                          <p className="text-[var(--color-text-secondary)] leading-relaxed">
                            {cleanDescription}
                          </p>
                        )}
                      </div>
                    </div>
                  </AnimatedCard>
                );
              })}
            </div>

            {/* Team Footer Note */}
            <TeamFooterNote />
          </div>
        </section>
      )}



      {/* Meet the Founder - Placeholder */}
      {/* <section className="py-20 bg-[var(--color-bg-secondary)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center" viewport={true}>
            <div className="inline-flex items-center px-4 py-2 bg-[var(--color-brand-primary)]/10 text-[var(--color-brand-primary)] rounded-full text-sm font-medium mb-6">
              Leadership
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-text-primary)] mb-8 leading-tight">
              {about.founder?.title || 'Meet the Founder'}
            </h2>
            <div className="bg-[var(--color-bg-primary)] p-12 rounded-2xl shadow-lg border border-[var(--color-brand-primary)]/10">
              <p className="text-[var(--color-text-secondary)] text-lg">
                {about.founder?.content || 'Coming soon...'}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section> */}
    </div>
  );
}
