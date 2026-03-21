export type Branding = {
  logoDark?: string;
  logoLight?: string;
};

export type CtaContent = {
  badge?: string;
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
};

export type SiteContent = {
  cta?: CtaContent;
  site?: {
    cta?: CtaContent;
    branding?: Branding;
  };
};
