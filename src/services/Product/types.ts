export interface Product {
  id: number;
  name: string;
  fullName: string;
  slug: string;
  sku: string;
  barcode: string | null;
  stockAmount: number;
  price1: number;
  currency: {
    id: number;
    label: string;
    abbr: string;
  };
  discount: number;
  discountType: number;
  moneyOrderDiscount: number;
  buyingPrice: number;
  marketPriceDetail: string | null;
  taxIncluded: number;
  tax: number;
  warranty: number;
  volumetricWeight: number;
  stockTypeLabel: string;
  customShippingDisabled: number;
  customShippingCost: number;
  distributor: string | null;
  hasGift: number;
  gift: string | null;
  status: number;
  hasOption: number;
  installmentThreshold: string;
  homeSortOrder: number | null;
  popularSortOrder: number | null;
  brandSortOrder: number | null;
  featuredSortOrder: number | null;
  campaignedSortOrder: number | null;
  newSortOrder: number | null;
  discountedSortOrder: number | null;
  categoryShowcaseStatus: number;
  midblockSortOrder: number | null;
  pageTitle: string;
  metaDescription: string;
  metaKeywords: string;
  canonicalUrl: string | null;
  parent: string | null;
  brand: string | null;
  detail: string | null;
  categories: any[];
  prices: any[];
  images: any[];
  optionGroups: any[];
  updatedAt: string;
  createdAt: string;
}
