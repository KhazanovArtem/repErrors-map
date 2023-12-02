import  ErrorRepository from '../ErrorRepository'

test('create ErrorRepository', () => {
    const rep = new ErrorRepository();
    const errors = new Map([
        [111, "Ошибка синтаксиса"],
        [202, "Ошибка имени пользователя"],
        [303, "Неверно указаны знаки"],
        [404, "Не найдено тело объекта"],
    ])
    const result = {rep: errors};
    expect(rep).toEqual(result);
});

test('check method translate', () => {
    const rep = new ErrorRepository();
    const error = rep.translate(202);
    const result = "Ошибка имени пользователя";
    expect(error).toBe(result);
});

test('check method error translate', () => {
    expect(() => {
        const rep = new ErrorRepository();
        rep.translate(2022);
    }).toThrow("Unknown error");
});