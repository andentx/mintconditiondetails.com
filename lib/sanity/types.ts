export type BlockContent = {
  _type: string;
  children: Array<{
    _type: string;
    text: string;
    marks?: string[];
  }>;
  markDefs?: any[];
  style?: string;
};

export type ServicesMenuSection = {
  title: string;
  subtitle: string;
  menuItems: MenuItem[];
  images: SanityImage[];
};

export type MenuItem = {
  title: string;
  index: string;
  description: BlockContent[];
  price: string;
};
export type MenuSectionProps = {
  title: string;
  subtitle: string;
  menuItems: MenuItem[];
  images: SanityImage[];
};

export type SanityImage = {
  asset: {
    _ref: string;
  };
};
