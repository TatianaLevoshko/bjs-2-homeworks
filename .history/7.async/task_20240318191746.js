class AlarmClock {
	constructor() {
		// Свойство для хранения звонков
		this.alarmCollection = [];
		// Свойство для хранения id таймера
		this.intervalId = null;
	}
	// 
	addClock(time, callback) {
		if (!time || !callback) {
			throw new Error('Отсутствуют обязательные аргументы');	
		}
	}
}