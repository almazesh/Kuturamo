import cls from './Input.module.scss';

export default function Input({ label, errorText, ...props }){
    return (
        <div className={cls.root}>
            <label>
                <span>{label}</span>
                <input className={cls.input} {...props} />
            </label>
            <span className={cls.errorText}>{errorText}</span>
        </div>
    )
}