import 'bootstrap/dist/css/bootstrap.min.css';
// import { useState, useEffect } from 'react';
//import { useParams } from 'react-router-dom';

export const ProdListContainer = ()=> {
/*    console.log(useParams());
    const {category} = useParams();
    const [productos, setProducts] = useState([]);

    const Promesa = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(arrayProducts)
        }, 2000);
    })

    useEffect(()=>{
        Promesa.then(res=>{
            if (category) {
                const productosFiltrados = res.filter(elm.categoria === category) 
                setProducts(productosFiltrados)
            } else {
                setProducts(res)
            }
           
        })
    },[category])
*/
    return(
        <div className='text-center mt-5 ml-5'>
        <h3 >Lista de Productos</h3>
        </div>
    )
}