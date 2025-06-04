import Counter from '../../components/Counter';
import Greeting from '../../components/Greeting';
import ToggleMessage from '../../components/ToggleMessage';

export default function AboutPage() {
  return (
    <main>
      <h1 className="page-title">This is the About Page</h1>
      <Counter />
      <Greeting name="Annie" />
      <ToggleMessage />
    </main>
  );
}
