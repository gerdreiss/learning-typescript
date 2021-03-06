import Translate from './components/Translate';
import Accordion from './components/Accordion';
import Dropdown from './components/Dropdown';
import Search from './components/Search';
import Route from './components/Route';
import { useState } from 'react';
import Header from './components/Header';

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

  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/search">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label="Select color"
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path="/translate">
        <Translate />;
      </Route>
    </div>
  );
};
