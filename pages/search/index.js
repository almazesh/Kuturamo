import cls from '../../styles/Search.module.scss';
import MainLayout from '../../components/MainLayout';
import Button from '../../components/MiniComponents/Button';

const searchHistory = [
    {
        id: 1,
        title: 'shoes'
    },
    {
        id: 2,
        title: 'bomber'
    },
    {
        id: 3,
        title: 'jacket'
    }
]

const Search = () => {
    return (
        <MainLayout>
            <div className={cls.root}>
                <input
                    className={cls.input}
                    type='text'
                    placeholder='ENTER SEARCH TERMS'
                />
                <Button className={cls.searchBtn}>SEARCH</Button>
                <div className={cls.recent}>
                    <h1>RECENT</h1>
                    <ul>
                        {
                            searchHistory.map(({ id, title }) => (
                                <li key={id}>{title}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </MainLayout>
    )
}

export default Search;