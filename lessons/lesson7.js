// Урок 7: Текстовый редактор
const lesson7Content = {
    title: "Урок 7: Текстовый редактор",
    duration: "60 минут",
    difficulty: "Начальный",
    age: "2-4 класс",
    content: `
        <div class="lesson-detail">
            <h2><i class="fas fa-file-alt"></i> Текстовый редактор</h2>
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
                        <p>Видео: "Знакомство с Word" (5 минут)</p>
                        <small>Основные кнопки и функции программы</small>
                    </div>
                </div>
            </div>
            
            <div class="lesson-timeline">
                <h3><i class="fas fa-clock"></i> План урока по времени</h3>
                <div class="timeline">
                    <div class="timeline-item">
                        <span class="time">0-5 мин</span>
                        <span class="activity">Просмотр обучающего видео</span>
                    </div>
                    <div class="timeline-item">
                        <span class="time">5-15 мин</span>
                        <span class="activity">Знакомство с программой Word</span>
                    </div>
                    <div class="timeline-item">
                        <span class="time">15-35 мин</span>
                        <span class="activity">Печатаем короткий рассказ</span>
                    </div>
                    <div class="timeline-item">
                        <span class="time">35-50 мин</span>
                        <span class="activity">Исправляем ошибки и улучшаем текст</span>
                    </div>
                    <div class="timeline-item">
                        <span class="time">50-60 мин</span>
                        <span class="activity">Сохраняем и показываем работу</span>
                    </div>
                </div>
            </div>
            
            <div class="lesson-objectives">
                <h3><i class="fas fa-target"></i> Цели урока</h3>
                <ul>
                    <li>Познакомиться с программой Word</li>
                    <li>Научиться создавать новый документ</li>
                    <li>Написать короткий рассказ из 3-5 предложений</li>
                    <li>Освоить основные кнопки редактора</li>
                    <li>Научиться сохранять документ</li>
                    <li>Понять разницу между блокнотом и Word</li>
                </ul>
            </div>

            <div class="lesson-content-section">
                <h3><i class="fas fa-desktop"></i> Знакомство с Microsoft Word</h3>
                
                <div class="program-interface">
                    <h4>Основные части программы:</h4>
                    <div class="interface-parts">
                        <div class="interface-item">
                            <div class="interface-icon">📄</div>
                            <h5>Белый лист</h5>
                            <p>Здесь мы пишем наш текст</p>
                        </div>
                        <div class="interface-item">
                            <div class="interface-icon">🔤</div>
                            <h5>Панель инструментов</h5>
                            <p>Кнопки для работы с текстом</p>
                        </div>
                        <div class="interface-item">
                            <div class="interface-icon">💾</div>
                            <h5>Кнопка сохранения</h5>
                            <p>Чтобы не потерять наш текст</p>
                        </div>
                        <div class="interface-item">
                            <div class="interface-icon">📝</div>
                            <h5>Курсор</h5>
                            <p>Мигающая палочка показывает, где мы печатаем</p>
                        </div>
                    </div>
                </div>

                <div class="comparison">
                    <h4>Чем Word отличается от Блокнота?</h4>
                    <div class="comparison-table">
                        <div class="comparison-item">
                            <h5>📝 Блокнот</h5>
                            <ul>
                                <li>Простой текст</li>
                                <li>Один шрифт</li>
                                <li>Нет картинок</li>
                                <li>Быстро открывается</li>
                            </ul>
                        </div>
                        <div class="comparison-item">
                            <h5>📄 Word</h5>
                            <ul>
                                <li>Красивый текст</li>
                                <li>Разные шрифты</li>
                                <li>Можно вставлять картинки</li>
                                <li>Много возможностей</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="practice-section">
                <h3><i class="fas fa-pen-fancy"></i> Пишем свой первый рассказ</h3>
                
                <div class="story-themes">
                    <h4>Выбери тему для рассказа:</h4>
                    <div class="themes-grid">
                        <div class="theme-card">
                            <div class="theme-icon">🌞</div>
                            <h5>Мой день</h5>
                            <p>Расскажи о том, как прошёл твой день</p>
                        </div>
                        <div class="theme-card">
                            <div class="theme-icon">🐾</div>
                            <h5>Мой питомец</h5>
                            <p>Опиши своего домашнего животного</p>
                        </div>
                        <div class="theme-card">
                            <div class="theme-icon">👨‍👩‍👧‍👦</div>
                            <h5>Моя семья</h5>
                            <p>Расскажи о своих родных</p>
                        </div>
                        <div class="theme-card">
                            <div class="theme-icon">🎮</div>
                            <h5>Любимая игра</h5>
                            <p>Опиши свою любимую игру или игрушку</p>
                        </div>
                        <div class="theme-card">
                            <div class="theme-icon">🎂</div>
                            <h5>День рождения</h5>
                            <p>Расскажи о своём дне рождения</p>
                        </div>
                        <div class="theme-card">
                            <div class="theme-icon">⭐</div>
                            <h5>Моя мечта</h5>
                            <p>Поделись своей мечтой</p>
                        </div>
                    </div>
                </div>

                <div class="story-structure">
                    <h4>Структура рассказа (3-5 предложений):</h4>
                    <div class="structure-steps">
                        <div class="structure-step">
                            <span class="step-number">1</span>
                            <div class="step-content">
                                <strong>Начало</strong>
                                <p>О чём будет твой рассказ? Представь тему.</p>
                                <div class="example">"Сегодня я хочу рассказать о своей собаке."</div>
                            </div>
                        </div>
                        <div class="structure-step">
                            <span class="step-number">2</span>
                            <div class="step-content">
                                <strong>Описание</strong>
                                <p>Расскажи подробности. Что интересного?</p>
                                <div class="example">"Её зовут Жучка, она коричневая и очень добрая."</div>
                            </div>
                        </div>
                        <div class="structure-step">
                            <span class="step-number">3</span>
                            <div class="step-content">
                                <strong>Действие</strong>
                                <p>Что происходит? Что вы делаете?</p>
                                <div class="example">"Каждый день мы гуляем в парке и играем с мячиком."</div>
                            </div>
                        </div>
                        <div class="structure-step">
                            <span class="step-number">4</span>
                            <div class="step-content">
                                <strong>Чувства</strong>
                                <p>Что ты чувствуешь? Почему это важно?</p>
                                <div class="example">"Мне очень нравится проводить время с Жучкой."</div>
                            </div>
                        </div>
                        <div class="structure-step">
                            <span class="step-number">5</span>
                            <div class="step-content">
                                <strong>Заключение</strong>
                                <p>Завершающая мысль или пожелание.</p>
                                <div class="example">"Я думаю, что все дети должны иметь питомца."</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="story-examples">
                    <h4>Примеры готовых рассказов:</h4>
                    <div class="examples-container">
                        <div class="example-story">
                            <h5>🌞 "Мой день"</h5>
                            <div class="story-text">
                                Сегодня был очень интересный день. Утром я проснулся и позавтракал вкусными блинчиками. Потом мы с мамой пошли в магазин за продуктами. В магазине я помогал выбирать фрукты. Вечером вся семья играла в настольные игры, и это было очень весело!
                            </div>
                        </div>
                        <div class="example-story">
                            <h5>🐾 "Мой кот Мурзик"</h5>
                            <div class="story-text">
                                У меня есть кот по имени Мурзик. Он серый с белыми лапками и очень пушистый. Мурзик любит спать на моей кровати и мурлыкать. Когда я прихожу из школы, он всегда встречает меня у двери. Я очень люблю своего котика!
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="editing-section">
                <h3><i class="fas fa-edit"></i> Улучшаем наш текст</h3>
                
                <div class="editing-tips">
                    <h4>Как сделать текст лучше:</h4>
                    <div class="tips-list">
                        <div class="tip-item">
                            <i class="fas fa-spell-check"></i>
                            <div class="tip-content">
                                <h5>Проверяем ошибки</h5>
                                <p>Прочитай текст вслух. Если что-то звучит странно - исправь.</p>
                            </div>
                        </div>
                        <div class="tip-item">
                            <i class="fas fa-plus-circle"></i>
                            <div class="tip-content">
                                <h5>Добавляем детали</h5>
                                <p>Можно добавить цвета, размеры, эмоции.</p>
                            </div>
                        </div>
                        <div class="tip-item">
                            <i class="fas fa-exchange-alt"></i>
                            <div class="tip-content">
                                <h5>Заменяем слова</h5>
                                <p>Вместо "хороший" можно написать "замечательный".</p>
                            </div>
                        </div>
                        <div class="tip-item">
                            <i class="fas fa-link"></i>
                            <div class="tip-content">
                                <h5>Соединяем предложения</h5>
                                <p>Используем слова "потому что", "поэтому", "но".</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="useful-buttons">
                <h3><i class="fas fa-mouse-pointer"></i> Полезные кнопки в Word</h3>
                <div class="buttons-grid">
                    <div class="button-item">
                        <div class="button-icon">💾</div>
                        <h5>Ctrl + S</h5>
                        <p>Сохранить документ</p>
                    </div>
                    <div class="button-item">
                        <div class="button-icon">↩️</div>
                        <h5>Ctrl + Z</h5>
                        <p>Отменить последнее действие</p>
                    </div>
                    <div class="button-item">
                        <div class="button-icon">📋</div>
                        <h5>Ctrl + C</h5>
                        <p>Скопировать текст</p>
                    </div>
                    <div class="button-item">
                        <div class="button-icon">📌</div>
                        <h5>Ctrl + V</h5>
                        <p>Вставить скопированный текст</p>
                    </div>
                    <div class="button-item">
                        <div class="button-icon">🔍</div>
                        <h5>Ctrl + F</h5>
                        <p>Найти слово в тексте</p>
                    </div>
                    <div class="button-item">
                        <div class="button-icon">🖨️</div>
                        <h5>Ctrl + P</h5>
                        <p>Распечатать документ</p>
                    </div>
                </div>
            </div>

            <div name="assessment">
                <h3><i class="fas fa-check-circle"></i> Проверяем себя</h3>
                <div class="checklist">
                    <label><input type="checkbox"> Умею открывать программу Word</label>
                    <label><input type="checkbox"> Могу создать новый документ</label>
                    <label><input type="checkbox"> Написал рассказ из 3-5 предложений</label>
                    <label><input type="checkbox"> Знаю, как сохранить документ</label>
                    <label><input type="checkbox"> Умею исправлять ошибки в тексте</label>
                    <label><input type="checkbox"> Помню полезные комбинации клавиш</label>
                </div>
            </div>

            <div class="homework">
                <h3><i class="fas fa-home"></i> Домашнее задание</h3>
                <div class="homework-task">
                    <p>✍️ Дома напиши ещё один короткий рассказ на любую тему</p>
                    <p>💾 Обязательно сохрани его в папку "Мои работы"</p>
                    <p>📖 Прочитай свой рассказ родителям или друзьям</p>
                    <p>🎯 Попробуй использовать комбинации клавиш Ctrl+S и Ctrl+Z</p>
                </div>
            </div>
        </div>
    `
};