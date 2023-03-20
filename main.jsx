import { createRoot } from 'react-dom/client';
import FactRandom from './src/components/FactRandom';

const root = createRoot(document.getElementById('app'));

root.render(<FactRandom />);
