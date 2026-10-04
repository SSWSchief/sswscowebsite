import { DISPATCH } from "@/lib/site";
import Link from "next/link";
import { Phone, FileText } from "lucide-react";

export default function MobileStickyBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white border-t border-gray-200 shadow-[0_-2px_12px_rgba(0,0,0,0.12)]">
      <div className="grid grid-cols-2">
        <a
          href={DISPATCH.tel}
          className="flex flex-col items-center justify-center gap-1 py-3 text-ssws-blue hover:bg-ssws-mist transition-colors border-r border-gray-200"
        >
          <Phone size={20} />
          <span className="text-xs font-semibold font-body">Call to Book</span>
        </a>
        <Link
          href="/contact"
          className="flex flex-col items-center justify-center gap-1 py-3 bg-ssws-blue text-white hover:bg-ssws-navy transition-colors"
        >
          <FileText size={20} />
          <span className="text-xs font-semibold font-body">Quote</span>
        </Link>
      </div>
    </div>
  );
}
