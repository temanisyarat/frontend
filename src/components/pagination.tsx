import Link from "next/link";
import arrowBackward from "../../assets/web/icons/pagination-left.svg";
import arrowForward from "../../assets/web/icons/pagination-right.svg";
import { InlineImage } from "@/components/page-chrome";

type PaginationProps = {
  currentPage?: number;
  totalPages?: number;
};

export function Pagination({ currentPage = 1, totalPages = 1 }: PaginationProps) {
  const prevPage = currentPage > 1 ? currentPage - 1 : null;
  const nextPage = currentPage < totalPages ? currentPage + 1 : null;

  return (
    <div className="inline-flex w-[192px] items-center justify-between rounded-[24px] bg-[#e5e8fa] px-8 py-3">
      {prevPage ? (
        <Link
          href={`?page=${prevPage}`}
          className="p-1"
          aria-label="Halaman sebelumnya"
        >
          <InlineImage src={arrowBackward} alt="" className="h-6 w-6" />
        </Link>
      ) : (
        <button
          type="button"
          className="p-1 opacity-40"
          disabled
          aria-label="Halaman sebelumnya"
        >
          <InlineImage src={arrowBackward} alt="" className="h-6 w-6" />
        </button>
      )}

      <span className="rounded-[12px] bg-[#0000cc] px-4 py-2 text-[16px] font-semibold text-white">
        {currentPage}
      </span>

      {nextPage ? (
        <Link
          href={`?page=${nextPage}`}
          className="p-1"
          aria-label="Halaman selanjutnya"
        >
          <InlineImage src={arrowForward} alt="" className="h-6 w-6" />
        </Link>
      ) : (
        <button
          type="button"
          className="p-1 opacity-40"
          disabled
          aria-label="Halaman selanjutnya"
        >
          <InlineImage src={arrowForward} alt="" className="h-6 w-6" />
        </button>
      )}
    </div>
  );
}
