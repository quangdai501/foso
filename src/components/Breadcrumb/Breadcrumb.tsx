import { breadcrumbType } from "@/app/blog-detail/page";
import Link from "next/link";

export default function Breadcrumb({ items }: {items: breadcrumbType[]}) {
  return (
    <nav className="text-gray-600 text-sm">
      <ul className="inline-flex">
        {items.map((item, index) => (
          <li key={index} className="flex items-center ">
            {index > 0 && <span className="mx-1"> &gt; </span>}
            {index === items.length - 1 ? (
              <span className="font-semibold text-black">{item.label}</span>
            ) : (
              <Link href={item.href} className="hover:text-gray-900">
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

