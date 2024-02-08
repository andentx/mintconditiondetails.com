import { ImageResponse } from 'next/og';
import LogoIcon from './icons/logo';

export type Props = {
  title?: string;
};

export default async function OpengraphImage(props?: Props): Promise<ImageResponse> {
  const { title } = {
    ...{
      title: process.env.SITE_NAME
    },
    ...props
  };

  return new ImageResponse(
    (
      <div tw="flex h-full w-full items-center justify-center bg-white">
        <div tw="flex items-center justify-center">
          <LogoIcon width="30" height="68" fill="#34d399" />
          <div tw="ml-6 text-6xl flex">
            <p tw="hidden">{title}</p>
            <span tw="font-bold text-gray-800 ">Mint</span>
            <span tw="mr-4 font-light text-gray-800">Condition</span>
            <span tw="font-bold text-gray-800">Detailing</span>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Inter',
          data: await fetch(new URL('../fonts/Inter-Bold.ttf', import.meta.url)).then((res) =>
            res.arrayBuffer()
          ),
          style: 'normal',
          weight: 700
        },
        {
          name: 'Inter',
          data: await fetch(new URL('../fonts/Inter-Light.ttf', import.meta.url)).then((res) =>
            res.arrayBuffer()
          ),
          style: 'normal',
          weight: 300
        }
      ]
    }
  );
}
