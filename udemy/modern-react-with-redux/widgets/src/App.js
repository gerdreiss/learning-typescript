import { useState } from 'react';
import Drowdown from './components/Dropdown';

const items = [
  { title: 'What is React?', content: 'React is a front end javascript framework' },
  { title: 'Why use React?', content: 'React is a favorite JS library among engineers' },
  { title: 'How do you use React?', content: 'You use React by creating components' },
];

const options = [
  { label: 'Red', value: 'red' },
  { label: 'Green', value: 'green' },
  { label: 'Blue', value: 'blue' },
];

export default () => {
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);

  return (
    <div>
      <button onClick={() => setShowDropdown(!showDropdown)}>Toggle</button>

      {showDropdown ? (
        <Drowdown options={options} selected={selected} onSelectedChange={setSelected} />
      ) : null}
    </div>
  );
};
