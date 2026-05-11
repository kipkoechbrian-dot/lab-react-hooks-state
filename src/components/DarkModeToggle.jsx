function DarkModeToggle({ darkMode, onToggle }) {
  return (
    <button onClick={onToggle}>
      Toggle {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
}

export default DarkModeToggle;