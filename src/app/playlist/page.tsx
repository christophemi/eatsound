"use client";

import { Suspense } from "react";
import PlaylistContent from "./PlaylistContent";

export default function PlaylistPage() {
  return (
    <Suspense
      fallback={
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100dvh",
            gap: 16,
          }}
        >
          <div className="bg-animated" />
          <svg
            className="spinner"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--accent)"
            strokeWidth="2.5"
          >
            <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
          </svg>
          <span className="shimmer-text" style={{ fontSize: "1rem", fontWeight: 600 }}>
            Préparation de ta playlist…
          </span>
        </div>
      }
    >
      <PlaylistContent />
    </Suspense>
  );
}
