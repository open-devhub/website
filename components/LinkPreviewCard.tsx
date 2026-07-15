import { accent, indigo, text } from "@/lib/colors";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export interface PreviewData {
  title: string | null;
  description: string | null;
  image?: string | null;
}

function truncate(desc: string, maxLength = 260) {
  if (desc.length <= maxLength) return desc;
  const cut = desc.slice(0, maxLength);
  const lastSpace = cut.lastIndexOf(" ");
  return `${cut.slice(0, lastSpace > 0 ? lastSpace : maxLength)}…`;
}

export function LinkPreviewCard({
  href,
  newTab = true,
  previews,
  children,
}: {
  href: string;
  newTab?: boolean;
  previews?: Record<string, PreviewData>;
  children: React.ReactNode;
}) {
  const [hovering, setHovering] = useState(false);
  const [data, setData] = useState<PreviewData | null>(null);
  const [imgError, setImgError] = useState(false);
  const [pos, setPos] = useState({ top: 0, left: 0 });
  const [mounted, setMounted] = useState(false);
  const anchorRef = useRef<HTMLAnchorElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
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
    const normalizedHref = (() => {
      try {
        return new URL(href, window.location.origin).pathname;
      } catch {
        return href;
      }
    })();

    const preview = previews?.[href] ?? previews?.[normalizedHref];
    if (preview) {
      setData(preview);
      return;
    }

    fetch(`/api/preview?url=${encodeURIComponent(href)}`)
      .then((res) => (res.ok ? res.json() : null))
      .then((json) => {
        setData(json);
      })
      .catch(() => {
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
      const cardWidth = 416;
      let left = rect.left;

      if (left + cardWidth > window.innerWidth) {
        left = window.innerWidth - cardWidth - 16;
      }

      setPos({ top: rect.bottom + 8 + window.scrollY, left });
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

  const hasContent = Boolean(data?.title || data?.description || data?.image);
  const showImage = data?.image && !imgError;

  // Determine if the description is short or missing
  const isDescriptionShort =
    !data?.description || data.description.length < 100;

  return (
    <>
      <a
        ref={anchorRef}
        href={href}
        target={newTab ? "_blank" : "_self"}
        rel="noopener noreferrer"
        onMouseEnter={handleLinkEnter}
        onMouseLeave={handleLinkLeave}
        className="hover:underline cursor-pointer hover:opacity-80 transition-opacity inline-block"
        style={{ color: accent.indigoLightest }}
      >
        {children}
      </a>
      {mounted &&
        createPortal(
          <AnimatePresence>
            {hovering && hasContent && (
              <motion.div
                ref={cardRef}
                onMouseEnter={handleCardEnter}
                onMouseLeave={handleCardLeave}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 4 }}
                transition={{ duration: 0.12 }}
                className="absolute z-50 w-[26rem] p-5 overflow-hidden select-none pointer-events-auto"
                style={{
                  top: pos.top,
                  left: pos.left,
                  background: "rgba(7, 7, 15, 0.96)",
                  border: `1px solid ${indigo(0.15)}`,
                  backdropFilter: "blur(12px)",
                  boxShadow: "0 12px 40px -12px rgba(0,0,0,0.8)",
                }}
              >
                <div
                  className="absolute top-2.5 left-2.5 w-3.5 h-3.5 pointer-events-none"
                  style={{
                    borderTop: `1.5px solid ${indigo(0.3)}`,
                    borderLeft: `1.5px solid ${indigo(0.3)}`,
                  }}
                />
                <div
                  className="absolute top-2.5 right-2.5 w-3.5 h-3.5 pointer-events-none"
                  style={{
                    borderTop: `1.5px solid ${indigo(0.3)}`,
                    borderRight: `1.5px solid ${indigo(0.3)}`,
                  }}
                />
                <div
                  className="absolute bottom-2.5 left-2.5 w-3.5 h-3.5 pointer-events-none"
                  style={{
                    borderBottom: `1.5px solid ${indigo(0.3)}`,
                    borderLeft: `1.5px solid ${indigo(0.3)}`,
                  }}
                />
                <div
                  className="absolute bottom-2.5 right-2.5 w-3.5 h-3.5 pointer-events-none"
                  style={{
                    borderBottom: `1.5px solid ${indigo(0.3)}`,
                    borderRight: `1.5px solid ${indigo(0.3)}`,
                  }}
                />

                <div className="flex gap-5 items-start relative h-full">
                  <div className="flex-1 min-w-0">
                    <a
                      href={href}
                      target={newTab ? "_blank" : "_self"}
                      rel="noopener noreferrer"
                      // conditional truncation
                      className={`font-semibold text-sm hover:underline block mb-2 leading-snug ${
                        isDescriptionShort ? "break-words" : "truncate"
                      }`}
                      style={{
                        fontFamily: "var(--font-geist-mono)",
                        color: accent.indigoLightest,
                      }}
                    >
                      {data?.title || href}
                    </a>
                    {data?.description && (
                      <p
                        className="text-xs leading-relaxed line-clamp-4 overflow-hidden text-ellipsis"
                        style={{
                          fontFamily: "var(--font-geist-mono)",
                          color: text.muted,
                        }}
                      >
                        {truncate(data.description)}
                      </p>
                    )}
                  </div>

                  {showImage && (
                    <div className="shrink-0">
                      <img
                        src={data.image!}
                        alt=""
                        loading="lazy"
                        referrerPolicy="no-referrer"
                        onError={() => setImgError(true)}
                        className="w-[6rem] h-[6rem] object-cover aspect-square transition-all duration-300 hover:scale-105"
                        style={{ border: `1px solid ${indigo(0.18)}` }}
                      />
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </>
  );
}
