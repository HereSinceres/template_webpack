import {createRoot} from 'react-dom/client';

import {Hello} from './components/demo/Hello';
import {HelloC} from './components/demo/HelloClass';
const container = document.getElementById('app');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(
    <>
        <Hello name="ho2me" />
        <HelloC age={30} />
    </>
);
