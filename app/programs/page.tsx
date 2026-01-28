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
      <section className="py-20 bg-[var(--color-bg-primary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProgramCard
            title="Corporate Drum Circles"
            subtitle="The fastest way to energise a room"
            description="A high-energy, music-led experience where everyone, CEO to intern, becomes part of one rhythm. Corporate drum circles are one of the fastest ways to energise a room, break silos, and create instant connection."
            perfectFor="Off-sites, annual meets, R&Rs, launch events, and culture days."
            idealFor={[
              'Energising burnout teams',
              'Breaking silos',
              'Boosting morale',
              'Making events unforgettable'
            ]}
            badge="🥁 Signature Experience"
            badgeColor="bg-[var(--color-brand-accent)]/20 text-[var(--color-brand-secondary)]"
            gradientColors="bg-gradient-to-br from-yellow-100 to-orange-100"
            iconBg="bg-gradient-to-br from-yellow-500 to-orange-600"
            icon="🥁"
          />
        </div>
      </section>

      {/* Team Building & Workshops */}
      <section className="py-20 bg-[var(--color-bg-secondary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProgramCard
            title="Team Building & Workshops"
            subtitle="Connection that sticks"
            description="Unlike traditional team-building activities, our rhythm-based workshops use music and movement to foster real collaboration, communication, and connection. Through interactive, hands-on sessions, teams learn to sync up, listen better, and work together—skills that go beyond the session and back into the workplace."
            perfectFor="Leadership programs, teamwork training, and culture-building initiatives."
            idealFor={[
              'Improving collaboration',
              'Building trust',
              'Breaking down hierarchies',
              'Strengthening team dynamics',
              'Energising virtual teams'
            ]}
            badge="🎵 Team Workshops"
            badgeColor="bg-green-100 text-green-700"
            gradientColors="bg-gradient-to-br from-green-100 to-teal-100"
            iconBg="bg-gradient-to-br from-green-500 to-teal-600"
            icon="🎵"
            order="order-2"
          />
        </div>
      </section>

      {/* Gamified Experiences */}
      <section className="py-20 bg-[var(--color-bg-primary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProgramCard
            title="Gamified Experiences"
            subtitle="Play, connect, compete, repeat"
            description="Gamification adds a layer of fun and engagement to team experiences. Whether it's rhythm challenges, team competitions, or interactive music games, our gamified sessions bring out the best in people—energy, collaboration, and creativity—while fostering healthy competition and deeper connection."
            perfectFor="Team engagement sessions, fun Fridays, and hybrid/virtual events."
            idealFor={[
              'Energising teams',
              'Fostering friendly competition',
              'Boosting participation',
              'Building a culture of belonging'
            ]}
            badge="🎮 Gamified Sessions"
            badgeColor="bg-purple-100 text-purple-700"
            gradientColors="bg-gradient-to-br from-purple-100 to-indigo-100"
            iconBg="bg-gradient-to-br from-purple-500 to-indigo-600"
            icon="✨"
          />
        </div>
      </section>

      {/* Community Experiences */}
      <section className="py-20 bg-[var(--color-bg-secondary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProgramCard
            title="Community Experiences"
            subtitle="Fun, memorable experiences for any celebration"
            description="From birthday parties and baby showers to weddings and large-scale fan engagement events like IPL activations, we design fun, memorable experiences that leave participants energised, connected, and fully immersed in the moment."
            perfectFor="Celebrations, private events, brand activations, and fan engagement."
            idealFor={[
              'Celebrations & private events',
              'Brand activations',
              'Fan engagement',
              'Wedding & pre-wedding events',
              'Community gatherings'
            ]}
            badge="🎊 Celebrations & Events"
            badgeColor="bg-pink-100 text-pink-700"
            gradientColors="bg-gradient-to-br from-pink-100 to-red-100"
            iconBg="bg-gradient-to-br from-pink-500 to-pink-700"
            icon="🎉"
            order="order-2"
          />
        </div>
      </section>
    </div>
  );
}
