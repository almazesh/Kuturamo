import MainLayout from "../../components/MainLayout"
import cls from '../../styles/Products.module.scss';
import {shoes , products} from '../../documentation/products'
import A from "../../components/A";
import { AiOutlineShoppingCart, AiOutlineHeart } from 'react-icons/ai'

const Products = () => {
    return (
        <MainLayout>
            <div className={cls.root}>
                <div className={cls.product_parent}>
                    <div className={cls.product_inline}>
                        <div className={cls.product_card_unImage}>
                            <h2>SNEACKERS FOR MEN</h2>
                            <p>THE ULTIMATE CHAMELEON, SNEAKERS FOR MEN NOW SUIT FORMAL AS WELL AS CASUAL OCCASIONS. FROM WHITE TO BLACK, SUBTLE TO STATEMENT, THE WARDROBE STAPLE COMES IN MULTIPLE GUISES.</p>
                        </div>
                        <div className={cls.productShoesContainer}>
                            {
                                shoes.map(item =>(
                                    <div className={cls.product_card} key={item.id}>
                                        <div>
                                            <img src={item.image} alt='' className={cls.boots_image}/>
                                            <div className={cls.product_abs_icon}>
                                                <AiOutlineShoppingCart />
                                                <AiOutlineHeart />
                                            </div>
                                        </div>
                                        <div className={cls.product_card_title}>
                                            <h3>{item.name}</h3>
                                            <p><A text='LOG IN / SIGN UP TO SEE A PRICE' href={'/login'} /></p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            
                <div className={cls.product_gallery_parent}>
                     <div className={cls.product_gallery_inline}>
                            {
                                products.map(item => (
                                    <div className={cls.gallery_card} key={item.id}>
                                        <div>
                                            <img src={item.image} className={cls.gallery_boots}/>
                                            <div className={cls.gallery_abs_icon}>
                                                <AiOutlineShoppingCart />
                                                <AiOutlineHeart />
                                            </div>
                                        </div>
                                        <div className={cls.gallery_card_title}>
                                            <h3>{item.name}</h3>
                                            <p><A text='LOG IN / SIGN UP TO SEE A PRICE' href={'/login'} /></p>
                                        </div>
                                    </div>
                                ))
                            }
                     </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default Products