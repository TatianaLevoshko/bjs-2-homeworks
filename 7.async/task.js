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
		}
			// Если нет, добавляем новый звонок 
			this.alarmCollection.push({time, callback, canCall: true});
	}

	// Метод удаляет звонки по определённому времени
	removeClock(time) {
		// Фильтруем массив, удаляем звонки по определенному времени
		this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time !== time);
	}

	// Возвращает текущее t
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
			return
		}
		// Новый интервал
		this.intervalId = setInterval(() => {
			// Текущее t
			const currentTime = this.getCurrentFormattedTime();

			// Перебирает все звонки
			this.alarmCollection.forEach(alarm => {
				// Проверяем на возможность запуска
				// Совпадает ли t звонка с текущим t
				// И в canCall находится T
				if (alarm.time === currentTime && alarm.canCall) {
					// При T условии canCall на F
					alarm.canCall = false;
					alarm.callback();
				}
			});

		}, 1000);
	}

	// Останавливает выполнение интервала будильника
	stop() {
		if (this.intervalId !== null) {
			clearInterval(this.intervalId);
			this.intervalId = null;
		}
	}

	// Сбрасывает возможность запуска всех звонков
	resetAllCalls() {
		// Присваиваем свойству canCall Т для всех звонков
		this.alarmCollection.forEach(alarm => alarm.canCall = true);
	}

	// Удаляет все звонки
	clearAlarms() {
		this.stop();
		this.alarmCollection = [];
	}
}
