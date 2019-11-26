import React from 'react';
import Button from './components/Button';
import './App.scss';

function Scss () {
    return (
        <div className="App">
            <div className="buttons">
                <Button size="large">BUTTON</Button>
                <Button>BUTTON</Button>
                <Button size="small">BUTTON</Button>
            </div>

            <div className="buttons">
                <Button color="gray" size="large">BUTTON</Button>
                <Button color="gray">BUTTON</Button>
                <Button color="gray" size="small">BUTTON</Button>
            </div>

            <div className="buttons">
                <Button color="pink" size="large">BUTTON</Button>
                <Button color="pink">BUTTON</Button>
                <Button color="pink" size="small">BUTTON</Button>
            </div>

            {/* Props 명만 설정해주면 true로 지정한것과 동일하다. */}
            <div className="buttons">
                <Button outline size="large">BUTTON</Button>
                <Button outline>BUTTON</Button>
                <Button outline size="small">BUTTON</Button>
            </div>

            <div className="buttons">
                <Button fullWidth size="large">BUTTON</Button>
                <Button fullWidth>BUTTON</Button>
                <Button fullWidth size="large">BUTTON</Button>
            </div>
        </div>
    );
};

export default Scss;