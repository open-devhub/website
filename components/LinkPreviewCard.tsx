import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

interface PreviewData {
  title: string | null;
  description: string | null;
  image: string | null;
  url: string;
}

const previewCache = new Map<string, PreviewData | null>();

export function LinkPreviewCard({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const [hovering, setHovering] = useState(false);
  const [data, setData] = useState<PreviewData | null>(null);
  const [imgError, setImgError] = useState(false);
  const [pos, setPos] = useState({ top: 0, left: 0 });
  const [mounted, setMounted] = useState(false);
  const anchorRef = useRef<HTMLAnchorElement>(null);
  const hideTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const fetchTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    return () => {
      if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
      if (fetchTimeoutRef.current) clearTimeout(fetchTimeoutRef.current);
    };
  }, []);

  useEffect(() => {
    if (!hovering) return;

    const handleScroll = () => {
      cancelHide();
      setHovering(false);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hovering]);

  const fetchPreview = () => {
    if (previewCache.has(href)) {
      setData(previewCache.get(href) || null);
      return;
    }
    fetch(`/api/link-preview?url=${encodeURIComponent(href)}`)
      .then((res) => (res.ok ? res.json() : null))
      .then((json) => {
        previewCache.set(href, json);
        setData(json);
      })
      .catch(() => {
        previewCache.set(href, null);
        setData(null);
      });
  };

  const cancelHide = () => {
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
      hideTimeoutRef.current = null;
    }
  };

  const scheduleHide = () => {
    cancelHide();
    hideTimeoutRef.current = setTimeout(() => setHovering(false), 200);
  };

  const handleLinkEnter = () => {
    cancelHide();
    const rect = anchorRef.current?.getBoundingClientRect();
    if (rect) {
      setPos({ top: rect.bottom + 8, left: rect.left });
    }
    setHovering(true);
    setImgError(false);
    fetchTimeoutRef.current = setTimeout(fetchPreview, 150);
  };

  const handleLinkLeave = () => {
    if (fetchTimeoutRef.current) clearTimeout(fetchTimeoutRef.current);
    scheduleHide();
  };

  const handleCardEnter = () => {
    cancelHide();
  };

  const handleCardLeave = () => {
    scheduleHide();
  };

  const hasContent = Boolean(data?.description);

  return (
    <>
      <a
        ref={anchorRef}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={handleLinkEnter}
        onMouseLeave={handleLinkLeave}
        className="hover:underline cursor-pointer hover:opacity-80 transition-opacity"
        style={{ color: "#a5b4fc" }}
      >
        {children}
      </a>
      {mounted &&
        createPortal(
          <AnimatePresence>
            {hovering && hasContent && (
              <motion.div
                onMouseEnter={handleCardEnter}
                onMouseLeave={handleCardLeave}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 4 }}
                transition={{ duration: 0.15 }}
                className="fixed z-50 w-80 p-4 overflow-hidden"
                style={{
                  top: pos.top,
                  left: pos.left,
                  background: "rgba(7, 7, 15, 0.95)",
                  border: "1px solid rgba(99,102,241,0.15)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <div
                  className="absolute top-2 left-2 w-3 h-3"
                  style={{
                    borderTop: "1.5px solid rgba(99,102,241,0.25)",
                    borderLeft: "1.5px solid rgba(99,102,241,0.25)",
                  }}
                />
                <div
                  className="absolute top-2 right-2 w-3 h-3"
                  style={{
                    borderTop: "1.5px solid rgba(99,102,241,0.25)",
                    borderRight: "1.5px solid rgba(99,102,241,0.25)",
                  }}
                />
                <div
                  className="absolute bottom-2 left-2 w-3 h-3"
                  style={{
                    borderBottom: "1.5px solid rgba(99,102,241,0.25)",
                    borderLeft: "1.5px solid rgba(99,102,241,0.25)",
                  }}
                />
                <div
                  className="absolute bottom-2 right-2 w-3 h-3"
                  style={{
                    borderBottom: "1.5px solid rgba(99,102,241,0.25)",
                    borderRight: "1.5px solid rgba(99,102,241,0.25)",
                  }}
                />

                <div className="relative">
                  {data?.image && !imgError && (
                    <img
                      src={data.image}
                      alt=""
                      onError={() => setImgError(true)}
                      className="absolute top-0 right-0 w-14 h-14 object-cover"
                      style={{ border: "1px solid rgba(99,102,241,0.12)" }}
                    />
                  )}
                  <div className={data?.image && !imgError ? "pr-16" : ""}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-sm hover:underline block mb-1"
                      style={{
                        fontFamily: "var(--font-geist-mono)",
                        color: "#a5b4fc",
                      }}
                    >
                      {data?.title || href}
                    </a>
                    {data?.description && (
                      <p
                        className="text-xs leading-relaxed"
                        style={{
                          fontFamily: "var(--font-geist-mono)",
                          color: "#71717a",
                          display: "-webkit-box",
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }}
                      >
                        {data.description}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </>
  );
}
