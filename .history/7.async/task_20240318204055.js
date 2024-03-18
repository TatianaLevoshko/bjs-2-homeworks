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
		if (this.alarmCollection.some(alarm => alarm.time === time)) {
			console.warn('Уже присутствует звонок на это же время');
		} else {
			// Иначе добавляем новый звонок в коллекцию массива
			this.alarmCollection.push({ time, callback, canCall: true });
		/*
		// Флаг
		let warning = false; 
		// Проходим по массиву alarmCollection
		for (let i = 0; i < this.alarmCollection.length; i++) {
			// Проверяем, есть ли аналогичный звонок
			if (this.alarmCollection[i].time === time) {
				// Если есть, передаем флаг и выходим из цикла
				warning = true;
				break;
			}
		}
		// Если звонок был найден выводим предупреждение
		if (warning) {
			console.warn('Уже присутствует звонок на это же время');
		} else {
			// Иначе добавляем новый звонок в коллекцию массива
			this.alarmCollection.push({ time: time, callback: callback, canCall: true });
		}
		*/
		// Метод удаляет звонки по определённому времени
		removeClock(time) {

		}
	}
}