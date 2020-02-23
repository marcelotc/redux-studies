const INITIAL_STATE = {
    activeLesson: {},
    activeModule: {},
    modules: [
        {
            id: 1,
            title: "Iniciando React",
            lessons: [
                { id: 1, title: "Primeira aula" },
                { id: 2, title: "Segunda aula" }
            ]
        },
        {
            id: 2,
            title: "Node js",
            lessons: [
                { id: 3, title: "Primeira aula" },
                { id: 4, title: "Segunda aula" }
            ]
        }
    ]
};

export default function course(state = INITIAL_STATE, action) {
    console.log(action)
    if (action.type === 'TOGGLE_LESSON') {
        return {...state, activeLesson: action.lesson, activeModule: action.module}
    }

    return state;
}

