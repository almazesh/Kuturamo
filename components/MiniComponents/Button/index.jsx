import cls from './Button.module.scss';

export default function Button({ className, children, disabled, ...props }){
    return (
        <button disabled={disabled} className={`${cls.root} ${className}`} {...props}>
            {children}
        </button>
    )
}