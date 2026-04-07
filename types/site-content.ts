export type Branding = {
  logoDark?: string;
  logoLight?: string;
};

export type SiteTheme = 'light' | 'dark';

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
  branding?: Branding;
  theme?: SiteTheme;
  site?: {
    cta?: CtaContent;
    branding?: Branding;
    theme?: SiteTheme;
  };
};
