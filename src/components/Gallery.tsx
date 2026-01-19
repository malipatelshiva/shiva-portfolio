const images = [
  "WhatsApp Image 2026-01-19 at 11.56.53 (3).jpeg",
  "WhatsApp Image 2026-01-19 at 11.56.53 (2).jpeg",
  "WhatsApp Image 2026-01-19 at 11.56.53 (1).jpeg",
  "WhatsApp Image 2026-01-19 at 11.56.53.jpeg",
  "WhatsApp Image 2026-01-19 at 11.56.52.jpeg",
  "WhatsApp Image 2026-01-19 at 11.41.25.jpeg",
  "WhatsApp Image 2026-01-19 at 11.41.22.jpeg",
  "WhatsApp Image 2026-01-19 at 11.41.25 (1).jpeg",
  "WhatsApp Image 2026-01-19 at 11.41.26.jpeg",
  "WhatsApp Image 2026-01-19 at 11.41.27.jpeg",
  "WhatsApp Image 2026-01-19 at 11.41.24.jpeg",
  "WhatsApp Image 2026-01-19 at 11.41.26 (3).jpeg",
];

const Gallery = () => {
  return (
    <section id="gallery" style={styles.section}>
      <h2 style={styles.title}>Gallery</h2>

      <div style={styles.grid}>
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Gallery ${index + 1}`}
            loading="lazy"
            style={styles.image}
          />
        ))}
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: "80px 24px",
    textAlign: "center" as const,
    backgroundColor: "#ffffff",
  },
  title: {
    fontSize: "32px",
    marginBottom: "40px",
    fontWeight: 600,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "16px",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  image: {
    width: "100%",
    height: "240px",
    objectFit: "cover" as const,
    borderRadius: "14px",
    transition: "transform 0.3s ease",
  },
};

export default Gallery;
