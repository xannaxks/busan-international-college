'use client';

// eslint-disable-next-line import/no-named-as-default
import { Block } from './Block';
import SpinnerStamp from './SpinnerStamp';

// eslint-disable-next-line react/function-component-definition
export default function TwoBlocks({ header1, header2, text1, text2 }) {
  return (
    <section className="relative mx-auto flex w-full max-w-7xl items-center justify-center px-6 py-24">
      <div className="relative flex w-full flex-col gap-12 md:flex-row md:gap-24">
        <Block
          header={header1}
          text={text1}
          direction="left"
        />

        <Block
          header={header2}
          text={text2}
          direction="right"
        />
      </div>

      <SpinnerStamp />
    </section>
  );
}
