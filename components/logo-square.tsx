import clsx from 'clsx';
import LogoIcon from './icons/logo';

export default function LogoSquare({ size }: { size?: 'sm' | undefined }) {
  return (
    <div
      className={clsx('mr-2 flex flex-none items-center justify-center', {
        'w-20px] h-[40px] rounded-xl': !size,
        'h-[30px] w-[15px] rounded-lg': size === 'sm'
      })}
    >
      <LogoIcon
        className={clsx({
          'h-[16px] w-[16px]': !size,
          'h-[10px] w-[10px]': size === 'sm'
        })}
      />
    </div>
  );
}
