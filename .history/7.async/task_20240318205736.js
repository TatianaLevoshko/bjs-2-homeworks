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
		// Проверяем есть ли звонок с таким же временем
		if (this.alarmCollection.some(alarm => alarm.time === time)) {
			console.warn('Уже присутствует звонок на это же время');
		} else {
			// Если нет, добавляем новый 
			this.alarmCollection.push({ time, callback, canCall: true });
		}
		
	}
	// Метод удаляет звонки по определённому времени
	removeClock(time) {
		this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time !== time);
	}







}

















