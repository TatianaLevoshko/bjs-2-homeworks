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
			// Если нет, добавляем новый звонок 
			this.alarmCollection.push({ time, callback, canCall: true });
		}
		
	}
	// Метод удаляет звонки по определённому времени
	removeClock(time) {
		// Фильтруем массив, удаляем звонки по определенному времени
		this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time !== time);
	}
	// Возвращает текущее время
	getCurrentFormattedTime() {
		const now = new Date();
		const hours = now.getHours().toString().padStart(2, 0);
		const minutes = now.getMinutes().toString().padStart(2, 0);
		return `${hours}:${minutes}`;
	}
	// Запускает будильник
	start() {
		// Проверяет наличие значения в свойстве intervalId
		if (this.intervalId !== null) {
			// Если есть завершить выполнение метода
			return;
		}
		this.intervalId = setInterval(() => {

		}, 1000)
	}

	// Останавливает выполнение интервала будильника
	stop() {

	}
	// Сбрасывает возможность запуска всех звонков
	resetAllCalls() {

	}
	// Удаляет все звонки
	clearAlarms() {

	}

}

















