"use client";

import { useEffect } from "react";

/**
 * Removes unexpected attributes injected by browser extensions
 * (e.g. data-qb-installed, Grammarly markers, etc.)
 * to prevent Next.js hydration errors.
 */
export default function HtmlSanitizer() {
  useEffect(() => {
    const htmlEl = document.documentElement;
    const bodyEl = document.body;

    // Allowed attributes on <html>
    const allowedHtmlAttrs = new Set(["lang", "class"]);
    [...htmlEl.attributes].forEach(attr => {
      if (!allowedHtmlAttrs.has(attr.name)) {
        htmlEl.removeAttribute(attr.name);
      }
    });

    const allowedBodyAttrs = new Set(["class"]);
    [...bodyEl.attributes].forEach(attr => {
      if (!allowedBodyAttrs.has(attr.name)) {
        bodyEl.removeAttribute(attr.name);
      }
    });
  }, []);

  return null;
}
