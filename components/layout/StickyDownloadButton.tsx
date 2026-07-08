import { Download } from "lucide-react";
import { APK_DOWNLOAD_URL, REGISTER_URL } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

export function StickyDownloadButton() {
  return (
    <div className="glass-strong fixed inset-x-0 bottom-0 z-40 flex items-center gap-3 px-4 py-3 lg:hidden">
      <Button href={REGISTER_URL} variant="secondary" size="md" className="flex-1">
        Register Now
      </Button>
      <Button
        href={APK_DOWNLOAD_URL}
        variant="primary"
        size="md"
        className="flex-1"
        icon={<Download className="size-4" />}
      >
        Download App
      </Button>
    </div>
  );
}
