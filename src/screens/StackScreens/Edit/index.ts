export {default as EditScreen} from './EditScreen';
export * from './hooks/useEdit';

/**
 * # EditScreen Bileşeni Dokümantasyonu
 *
 * ## 📝 Genel Bakış
 * `EditScreen`, ürün ve kategorilerin düzenleme işlemlerini yöneten ekran bileşenidir.
 * GenericFormScreen bileşenini kullanarak düzenleme formunu oluşturur.
 *
 * ## 🔍 Bileşen Detayları
 *
 * ### Props
 * ```typescript
 * type Props = {
 *   route: {
 *     params: {
 *       productId?: string;
 *       categoryId?: string;
 *       isCategory?: boolean;
 *     }
 *   }
 * }
 * ```
 *
 * ### Kullanılan Hook'lar
 * ```typescript
 * const {
 *   item,           // Düzenlenecek ürün veya kategori
 *   fields,         // Form alanları
 *   handleSubmit    // Form gönderme işlemi
 * } = useEdit(productId, categoryId, isCategory);
 * ```
 *
 * ## 🎯 Kullanım Örneği
 * ```typescript
 * // Kategori düzenleme
 * <EditScreen route={{ params: { categoryId: "1", isCategory: true } }} />
 *
 * // Ürün düzenleme
 * <EditScreen route={{ params: { productId: "1", categoryId: "1" } }} />
 * ```
 *
 * ## 🖥 Arayüz Bileşenleri
 * - GenericFormScreen: Form görünümünü ve işlevselliğini sağlar
 * - Dinamik form alanları (name, slug, sku, sortOrder vb.)
 *
 * ## 🔄 Veri İşlemleri
 * - useEdit hook'u ile veri yönetimi
 * - RTK Query ile API istekleri
 * - Otomatik veri yenileme (refetch)
 *
 * ## 📌 Önemli Notlar
 * 1. Hem ürün hem kategori düzenlemeyi destekler
 * 2. Form alanları dinamik olarak oluşturulur
 * 3. Başarılı güncellemeden sonra liste otomatik yenilenir
 * 4. Tüm form validasyonları GenericFormScreen tarafından yönetilir
 *
 * ## 🔗 İlişkili Bileşenler
 * - GenericFormScreen: Form yapısını sağlar
 * - useEdit: Veri ve işlem yönetimini sağlar
 * - Product ve Category tipleri: Veri modellerini tanımlar
 */
