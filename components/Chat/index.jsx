import cls from './Chat.module.scss';
import { BsChatSquare } from 'react-icons/bs';

const Chat = () => {
    return (
        <div className={cls.root}>
            <span className={cls.chatTitle}>CHAT</span>
            <span>
                <BsChatSquare />
            </span>
        </div>
    )
}

export default Chat;