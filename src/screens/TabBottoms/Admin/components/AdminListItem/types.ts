export interface AdminListItemProps {
  item: {
    id: string | number;
    name: string;
    slug?: string;
    sortOrder?: number;
    sku?: string;
    stockAmount?: number;
    price1?: number;
    currency?: {
      abbr: string;
    };
  };
  isCategoryMode: boolean;
  onDelete: (id: string | number) => void;
  onEdit: (id: string | number) => void;
}
