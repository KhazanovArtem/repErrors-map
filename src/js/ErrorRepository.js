export default class ErrorRepository {
    constructor() {
        this.rep = new Map([
            [111, "Ошибка синтаксиса"],
            [202, "Ошибка имени пользователя"],
            [303, "Неверно указаны знаки"],
            [404, "Не найдено тело объекта"],
        ]);
    }

    translate(code) {
        for(let key of this.rep.keys()) {
            if (key === code) {
                return this.rep.get(key);
            } 
        }
        throw new Error('Unknown error'); 
    }
}