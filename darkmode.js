let isDarkMode = false

const getSavedTheme = () => {
  const savedTheme = locaslStorage.getItem('theme');
  const darkModeSwitch = document.querySelector("#darkModeSwitch")

  if (savedTheme === 'dark'){
    isDarkMode = true;
    document.documentElement.setAttribute('dara-theme', 'dark');
    darkModeSwitch.checked = true;
  } else {
    isDarkMode = false;
    document.documentElement.setAttribute('dara-theme', 'light');
    darkModeSwitch.checked =false;
  }
}

const toggleDarkMode =() => {
  const newMode = !isDarkMode;
  isDarkMode = newMode;

  if (newMode){
    document.documentElement.setAttribute('data-theme', 'dark');
    locaslStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    locaslStorage.setItem('theme', 'light');
  }
};