import { cn } from '@/lib/utils';

type PageHeroBadge = {
  icon?: React.ReactNode;
  label: React.ReactNode;
};

type PageHeroProps = {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  decorations?: React.ReactNode;
  contentClassName?: string;
  wrapContent?: (content: React.ReactNode) => React.ReactNode;
  badge?: PageHeroBadge;
  badgeClassName?: string;
  title?: React.ReactNode;
  titleClassName?: string;
  subtitle?: React.ReactNode;
  subtitleClassName?: string;
  description?: React.ReactNode;
  descriptionClassName?: string;
};

export default function PageHero({
  children,
  className,
  containerClassName,
  decorations,
  contentClassName,
  wrapContent,
  badge,
  badgeClassName,
  title,
  titleClassName,
  subtitle,
  subtitleClassName,
  description,
  descriptionClassName,
}: PageHeroProps) {
  const defaultContent = (
    <div className={cn('text-center', contentClassName)}>
      {badge && (
        <span
          className={cn(
            'inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm border border-white/30 text-white text-sm font-medium rounded-full mb-8',
            badgeClassName
          )}
        >
          {badge.icon && <span aria-hidden="true">{badge.icon}</span>}
          <span>{badge.label}</span>
        </span>
      )}

      {title && (
        <h1
          className={cn(
            'text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white',
            titleClassName
          )}
        >
          {title}
        </h1>
      )}

      {subtitle && (
        <p
          className={cn(
            description ? 'text-xl md:text-2xl mb-6 font-light max-w-4xl mx-auto leading-relaxed' : 'text-xl md:text-2xl font-light max-w-4xl mx-auto leading-relaxed',
            subtitleClassName
          )}
        >
          {subtitle}
        </p>
      )}

      {description && (
        <div
          className={cn(
            'text-lg max-w-3xl mx-auto text-white/90',
            descriptionClassName
          )}
        >
          {description}
        </div>
      )}
    </div>
  );

  return (
    <section className={cn('relative text-white overflow-hidden', className)}>
      {decorations}
      <div
        className={cn(
          'relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
          containerClassName
        )}
      >
        {children ? children : wrapContent ? wrapContent(defaultContent) : defaultContent}
      </div>
    </section>
  );
}
