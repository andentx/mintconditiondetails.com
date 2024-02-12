import clsx from 'clsx';
import Price from './price';

const Label = ({
  title,
  amount,
  currencyCode,
  position = 'bottom'
}: {
  title: string;
  amount: string;
  currencyCode: string;
  position?: 'bottom' | 'center';
}) => {
  return (
    <div
      className={clsx('absolute bottom-0 left-0 flex w-full px-4 pb-4 @container/label', {
        'lg:px-20 lg:pb-[35%]': position === 'center'
      })}
    >
      <div className="flex items-center rounded-md border border-gray-800 bg-emerald-300/80 p-1 text-xs font-semibold text-black backdrop-blur-md transition-all ease-in-out group-hover:bg-emerald-400">
        <h4 className="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">{title}</h4>
        <Price
          className="flex-none rounded bg-white p-2 text-black"
          amount={amount}
          currencyCode={currencyCode}
          currencyCodeClassName="hidden @[275px]/label:inline"
        />
      </div>
    </div>
  );
};

export default Label;
