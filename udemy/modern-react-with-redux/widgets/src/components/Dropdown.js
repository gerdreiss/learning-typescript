import { useEffect, useRef, useState } from 'react';

const Drowdown = ({ options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current.contains(event.target)) {
        return;
      }
      setOpen(false);
    };

    document.body.addEventListener('click', onBodyClick, { capture: true });

    return () => document.body.removeEventListener('click', onBodyClick, { capture: true });
  }, []);

  const renderedOptions = options.map((option) => {
    if (option.value === selected.value) {
      return null;
    }
    return (
      <div key={option.value} className="item" onClick={() => onSelectedChange(option)}>
        {option.label}
      </div>
    );
  });

  const dropdownClass = open ? 'ui selection dropdown visible active' : 'ui selection dropdown';
  const menuClass = open ? 'menu visible transition' : 'menu';

  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <label className="label">Select color</label>
        <div className={dropdownClass} onClick={() => setOpen(!open)}>
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={menuClass}>{renderedOptions}</div>
        </div>
      </div>
    </div>
  );
};

export default Drowdown;
