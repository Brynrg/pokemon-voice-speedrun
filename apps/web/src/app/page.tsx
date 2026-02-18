import Link from "next/link";
import { GAMES } from "@/lib/games";

export default function HomePage() {
  return (
    <main style={{ minHeight: "100vh", padding: "2rem", display: "grid", placeItems: "center" }}>
      <section
        style={{
          width: "min(720px, 100%)",
          background: "var(--surface)",
          border: "2px solid var(--border)",
          borderRadius: "18px",
          boxShadow: "0 18px 42px rgba(8, 29, 45, 0.16)",
          padding: "1.5rem",
          display: "grid",
          gap: "1.2rem",
        }}
      >
        <header>
          <h1 style={{ margin: 0, fontSize: "clamp(1.6rem, 4vw, 2.4rem)" }}>Speed Run Games</h1>
          <p style={{ margin: "0.3rem 0 0", color: "#1d4058", fontWeight: 600 }}>
            Browser-based speedrun challenges. Pick a game below.
          </p>
        </header>

        <div style={{ display: "grid", gap: "0.8rem" }}>
          {GAMES.map((game) => (
            <Link
              key={game.slug}
              href={game.href}
              style={{
                display: "block",
                border: "2px solid var(--border)",
                borderRadius: "12px",
                padding: "1rem",
                background: "#fff",
                textDecoration: "none",
                transition: "border-color 100ms ease, transform 100ms ease",
              }}
            >
              <strong style={{ fontSize: "1.15rem" }}>{game.title}</strong>
              <p style={{ margin: "0.25rem 0 0", fontSize: "0.9rem", color: "#425f72" }}>
                {game.description}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
