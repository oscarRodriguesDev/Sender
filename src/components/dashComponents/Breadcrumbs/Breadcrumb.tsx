
import Link from "next/link";

interface BreadcrumbProps {
  pageName: string;
}

const Breadcrumb = ({ pageName }: BreadcrumbProps) => {
  return (
    <div className="z-40 text-white mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-around  dark:text-white">
      <h2 className="text-[26px] font-bold leading-[30px] text-white dark:text-white">
        {pageName}
      </h2>

      <nav>
        <ol className="flex items-center gap-2  text-black dark:text-white">
          <li>
            <Link className="font-medium text-white dark:text-white" href="/">
             Exibindo Pagina 
            </Link>
          </li>
          <li className="font-medium text-primar text-white dark:text-white">{pageName}</li>
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb; 
