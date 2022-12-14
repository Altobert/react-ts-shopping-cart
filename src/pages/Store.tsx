import { Col, Row } from "react-bootstrap"
import { StoreItem } from "../components/StoreItem"
import storeItems from "../data/items.json"

export function Store() {
  return (
    <>
      <h1>Catálogo de Pizzas</h1>
      <Row md={2} xs={1} lg={3} className="g-3">
        {/*
          Se utiliza funcion map sacar una lista de item mas id de item
        */}        
        {storeItems.map(item => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  )
}
