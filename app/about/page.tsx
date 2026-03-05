import { getAllSiteContent } from '@/lib/getContent';
import { AnimatedSection, AnimatedCard } from '@/components/animations/AnimatedSection';
import { ValueCard, VisionMissionCard } from '@/components/about/AboutCards';
import Image from 'next/image';

export const revalidate = 0;

type AboutValueItem = {
  title?: string;
  description?: string;
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
              className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm border border-white/30 text-white text-sm font-medium rounded-full mb-8"
            >
              🎯 Who We Are
            </AnimatedSection>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white">
              {about.hero?.title}
            </h1>
            <p className="text-xl md:text-2xl mb-6 font-light max-w-4xl mx-auto leading-relaxed">
              {about.hero?.subtitle}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-[var(--color-bg-primary)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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

              <div className="prose prose-lg max-w-none">
                {about.foundingAspiration?.lead && (
                  <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg md:text-xl">
                    {about.foundingAspiration.lead}
                  </p>
                )}
                {about.foundingAspiration?.content && (
                  <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg mt-6">
                    {about.foundingAspiration.content}
                  </p>
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
            <div className="inline-flex items-center px-4 py-2 bg-[var(--color-brand-primary)]/10 text-[var(--color-brand-primary)] rounded-full text-sm font-medium mb-6">
              Built Differently
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
