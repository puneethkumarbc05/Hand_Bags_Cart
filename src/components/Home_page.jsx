import React from 'react'
import "../css/Home_page.css"
import { Link } from 'react-router-dom'
import Cart_dropDown from './Cart_dropDown'
import Category_list from './Category_list'
import Home_Page_Image_Wraap from './Home_Page_Image_Wraap'
import Product_card from './Product_card'
import { Row, Col } from "react-bootstrap"
export const productListDetails = [
    { name: 'abcd', description: 'ldabcjbjfh  kj efkh hk', cost: '₹234', productID: '#fgfg565', imgsrc: 'https://cdn.pixabay.com/photo/2015/08/10/20/14/handbag-883110_640.jpg' },
    { name: 'vsf', description: 'ldabcjbjfh  sdgfea  ef d fwefwef', cost: '₹462', productID: '#cehgf435', imgsrc: 'https://cdn.pixabay.com/photo/2015/08/10/20/16/handbag-883120_640.jpg' },
    { name: 'vzfvz f', description: 'ldabcjbw etwefwer hk', cost: '₹534', productID: '#vc345', imgsrc: 'https://cdn.pixabay.com/photo/2020/06/14/12/47/bag-5297725_640.jpg' },
    { name: 'vd sgsrfgv', description: 'l wefefkh hk', cost: '₹5634', productID: '#v342tv65', imgsrc: 'https://cdn.pixabay.com/photo/2020/12/16/16/42/bag-5837088_640.jpg' },
    { name: ' fgfdgsdfg', description: 'ldabc we rgrefkh hk', cost: '₹3454', productID: '#ftrevt344', imgsrc: 'https://cdn.pixabay.com/photo/2017/05/23/13/53/bag-2337312_640.jpg' },
    { name: 'vrebvas', description: 'ldabcjbjfhd efd  wefwe fqwrg rv rfkh hk', cost: '₹547', productID: '#fed43265', imgsrc: 'https://cdn.pixabay.com/photo/2015/08/10/20/15/handbag-883116_640.jpg' },
    { name: 'dfgsdfg', description: 'ldabcjsdgaerh zx eaf Afkh hk', cost: '₹246', productID: '#435v4v565', imgsrc: 'https://cdn.pixabay.com/photo/2013/12/17/03/15/bag-229610_640.jpg' },
    { name: 'srdgserg', description: 'ldabasr garg rhsetkh hk', cost: '₹4523', productID: '#v435v565', imgsrc: 'https://cdn.pixabay.com/photo/2018/04/01/18/16/bag-3281639_640.png' },
]

const Home_page = () => {
    return (
        <div className='home-page-wrapp'>
            <div className="home-page-header-wrapp">
                <div className="header_page_nav_link">
                    <Link to="/">Home</Link>
                    <Link to="/">Contact</Link>
                    <Link to="/">Start</Link>
                    <Link to="/">Bookmark</Link>
                </div>
                <div className="header_Page_actions">

                </div>
            </div>
            <div className="home_page_body_wrapp">
                <div className="Home_page_componytitle_wrapp">
                    <div className="Home_page_componytitle">
                        <div className="Home_page_componytitle_mainTitle">HAND<span>BAGS</span></div>
                        <div className="Home_page_componytitle_subTitle">Be Model Choice in That</div>
                    </div>
                    <div className="search_field_wrapp">
                        <img src="../images/search.svg" width='10px' />
                        <input type='text' />
                        <button>Search</button>
                    </div>
                    <Cart_dropDown />
                </div>
                <Category_list />
                <Home_Page_Image_Wraap />
                <div className='Product_list'>
                    <Row>
                        {productListDetails.map(product => {
                            return <Col xl={3} lg={3} md={6} sm={12} xs={12} className='product_row'>
                                <Product_card
                                    cost={product.cost}
                                    description={product.description}
                                    name={product.name}
                                    imgsrc={product.imgsrc}
                                    productID={product.productID}
                                />
                            </Col>
                        })}
                    </Row>
                </div>
            </div>
        </div>
    )
}

export default Home_page
