import Select from 'react-select';

const customStyles = {
  control: (base, state) => ({
    ...base,
    fontFamily: "'Manrope', sans-serif",
    fontSize: '0.875rem',
    backgroundColor: '#ffffff',
    borderColor: state.isFocused ? '#0E6B3C' : '#e5e7eb',
    borderRadius: '0.75rem',
    borderWidth: '1px',
    boxShadow: state.isFocused ? '0 0 0 3px rgba(14, 107, 60, 0.08)' : 'none',
    minHeight: '48px',
    paddingLeft: '0.5rem',
    cursor: 'pointer',
    transition: 'border-color 0.15s ease, box-shadow 0.15s ease',
    '&:hover': {
      borderColor: state.isFocused ? '#0E6B3C' : '#9ca3af',
    },
  }),
  valueContainer: (base) => ({
    ...base,
    padding: '0 0.5rem',
  }),
  singleValue: (base) => ({
    ...base,
    color: '#1E1E1E',
    fontFamily: "'Manrope', sans-serif",
    fontSize: '0.875rem',
  }),
  placeholder: (base) => ({
    ...base,
    color: '#9ca3af',
    fontFamily: "'Manrope', sans-serif",
    fontSize: '0.875rem',
  }),
  input: (base) => ({
    ...base,
    color: '#1E1E1E',
    fontFamily: "'Manrope', sans-serif",
    fontSize: '0.875rem',
    margin: 0,
    padding: 0,
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  dropdownIndicator: (base, state) => ({
    ...base,
    color: state.isFocused ? '#0E6B3C' : '#9ca3af',
    padding: '0 0.75rem 0 0',
    transition: 'color 0.15s ease, transform 0.2s ease',
    transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : 'none',
    '&:hover': {
      color: '#0E6B3C',
    },
  }),
  menu: (base) => ({
    ...base,
    fontFamily: "'Manrope', sans-serif",
    fontSize: '0.875rem',
    borderRadius: '0.75rem',
    border: '1px solid #e5e7eb',
    boxShadow: '0 8px 32px rgba(30, 30, 30, 0.10), 0 2px 8px rgba(30, 30, 30, 0.06)',
    overflow: 'hidden',
    marginTop: '4px',
    zIndex: 9999,
  }),
  menuList: (base) => ({
    ...base,
    padding: '4px',
  }),
  option: (base, state) => ({
    ...base,
    fontFamily: "'Manrope', sans-serif",
    fontSize: '0.875rem',
    color: state.isSelected ? '#ffffff' : '#1E1E1E',
    backgroundColor: state.isSelected
      ? '#0E6B3C'
      : state.isFocused
      ? 'rgba(14, 107, 60, 0.07)'
      : 'transparent',
    borderRadius: '0.5rem',
    padding: '0.625rem 0.875rem',
    cursor: 'pointer',
    transition: 'background-color 0.1s ease',
    '&:active': {
      backgroundColor: state.isSelected ? '#0a5230' : 'rgba(14, 107, 60, 0.12)',
    },
  }),
  noOptionsMessage: (base) => ({
    ...base,
    fontFamily: "'Manrope', sans-serif",
    fontSize: '0.875rem',
    color: '#9ca3af',
  }),
};

export default function SelectField({
  label,
  required,
  options,
  value,
  onChange,
  placeholder = 'Select an option',
  id,
}) {
  const selectOptions = options.map((o) =>
    typeof o === 'string' ? { value: o, label: o } : o
  );

  const selectedOption = selectOptions.find((o) => o.value === value) || null;

  return (
    <div>
      {label && (
        <label
          htmlFor={id}
          className="block text-xs font-600 text-gray-600 mb-1.5 uppercase tracking-wide"
          style={{ fontWeight: 600 }}
        >
          {label}
          {required && <span className="text-[#B32025] ml-1">*</span>}
        </label>
      )}
      <Select
        inputId={id}
        options={selectOptions}
        value={selectedOption}
        onChange={(selected) => onChange(selected ? selected.value : '')}
        placeholder={placeholder}
        styles={customStyles}
        isSearchable={false}
        classNamePrefix="bhl-select"
        menuPortalTarget={typeof document !== 'undefined' ? document.body : null}
        menuPosition="fixed"
      />
    </div>
  );
}
