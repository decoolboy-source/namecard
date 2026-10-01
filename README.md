# Namecard điện tử – Dương Quốc Đệ

Trang namecard PWA tĩnh, host trên GitHub Pages.

| File | Chức năng |
|---|---|
| `index.html` | Trang card. Sửa thông tin trong khối `CONFIG` |
| `dqd.vcf` | vCard 3.0 (UTF-8) cho nút "Lưu vào danh bạ" – cập nhật đồng bộ với CONFIG |
| `manifest.webmanifest`, `sw.js`, `icon-*.png` (ảnh đại diện) | PWA: cài lên màn hình chính, xem offline |
| `fonts/` | Be Vietnam Pro (SIL OFL 1.1), tự host – không phụ thuộc Google Fonts |
| `qrious.min.js` | Thư viện tạo mã QR (QRious 4.0.2), tự host để chạy offline |

Mọi thay đổi theo SOP Namecard điện tử (mục 4). Hằng số cache trong `sw.js` đặt trùng số phiên bản phát hành, ví dụ `dqd-card-v1.0` → `dqd-card-v2.0`.
