// WppButton.jsx
import React, { useMemo } from "react";
import styles from "./WppButton.module.css";

export default function WppButton({
  phone = "5519997487329",
  message = "Olá! Vim pelo site do Gigantes Rugby.",
  position = "bottom-right",
  size = 56,
  bgColor = "#25D366",
  zIndex = 9999,
  tooltip = "Fale conosco pelo WhatsApp",
  ariaLabel = "Abrir conversa no WhatsApp",
  openInNewTab = true,
  className = "",
}) {
  if (!phone) {
    console.warn("[WppButton] Prop 'phone' é obrigatória. Exemplo: 5511999999999");
  }

  const href = useMemo(() => {
    const digits = (phone || "").replace(/\D/g, "");
    const text = encodeURIComponent(message || "");
    return `https://wa.me/${digits}${text ? `?text=${text}` : ""}`;
  }, [phone, message]);

  const isLeft = position === "bottom-left";
  const rootPosition = {
    bottom: 20,
    left: isLeft ? 20 : "auto",
    right: isLeft ? "auto" : 20,
    zIndex,
  };

  return (
    <div style={rootPosition} className={`${styles.root} ${className}`}>
      <div className={styles.wrapper}>
        <span className={styles.pulse} aria-hidden="true" />

        <a
          className={styles.btn}
          href={href}
          target={openInNewTab ? "_blank" : undefined}
          rel={openInNewTab ? "noopener noreferrer" : undefined}
          aria-label={ariaLabel}
          title={tooltip || ariaLabel}
          style={{
            width: size,
            height: size,
            background: bgColor,
          }}
        >
          <img
            src="/img/wpp-icon.png"
            alt="WhatsApp"
            style={{
              width: Math.round(size * 0.55),
              height: Math.round(size * 0.55),
            }}
          />
        </a>

        {tooltip ? (
          <span
            className={`${styles.tooltip} ${isLeft ? styles.left : styles.right}`}
            role="status"
          >
            {tooltip}
          </span>
        ) : null}
      </div>
    </div>
  );
}
