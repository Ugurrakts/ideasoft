export {default as AddCategoryScreen} from './AddCategoryScreen';
export * from './hooks/useAddCategory';

/**
 * # AddCategoryScreen Bileşeni Dokümantasyonu
 *
 * ## 📝 Genel Bakış
 * `AddCategoryScreen`, yeni kategori ekleme işlemlerini yöneten form ekranıdır.
 * GenericFormScreen bileşenini kullanarak kategori oluşturma arayüzünü sunar.
 *
 * ## 🔍 Bileşen Detayları
 *
 * ### Kullanılan Hook'lar
 * ```typescript
 * const {
 *   fields,         // Form alanları tanımları
 *   handleSubmit    // Form gönderim işleyicisi
 * } = useAddCategory();
 * ```
 *
 * ### Form Alanları
 * ```typescript
 * type FormField = {
 *   name: string;           // Alan adı
 *   label: string;         // Görünen etiket
 *   placeholder: string;   // Placeholder metni
 *   required?: boolean;    // Zorunlu alan kontrolü
 *   type?: 'text' | 'number'; // Alan tipi
 * }
 * ```
 *
 * ## 🎯 Kullanım Örneği
 * ```typescript
 * <AddCategoryScreen />
 * ```
 *
 * ## 🖥 Form Alanları
 * 1. Kategori Adı (zorunlu)
 *    - Text input
 *    - Kategori isminin girildiği alan
 *
 * 2. Slug (zorunlu)
 *    - Text input
 *    - URL-friendly kategori tanımlayıcısı
 *
 * 3. Sıralama
 *    - Number input
 *    - Kategorinin görüntülenme sırası
 *
 * ## ⚠️ Hata Yönetimi
 * - Başarılı ekleme durumunda başarı mesajı gösterilir
 * - Hata durumunda hata mesajı gösterilir
 * - Form doğrulama kontrolleri GenericFormScreen tarafından yönetilir
 *
 * ## 🔗 İlişkili Bileşenler
 * - GenericFormScreen: Form görünümünü ve yönetimini sağlar
 * - useAddCategory: Form mantığını ve API işlemlerini yönetir
 * - CategoryApi: Kategori CRUD işlemleri için API bağlantıları
 */
