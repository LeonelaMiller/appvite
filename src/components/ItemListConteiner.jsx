import { useParams } from "react-router-dom";
import { useEffect, useState } from "react"
import { products } from "../data/products"
import { ItemList } from "./ItemList";
import { Container } from "react-bootstrap";
export const ItemListConteiner = (props) =>{
    const [items, setItems] = useState ([]);
    const {id} = useParams();
    
    useEffect (() => {
       const mypromise = new Promise ((resolve,reject) => {
            setTimeout (() => {resolve(products)}, 2000)
        })
        mypromise.then((response) => {
            if(!id){
                setItems(response)
            } else {
                const filterBycategory =response.filter(item => item.category === id)
                setItems(filterBycategory);
            }
        })
    }, [id]);
    
    return (<Container className="mt-4">
        <h1>{props.greeting}</h1>
    {items ? <ItemList item={items} /> :<>Loading..</>}
     </Container>);
}
