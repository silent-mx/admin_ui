import { createSignal } from "solid-js";

export default function Counter() {
  const [count, setCount] = createSignal(0);
  const [step, setStep] = createSignal(1);

  return (
    <button class="increment" onClick={() => setCount(count() + 1)} type="button">
      Clicks: {count()}
    </button>
  );
}
