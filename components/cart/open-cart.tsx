import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

export default function OpenCart({
  className,
  quantity
}: {
  className?: string;
  quantity?: number;
}) {
  return (
    <div className="group relative flex h-11 w-11 items-center justify-center rounded-md border border-neutral-300 text-black transition-colors ease-in-out hover:bg-emerald-100">
      <ShoppingCartIcon
        className={clsx('h-4 transition-all ease-in-out group-hover:scale-110 ', className)}
      />

      {quantity ? (
        <div className="absolute right-0 top-0 -mr-2 -mt-2 h-4 w-4 rounded bg-emerald-300 text-[11px] font-medium text-black">
          {quantity}
        </div>
      ) : null}
    </div>
  );
}
