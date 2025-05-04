import { useEffect } from '@lynx-js/react';
import './customs';
import './App.css';

export function App(props: { onMounted?: () => void }) {
  useEffect(() => {
    console.info('Hello, ReactLynx');
    props.onMounted?.();
  }, []);

  return (
    <view style={{ width: '100%', height: '100%' }}>
      <view className="border-b border-black h-10">
        <input placeholder="Enter text here" />
      </view>
      <scroll-view
        scroll-orientation="vertical"
        style={{
          width: '100%',
          height: 'calc(100% - 7.5rem)',
          paddingLeft: '10px',
          marginLeft: '5px',
        }}
      >
        {new Array(5).fill(0).map((_, index) => (
          <view key={index} className="py-5">
            <text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              ratione quisquam distinctio modi deserunt, aut atque natus, qui
              possimus fuga tempora aliquid numquam quibusdam inventore autem
              impedit corrupti. A unde totam esse, corporis laboriosam enim
              voluptatem eos sed, rem error labore ipsa asperiores dolorum? Amet
              accusantium dolore nobis blanditiis consequatur culpa a. Sed harum
              et dolorum laborum quod dolores, suscipit placeat vel, adipisci
              non veritatis, inventore delectus nam laboriosam animi? Distinctio
              perferendis quia, qui aperiam dolore quisquam velit cupiditate
              eos? ({index + 1})
            </text>
          </view>
        ))}
      </scroll-view>
      <view className="h-20 w-full flex gap-4 border border-black">
        <view className="flex flex-col flex-1 gap-2 justify-center items-center">
          <text className="text-4xl">A</text>
          <text>Some text</text>
        </view>
        <view className="flex flex-col flex-1 gap-2 justify-center items-center">
          <text className="text-4xl">B</text>
          <text>Some text</text>
        </view>
        <view className="flex flex-col flex-1 gap-2 justify-center items-center">
          <text className="text-4xl">C</text>
          <text>Some text</text>
        </view>
      </view>
    </view>
  );
}
