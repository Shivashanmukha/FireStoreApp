import ProductCard from '../components/ProductCard'
import useProduct from '../hooks/useProduct'
// import {useContext} from 'react'
// import { AuthContexts } from '../store/AuthContext'

const Shop = () => {
  // let data=useContext(AuthContexts)
  // console.log(data)
  const {product,isLoading,isError}=useProduct()
  console.log(product)

  if(isLoading){
    return <h2 className='fw-bold text-center fs-3 my-3'>Loading...</h2>
  }
  if(isError){
    return <h2 className='fw-bold text-center fs-3 my-3'>Error...</h2>
  }

  return (
    <div className='container my-2'>
      <div className="row gy-3">
        {product.map((items)=>{
          return <ProductCard key={items.id} data={items}/>
        })}
      </div>
    </div>
  )
}

export default Shop



