import { Breadcrumbs, type BreadcrumbItem } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function PageHeader({
  eyebrow,
  title,
  description,
  breadcrumbs,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumbs: BreadcrumbItem[];
}) {
  return (
    <div className="mx-auto max-w-7xl px-4 pb-4 pt-32 sm:px-6 sm:pt-36 lg:px-8">
      <Breadcrumbs items={breadcrumbs} />
      <div className="mt-8">
        <SectionHeading eyebrow={eyebrow} title={title} description={description} align="left" />
      </div>
    </div>
  );
}
