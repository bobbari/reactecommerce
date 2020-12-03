import React,{Component} from 'react';
import shopData from "./shop.data"
import CollectionPreview from '../../components/collectionPreview/CollectionPreview.compoent'

class ShopPage extends Component{
    constructor(props){
        super(props);    
        this.state = {
            collections: shopData
        }
        
    }
    render(){
        const { collections } = this.state;
        return (
            <div className="shop-page">
                <h1>Collections</h1>
                {
                    collections.map((item)=>(
                        <CollectionPreview key={item.id} {...item} />
                    ))
                }
            </div>
        )
    }

}

export default ShopPage 