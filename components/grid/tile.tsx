import Image from 'next/image';
import Label from '../label';

export function GridTileImage({
  active,
  label,
  ...props
}: {
  isInteractive?: boolean;
  active?: boolean;
  label?: {
    title: string;
    amount: string;
    currencyCode: string;
    position?: 'bottom' | 'center';
  };
} & React.ComponentProps<typeof Image>) {
  return (
    <div className="group flex h-full w-full items-center justify-center overflow-hidden border border-neutral-500 bg-neutral-500 hover:cursor-pointer">
      {props.src ? (
        // eslint-disable-next-line jsx-a11y/alt-text -- `alt` is inherited from `props`, which is being enforced with TypeScript
        <Image
          className="relative h-full w-full object-cover transition-all ease-in-out group-hover:opacity-60 group-focus:opacity-60 "
          {...props}
        />
      ) : null}
      {label ? (
        <Label
          title={label.title}
          amount={label.amount}
          currencyCode={label.currencyCode}
          position={label.position}
        />
      ) : null}
    </div>
  );
}
