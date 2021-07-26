const emailRegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const loginValidation = (postData, errorData) => {
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

    if(postData.password.length < 6){
        errorData.push({
            field: 'password',
            message: 'Пароль должен быть больше 6 символов'
        })
    }
}