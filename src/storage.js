class Storage {
	static setData(data) {
		localStorage.setItem('data', JSON.stringify(data));
	}

	static getData() {
		const data = localStorage.getItem('data');
		const dataJSON = JSON.parse(data);
		return dataJSON;
	}
}

export default Storage;
