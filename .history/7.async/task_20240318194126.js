class AlarmClock {
	constructor() {
		// Свойство для хранения звонков
		this.alarmCollection = [];
		// Свойство для хранения id таймера
		this.intervalId = null;
	}
	// Метод для добавления нового звонка
	addClock(time, callback) {
		// Проверяем переданы ли обязательные аргументы
		if (!time || !callback) {
			throw new Error('Отсутствуют обязательные аргументы');	
		}

		let warning = false;
		for (let i = 0; i < this.alarmCollection.length; i++) {
			if (this.alarmCollection[i].time === time) {
				warning = true;
				break
			}
		}
	}
}