"use client";

import { MOODS, getMoodById, formatDuration, newStepId } from "@/lib/data";
import type { MoodId, RecipeStep } from "@/lib/types";
import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();
  const [dishName, setDishName] = useState("");
  const [selectedMood, setSelectedMood] = useState<MoodId | null>(null);
  const [steps, setSteps] = useState<RecipeStep[]>(() => [
    { id: "step_default_1", description: "", durationMinutes: 5 },
  ]);

  const activeSteps = steps.filter((s) => s.description.trim().length > 0);
  const totalMinutes = activeSteps.reduce((s, st) => s + (st.durationMinutes || 0), 0);

  /* ── Step helpers ── */
  const addStep = useCallback(() => {
    setSteps((prev) => [
      ...prev,
      { id: newStepId(), description: "", durationMinutes: 5 },
    ]);
  }, []);

  const removeStep = useCallback((id: string) => {
    setSteps((prev) => prev.filter((s) => s.id !== id));
  }, []);

  const updateStep = useCallback(
    (id: string, field: keyof RecipeStep, value: string | number) => {
      setSteps((prev) =>
        prev.map((s) => (s.id === id ? { ...s, [field]: value } : s))
      );
    },
    []
  );

  /* ── Submit ── */
  const canSubmit =
    dishName.trim().length > 0 &&
    selectedMood !== null;

  const handleSubmit = () => {
    if (!canSubmit || !selectedMood) return;
    const payload = { dishName: dishName.trim(), mood: selectedMood, steps: activeSteps };
    const encoded = encodeURIComponent(JSON.stringify(payload));
    router.push(`/playlist?data=${encoded}`);
  };

  return (
    <>
      <div className="bg-animated" />

      <main className="app-shell">
        {/* ── Header ── */}
        <header className="page-header fade-up">
          <span className="logo-icon">🎵</span>
          <h1>
            <span style={{ color: "var(--accent-light)" }}>Eat</span>Sound
          </h1>
          <p>Ta recette mérite une bande-son parfaite&nbsp;🍳</p>
        </header>

        <div className="form-stack">
          {/* ── Dish name ── */}
          <section className="card fade-up-d1">
            <label className="label" htmlFor="dish-name">
              🍽️ Ton plat
            </label>
            <input
              id="dish-name"
              className="input-field"
              type="text"
              placeholder="Ex : Pizza au fromage, Ramen maison…"
              value={dishName}
              onChange={(e) => setDishName(e.target.value)}
              maxLength={80}
            />
          </section>

          {/* ── Mood selector ── */}
          <section className="card fade-up-d2">
            <p className="label">🎭 Ton humeur</p>
            <div className="mood-grid">
              {MOODS.map((mood) => {
                const active = selectedMood === mood.id;
                return (
                  <button
                    key={mood.id}
                    id={`mood-${mood.id}`}
                    className={`mood-chip${active ? " active" : ""}`}
                    style={
                      {
                        "--chip-color": mood.color,
                        "--chip-glow": mood.glow,
                      } as React.CSSProperties
                    }
                    onClick={() => setSelectedMood(mood.id as MoodId)}
                    aria-pressed={active}
                  >
                    <span className="emoji">{mood.emoji}</span>
                    <span className="mood-label">{mood.label}</span>
                  </button>
                );
              })}
            </div>

            {selectedMood && (
              <div className="genre-info" style={{ marginTop: 14 }}>
                <span>🎸</span>
                <span>
                  <strong>{getMoodById(selectedMood)?.genre}</strong>
                  &nbsp;·&nbsp;{getMoodById(selectedMood)?.description}
                </span>
              </div>
            )}
          </section>

          {/* ── Recipe steps ── */}
          <section className="card fade-up-d3">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: 16,
              }}
            >
              <p className="label" style={{ margin: 0 }}>
                📋 Les étapes
              </p>
              {totalMinutes > 0 && (
                <span className="duration-pill">
                  ⏱ {formatDuration(totalMinutes)}
                </span>
              )}
            </div>

            {/* Steps list */}
            <div>
              {steps.map((step, idx) => (
                <div key={step.id} className="step-item">
                  <span className="step-number">{idx + 1}</span>
                  <div className="step-content">
                    <textarea
                      id={`step-desc-${step.id}`}
                      className="input-field"
                      placeholder={`Étape ${idx + 1} — ex: Pétrir la pâte`}
                      value={step.description}
                      rows={2}
                      onChange={(e) =>
                        updateStep(step.id, "description", e.target.value)
                      }
                    />
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <span
                        style={{
                          fontSize: "0.78rem",
                          color: "var(--text-muted)",
                          whiteSpace: "nowrap",
                        }}
                      >
                        ⏱
                      </span>
                      <input
                        id={`step-dur-${step.id}`}
                        className="input-field"
                        type="number"
                        min={1}
                        max={300}
                        placeholder="min"
                        value={step.durationMinutes || ""}
                        style={{ maxWidth: 90 }}
                        onChange={(e) =>
                          updateStep(
                            step.id,
                            "durationMinutes",
                            parseInt(e.target.value, 10) || 0
                          )
                        }
                      />
                      <span
                        style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}
                      >
                        min
                      </span>
                      {steps.length > 1 && (
                        <button
                          className="delete-btn"
                          onClick={() => removeStep(step.id)}
                          aria-label="Supprimer cette étape"
                          style={{ marginLeft: "auto" }}
                        >
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <polyline points="3 6 5 6 21 6" />
                            <path d="M19 6l-1 14H6L5 6" />
                            <path d="M10 11v6M14 11v6" />
                            <path d="M9 6V4h6v2" />
                          </svg>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button className="add-step-btn" onClick={addStep} id="add-step-btn">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
              Ajouter une étape
            </button>
          </section>

          {/* ── Total summary ── */}
          {totalMinutes > 0 && (
            <div className="total-duration fade-up">
              <div className="big-time">{formatDuration(totalMinutes)}</div>
              <div className="big-label">Durée totale de ta recette</div>
            </div>
          )}

          {/* ── CTA ── */}
          <button
            id="generate-playlist-btn"
            className="btn-primary pulse-glow"
            disabled={!canSubmit}
            onClick={handleSubmit}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <polygon points="5 3 19 12 5 21 5 3" fill="currentColor" />
            </svg>
            Générer ma playlist
          </button>
        </div>
      </main>
    </>
  );
}
