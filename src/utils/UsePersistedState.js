function UsePersistedState(key, state) {
	if (key && state) {
		localStorage.setItem(key, JSON.stringify(state));
	} else if (key) {
		return localStorage.getItem(key);
	}
}

export default UsePersistedState;
