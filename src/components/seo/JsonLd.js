// Dữ liệu có cấu trúc (schema.org) cho Google. Escape "<" để không thể đóng thẻ <script> sớm.
export default function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  );
}
