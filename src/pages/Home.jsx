
import React from 'react'
import { Card, Col, Row ,Button} from 'react-bootstrap'
import useFetch from '../Hooks/useFetch'
import { useDispatch } from 'react-redux'
import { addToWhishList } from '../redux/slices/whishlistSlice'
import { addToCart } from '../redux/slices/cartSlice'


function Home () {
  const data=useFetch("https://dummyjson.com/products")

  const dispatch=useDispatch()

  return (
  
  <Row className='ms-5' style={{marginTop:'100px'}}>
    {
      data?.length>0.?data?.map((products,index)=>(

    <Col key={index} className='mb-5' sm={12} md={6} lg={4} xl={3}>

    <Card className='shadow rounded' style={{ width: '18rem',height:'30rem' }}>
      <Card.Img height={"200px"} variant="top" src={products?.thumbnail} />
      <Card.Body>
        <Card.Title>{products.title}</Card.Title>
        <Card.Text>
          <p>
            {products?.description.slice(0,55)}....
          </p>
          <h5>${products?.price}</h5>
        </Card.Text>
        <div className='d-flex justify-content-between'>
        <Button className='btn' onClick={()=>dispatch(addToWhishList(products))}><i class="fa-solid fa-heart" ></i></Button>
        <Button className='btn'onClick={()=>dispatch(addToCart(products))}><i class="fa-solid fa-cart-shopping"></i></Button>
        </div>
      </Card.Body>
    </Card>
    </Col>
      )): <p>Loading</p>
      }
  </Row> 
 
   )
}
export default Home
