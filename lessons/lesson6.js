// Урок 6: Безопасность за компьютером
const lesson6Content = {
    title: "Урок 6: Безопасность за компьютером",
    duration: "60 минут",
    difficulty: "Начальный",
    age: "2-4 класс",
    content: `
        <div class="lesson-detail">
            <h2><i class="fas fa-shield-alt"></i> Безопасность за компьютером</h2>
            <div class="lesson-meta">
                <span class="duration"><i class="fas fa-clock"></i> 60 минут</span>
                <span class="difficulty"><i class="fas fa-star"></i> Начальный</span>
                <span class="age"><i class="fas fa-child"></i> 2-4 класс</span>
            </div>
            
            <div class="media-section">
                <h3><i class="fas fa-video"></i> Обучающее видео</h3>
                <div class="video-container">
                    <div class="video-placeholder">
                        <i class="fas fa-play-circle"></i>
                        <p>Видео: "Здоровье и компьютер" (8 минут)</p>
                        <small>Правильная посадка и забота о глазах</small>
                    </div>
                </div>
            </div>
            
            <div class="lesson-timeline">
                <h3><i class="fas fa-clock"></i> План урока по времени</h3>
                <div class="timeline">
                    <div class="timeline-item">
                        <span class="time">0-8 мин</span>
                        <span class="activity">Просмотр обучающего видео</span>
                    </div>
                    <div class="timeline-item">
                        <span class="time">8-20 мин</span>
                        <span class="activity">Правильная посадка за компьютером</span>
                    </div>
                    <div class="timeline-item">
                        <span class="time">20-35 мин</span>
                        <span class="activity">Упражнения для глаз и рук</span>
                    </div>
                    <div class="timeline-item">
                        <span class="time">35-50 мин</span>
                        <span class="activity">Режим работы и отдыха</span>
                    </div>
                    <div class="timeline-item">
                        <span class="time">50-60 мин</span>
                        <span class="activity">Создаём памятку безопасности</span>
                    </div>
                </div>
            </div>
            
            <div class="lesson-objectives">
                <h3><i class="fas fa-target"></i> Цели урока</h3>
                <ul>
                    <li>Научиться правильно сидеть за компьютером</li>
                    <li>Узнать, как беречь глаза</li>
                    <li>Освоить упражнения для рук и спины</li>
                    <li>Понять важность перерывов</li>
                    <li>Создать личную памятку безопасности</li>
                    <li>Научиться заботиться о своём здоровье</li>
                </ul>
            </div>

            <div class="lesson-content-section">
                <h3><i class="fas fa-chair"></i> Правильная посадка</h3>
                
                <div class="posture-guide">
                    <div class="body-parts">
                        <div class="body-part">
                            <div class="part-icon">👀</div>
                            <h4>Глаза</h4>
                            <ul>
                                <li>Экран на расстоянии вытянутой руки</li>
                                <li>Верх экрана на уровне глаз</li>
                                <li>Моргай почаще</li>
                                <li>Каждые 20 минут смотри вдаль</li>
                            </ul>
                        </div>

                        <div class="body-part">
                            <div class="part-icon">🦴</div>
                            <h4>Спина</h4>
                            <ul>
                                <li>Сиди прямо, не сутулься</li>
                                <li>Спина касается спинки стула</li>
                                <li>Плечи расслаблены</li>
                                <li>Не наклоняйся к экрану</li>
                            </ul>
                        </div>

                        <div class="body-part">
                            <div class="part-icon">🙌</div>
                            <h4>Руки</h4>
                            <ul>
                                <li>Локти согнуты под прямым углом</li>
                                <li>Кисти не висят в воздухе</li>
                                <li>Пальцы расслаблены</li>
                                <li>Делай паузы для разминки</li>
                            </ul>
                        </div>

                        <div class="body-part">
                            <div class="part-icon">🦵</div>
                            <h4>Ноги</h4>
                            <ul>
                                <li>Ступни стоят на полу</li>
                                <li>Колени согнуты под прямым углом</li>
                                <li>Не забрасывай ногу на ногу</li>
                                <li>Можно использовать подставку</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="wrong-posture">
                    <h4><i class="fas fa-times-circle"></i> Чего НЕ делать</h4>
                    <div class="wrong-examples">
                        <div class="wrong-item">
                            <span class="wrong-icon">❌</span>
                            <span>Сидеть очень близко к экрану</span>
                        </div>
                        <div class="wrong-item">
                            <span class="wrong-icon">❌</span>
                            <span>Сутулиться или лежать на столе</span>
                        </div>
                        <div class="wrong-item">
                            <span class="wrong-icon">❌</span>
                            <span>Работать в темноте</span>
                        </div>
                        <div class="wrong-item">
                            <span class="wrong-icon">❌</span>
                            <span>Сидеть больше 30 минут без перерыва</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="exercises-section">
                <h3><i class="fas fa-dumbbell"></i> Полезные упражнения</h3>
                
                <div class="exercise-categories">
                    <div class="exercise-category">
                        <h4>👁️ Для глаз (делаем каждые 20 минут)</h4>
                        <div class="exercises">
                            <div class="exercise-item">
                                <span class="exercise-number">1</span>
                                <div class="exercise-desc">
                                    <strong>Моргание</strong>
                                    <p>Быстро поморгай 20 раз</p>
                                </div>
                            </div>
                            <div class="exercise-item">
                                <span class="exercise-number">2</span>
                                <div class="exercise-desc">
                                    <strong>Взгляд вдаль</strong>
                                    <p>Посмотри в окно на что-то далёкое (20 секунд)</p>
                                </div>
                            </div>
                            <div class="exercise-item">
                                <span class="exercise-number">3</span>
                                <div class="exercise-desc">
                                    <strong>Круги глазами</strong>
                                    <p>Медленно вращай глазами по кругу (5 раз)</p>
                                </div>
                            </div>
                            <div class="exercise-item">
                                <span class="exercise-number">4</span>
                                <div class="exercise-desc">
                                    <strong>Зажмуривание</strong>
                                    <p>Сильно зажмурься на 3 секунды, потом расслабь</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="exercise-category">
                        <h4>🙌 Для рук и пальцев</h4>
                        <div class="exercises">
                            <div class="exercise-item">
                                <span class="exercise-number">1</span>
                                <div class="exercise-desc">
                                    <strong>Кулачки</strong>
                                    <p>Сожми и разожми кулаки 10 раз</p>
                                </div>
                            </div>
                            <div class="exercise-item">
                                <span class="exercise-number">2</span>
                                <div class="exercise-desc">
                                    <strong>Пальчики</strong>
                                    <p>Пошевели каждым пальчиком отдельно</p>
                                </div>
                            </div>
                            <div class="exercise-item">
                                <span class="exercise-number">3</span>
                                <div class="exercise-desc">
                                    <strong>Встряхивание</strong>
                                    <p>Встряхни кисти рук как будто стряхиваешь воду</p>
                                </div>
                            </div>
                            <div class="exercise-item">
                                <span class="exercise-number">4</span>
                                <div class="exercise-desc">
                                    <strong>Круги кистями</strong>
                                    <p>Вращай кистями по кругу в разные стороны</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="exercise-category">
                        <h4>🦴 Для спины и шеи</h4>
                        <div class="exercises">
                            <div class="exercise-item">
                                <span class="exercise-number">1</span>
                                <div class="exercise-desc">
                                    <strong>Плечи</strong>
                                    <p>Подними плечи к ушам, подержи 3 секунды, опусти</p>
                                </div>
                            </div>
                            <div class="exercise-item">
                                <span class="exercise-number">2</span>
                                <div class="exercise-desc">
                                    <strong>Повороты головы</strong>
                                    <p>Медленно поверни голову направо, потом налево</p>
                                </div>
                            </div>
                            <div class="exercise-item">
                                <span class="exercise-number">3</span>
                                <div class="exercise-desc">
                                    <strong>Наклоны</strong>
                                    <p>Наклони голову к правому плечу, потом к левому</p>
                                </div>
                            </div>
                            <div class="exercise-item">
                                <span class="exercise-number">4</span>
                                <div class="exercise-desc">
                                    <strong>Потягушки</strong>
                                    <p>Подними руки вверх и потянись к потолку</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="time-management">
                <h3><i class="fas fa-clock"></i> Режим работы и отдыха</h3>
                <div class="time-rules">
                    <div class="rule-card">
                        <div class="rule-icon">⏰</div>
                        <h4>Правило 20-20-20</h4>
                        <p>Каждые 20 минут смотри на что-то на расстоянии 20 шагов в течение 20 секунд</p>
                    </div>
                    <div class="rule-card">
                        <div class="rule-icon">🚶</div>
                        <h4>Перерыв каждые 30 минут</h4>
                        <p>Встань, походи, сделай упражнения 2-3 минуты</p>
                    </div>
                    <div class="rule-card">
                        <div class="rule-icon">⏳</div>
                        <h4>Максимум 1 час подряд</h4>
                        <p>После часа работы делай перерыв не менее 15 минут</p>
                    </div>
                </div>
            </div>

            <div class="creative-section">
                <h3><i class="fas fa-clipboard-list"></i> Создаём памятку безопасности</h3>
                <div class="safety-memo">
                    <h4>Моя памятка "Здоровье за компьютером"</h4>
                    <div class="memo-template">
                        <div class="memo-item">
                            <input type="checkbox" id="posture">
                            <label for="posture">Я сижу прямо, спина касается стула</label>
                        </div>
                        <div class="memo-item">
                            <input type="checkbox" id="distance">
                            <label for="distance">Экран находится на расстоянии вытянутой руки</label>
                        </div>
                        <div class="memo-item">
                            <input type="checkbox" id="light">
                            <label for="light">В комнате достаточно света</label>
                        </div>
                        <div class="memo-item">
                            <input type="checkbox" id="breaks">
                            <label for="breaks">Я делаю перерывы каждые 20-30 минут</label>
                        </div>
                        <div class="memo-item">
                            <input type="checkbox" id="exercises">
                            <label for="exercises">Я делаю упражнения для глаз и рук</label>
                        </div>
                        <div class="memo-item">
                            <input type="checkbox" id="time">
                            <label for="time">Я не работаю за компьютером больше 1 часа подряд</label>
                        </div>
                    </div>
                </div>
            </div>

            <div class="health-tips">
                <h3><i class="fas fa-heart"></i> Дополнительные советы</h3>
                <div class="tips-grid">
                    <div class="tip-card">
                        <i class="fas fa-lightbulb"></i>
                        <h4>Освещение</h4>
                        <p>Работай при хорошем освещении, избегай бликов на экране</p>
                    </div>
                    <div class="tip-card">
                        <i class="fas fa-tint"></i>
                        <h4>Чистота</h4>
                        <p>Содержи экран и клавиатуру в чистоте</p>
                    </div>
                    <div class="tip-card">
                        <i class="fas fa-volume-down"></i>
                        <h4>Звук</h4>
                        <p>Не делай звук слишком громким</p>
                    </div>
                    <div class="tip-card">
                        <i class="fas fa-bed"></i>
                        <h4>Отдых</h4>
                        <p>Хорошо высыпайся, чтобы глаза отдохнули</p>
                    </div>
                </div>
            </div>

            <div class="assessment">
                <h3><i class="fas fa-check-circle"></i> Проверяем себя</h3>
                <div class="checklist">
                    <label><input type="checkbox"> Умею правильно сидеть за компьютером</label>
                    <label><input type="checkbox"> Знаю упражнения для глаз</label>
                    <label><input type="checkbox"> Понимаю важность перерывов</label>
                    <label><input type="checkbox"> Умею делать разминку для рук</label>
                    <label><input type="checkbox"> Слежу за правильным освещением</label>
                    <label><input type="checkbox"> Создал свою памятку безопасности</label>
                </div>
            </div>

            <div class="homework">
                <h3><i class="fas fa-home"></i> Домашнее задание</h3>
                <div class="homework-task">
                    <p>👨‍👩‍👧‍👦 Покажи родителям упражнения для глаз и научи их</p>
                    <p>🪑 Попроси проверить, правильно ли организовано твоё рабочее место</p>
                    <p>⏰ Попробуй дома соблюдать правило перерывов</p>
                    <p>📝 Расскажи младшим, как беречь здоровье за компьютером</p>
                </div>
            </div>
        </div>
    `
};