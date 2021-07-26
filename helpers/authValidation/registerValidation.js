const emailRegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const phoneRegExp = /^((\+7|7|8)+([0-9]){10})$/

export const registerValidation = (postData, errorData) => {
    if(!postData.email){
        errorData.push({
            field: 'email',
            message: 'Email не указан'
        })
    }

    if(!emailRegExp.test(String(postData.email).toLowerCase())){
        errorData.push({
            field: 'email',
            message: 'Некорректный email'
        })
    }

    if(!postData.password){
        errorData.push({
            field: 'password',
            message: 'Пароль не указан'
        })
    }

    if(!postData.first_name){
        errorData.push({
            field: 'first_name',
            message: 'Имя не указано'
        })
    }

    if(!postData.phone_number){
        errorData.push({
            field: 'phone_number',
            message: 'Телефон не указан'
        })
    }

    if(!phoneRegExp.test(postData.phone_number)){
        errorData.push({
            field: 'phone_number',
            message: 'Введите правильный номер телефона: +79991234567'
        })
    }

    if(!postData.password_repeat){
        errorData.push({
            field: 'password_repeat',
            message: 'Пустое поле'
        })
    }

    if(!postData.last_name){
        errorData.push({
            field: 'last_name',
            message: 'Фамилия не указана'
        })
    }

    if(postData.password.length < 6){
        errorData.push({
            field: 'password',
            message: 'Пароль должен быть больше 6 символов'
        })
    }

    if(postData.password !== postData.password_repeat){
        errorData.push({
            field: "password",
            message: "Пароли не совпадают"
        })

        errorData.push({
            field: "password_repeat",
            message: "Пароли не совпадают"
        })
    }
}