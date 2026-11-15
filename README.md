# Namecard điện tử – Dương Quốc Đệ

Trang namecard PWA tĩnh, host trên GitHub Pages.

| File | Chức năng |
|---|---|
| `index.html` | Trang card. Sửa thông tin trong khối `CONFIG` |
| `dqd.vcf` | vCard 3.0 (UTF-8) cho nút "Lưu vào danh bạ" – cập nhật đồng bộ với CONFIG |
| `manifest.webmanifest`, `sw.js`, `icon-*.png` (ảnh đại diện) | PWA: cài lên màn hình chính, xem offline |
| `fonts/` | Be Vietnam Pro (SIL OFL 1.1), tự host – không phụ thuộc Google Fonts |
| `qrious.min.js` | Thư viện tạo mã QR (QRious 4.0.2), tự host để chạy offline |

Mọi thay đổi theo SOP Namecard điện tử (mục 4). Hằng số cache trong `sw.js` có dạng `namecard-v<số>` (tiền tố theo tên repo, xem "Lịch sử phiên bản"); tăng số mỗi lần phát hành.

## Lịch sử phiên bản

### 2026-11-15 — bản cache `namecard-v3`

Chuẩn hóa để chạy chung origin `decoolboy-source.github.io` với các PWA khác:

- Service worker đăng ký bằng đường dẫn tương đối: `register('./sw.js', { scope: './' })`.
- `manifest`: thêm `"id": "./"`, `"scope": "./"` (`start_url` đã là `./`).
- Tên cache đổi sang `namecard-v<số>` (trước là `dqd-card-v<số>`). Khi kích hoạt chỉ xóa cache của chính app này (cả tiền tố mới và cũ), không đụng cache của app khác.
- Khóa localStorage `namecard:lang` (đã có tiền tố từ bản 2026-11-14), không đổi.
