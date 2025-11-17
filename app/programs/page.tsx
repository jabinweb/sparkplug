import siteContent from '../../content/site-content.json';

interface Program {
  name: string;
  description: string;
}

export default function ProgramsPage() {
  const { programs } = siteContent;

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-brand-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {programs.hero.title}
            </h1>
            <p className="text-xl md:text-2xl mb-4 font-light">
              {programs.hero.subtitle}
            </p>
            <p className="text-lg max-w-3xl mx-auto">
              {programs.hero.description}
            </p>
          </div>
        </div>
      </section>

      {/* Three Pillars Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Four High-Energy Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From corporate team building to drum circles, we create experiences that energize, connect, and inspire
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-brand-primary rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-white">A</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{programs.activatingExisting.name}</h3>
              <p className="text-sm text-brand-primary font-medium mb-4">{programs.activatingExisting.tagline}</p>
              <p className="text-gray-600 mb-6">{programs.activatingExisting.description}</p>
              <div className="space-y-3">
                {programs.activatingExisting.programs.map((program: Program, index: number) => (
                  <div key={index} className="border-l-3 border-brand-primary pl-4">
                    <h4 className="font-semibold text-gray-900">{program.name}</h4>
                    <p className="text-sm text-gray-600">{program.description}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-500 mb-2">Target: {programs.activatingExisting.targetAudience}</p>
                <p className="text-sm font-medium text-brand-primary">{programs.activatingExisting.callToAction}</p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-brand-secondary rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-white">B</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{programs.buildingOriginal.name}</h3>
              <p className="text-sm text-brand-secondary font-medium mb-4">{programs.buildingOriginal.tagline}</p>
              <p className="text-gray-600 mb-6">{programs.buildingOriginal.description}</p>
              <div className="space-y-3">
                {programs.buildingOriginal.programs.map((program: Program, index: number) => (
                  <div key={index} className="border-l-3 border-brand-secondary pl-4">
                    <h4 className="font-semibold text-gray-900">{program.name}</h4>
                    <p className="text-sm text-gray-600">{program.description}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-500 mb-2">Target: {programs.buildingOriginal.targetAudience}</p>
                <p className="text-sm font-medium text-brand-secondary">{programs.buildingOriginal.callToAction}</p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-white">C</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{programs.catalysingConversations.name}</h3>
              <p className="text-sm text-gray-800 font-medium mb-4">{programs.catalysingConversations.tagline}</p>
              <p className="text-gray-600 mb-6">{programs.catalysingConversations.description}</p>
              <div className="space-y-3">
                {programs.catalysingConversations.programs.map((program: Program, index: number) => (
                  <div key={index} className="border-l-3 border-gray-800 pl-4">
                    <h4 className="font-semibold text-gray-900">{program.name}</h4>
                    <p className="text-sm text-gray-600">{program.description}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-500 mb-2">Target: {programs.catalysingConversations.targetAudience}</p>
                <p className="text-sm font-medium text-gray-800">{programs.catalysingConversations.callToAction}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Impact */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Sparkplug?
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Trusted by world-class brands across India for high-energy experiences that transform teams
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Proven Track Record</h3>
              <p className="text-gray-600">200+ activities delivered to 70,000+ participants across India</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Prestigious Clients</h3>
              <p className="text-gray-600">Trusted by Google, Microsoft, Deloitte, EY, PwC, and many more</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Unique Edge</h3>
              <p className="text-gray-600">Exclusive activities, music facilitation, and high-energy engagement</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}