export {default as AdminPanelScreen} from './AdminPanelScreen';
export * from './types';
export * from './hooks/useAdmin';

/**
 * # AdminPanelScreen Bileşeni Dokümantasyonu
 *
 * ## 📝 Genel Bakış
 * `AdminPanelScreen`, admin panelinin ana görünüm bileşenidir. Ürünleri ve kategorileri
 * listeleme, düzenleme ve silme işlemlerini yönetir.
 *
 * ## 🔍 Bileşen Detayları
 *
 * ### Props
 * ```typescript
 * type AdminScreenProps = {
 *   navigation: StackNavigationProp<RootStackParamList>;
 *   route: RouteProp<RootStackParamList, 'Admin'>;
 * }
 * ```
 *
 * ### Kullanılan Hook'lar
 * ```typescript
 * const {
 *   data,                // Ürün veya kategori listesi
 *   isLoading,          // Yükleme durumu
 *   error,              // Hata durumu
 *   handleDelete,       // Silme işlemi
 *   handleEdit,         // Düzenleme işlemi
 *   isCategoryMode      // Mod kontrolü (ürün/kategori)
 * } = useAdmin(navigation, route);
 * ```
 *
 * ## 🎯 Kullanım Örneği
 * ```typescript
 * // Kategori modu ile çağırma
 * <AdminPanelScreen navigation={navigation} route={{ params: { mode: 'category' } }} />
 *
 * // Ürün modu ile çağırma
 * <AdminPanelScreen navigation={navigation} route={{ params: {} }} />
 * ```
 *
 * ## 🖥 Arayüz Bileşenleri
 *
 * ### Üst Butonlar
 * - Kategori Modu: "Yeni Kategori Ekle" butonu (AddCategory ekranına yönlendirir)
 * - Ürün Modu: "Kategoriler" butonu (Category ekranına yönlendirir)
 *
 * ### Liste Görünümü
 * FlatList bileşeni ile ürün veya kategorileri listeler
 * AdminListItem bileşeni ile her öğeyi render eder
 *
 * ## ⚠️ Hata ve Yükleme Durumları
 * - Yükleme durumunda "Yükleniyor..." mesajı gösterilir
 * - Hata durumunda "Bir hata oluştu." mesajı gösterilir
 *
 * ## 🎨 Stil Özellikleri
 * - container: Ana kapsayıcı stil
 * - headerButtons: Üst butonların stil container'ı
 * - categoriesButton: Kategoriler butonu stili
 * - categoriesButtonText: Buton metin stili
 * - listContainer: Liste container stili
 *
 * ## 📌 Önemli Notlar
 * 1. Bileşen, useAdmin hook'u ile veri yönetimini gerçekleştirir
 * 2. İki farklı mod (ürün/kategori) destekler
 * 3. Tüm CRUD işlemleri için gerekli UI elemanlarını içerir
 * 4. Responsive tasarım için FlatList kullanır
 *
 * ## 🔗 İlişkili Bileşenler
 * - AdminListItem: Liste öğelerinin görünümünü sağlar
 * - useAdmin: Veri ve işlem yönetimini sağlar
 * - Category ve Product tipleri: Veri modellerini tanımlar
 */
