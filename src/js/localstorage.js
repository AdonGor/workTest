
const settings = {
    theme: 'dark',
    fontSize: 14,
}
localStorage.setItem('settings', JSON.stringify(settings));
localStorage.removeItem('settings', JSON.stringify(settings));
