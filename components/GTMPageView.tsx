"use client";

import { useEffect, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { sendGTMEvent } from "@next/third-parties/google";

function GTMPageViewInner() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Construct full URL
    const url =
      pathname + (searchParams.toString() ? `?${searchParams.toString()}` : "");

    // Send page view event to GTM
    sendGTMEvent({
      event: "page_view",
      page_title: document.title,
      page_location: window.location.href,
      page_path: url,
    });
  }, [pathname, searchParams]);

  // This component doesn't render anything
  return null;
}

export default function GTMPageView() {
  return (
    <Suspense fallback={null}>
      <GTMPageViewInner />
    </Suspense>
  );
}
