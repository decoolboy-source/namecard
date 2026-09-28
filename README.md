# Namecard điện tử – Dương Quốc Đệ

Trang namecard PWA tĩnh, host trên GitHub Pages.

| File | Chức năng |
|---|---|
| `index.html` | Trang card. Sửa thông tin trong khối `CONFIG` |
| `dqd.vcf` | vCard 3.0 (UTF-8) cho nút "Lưu vào danh bạ" – cập nhật đồng bộ với CONFIG |
| `manifest.webmanifest`, `sw.js`, `icon-*.png` (ảnh đại diện) | PWA: cài lên màn hình chính, xem offline |

Sau khi đổi nội dung, tăng số phiên bản cache `dqd-card-v1` trong `sw.js` để máy người xem nhận bản mới.
