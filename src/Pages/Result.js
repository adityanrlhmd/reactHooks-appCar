import React, { Component } from 'react'
import Navbar from '../Components/Navbar/Navbar'
import FormSearch from '../Components/FormSearch/FormSearch'
import Footer from '../Components/Footer/Footer'
import LayerJumb from '../Components/LayerJumb/LayerJumb'
import Card from '../Components/Card/Card'
import { Container, Row, Col } from 'reactstrap'

export default class Home extends Component {

    state = {
        data: []
    }

    async getData() {
        let data = await fetch('https://rent-cars-api.herokuapp.com/customer/car')
        let datas = await data.json();
        this.setState({data: datas})
    }


    componentDidMount() {
        this.getData();

        setTimeout(()=>{
            console.log(this.state.data)
        },3000)
    }

  render() {
    return (
        <div>
            <Navbar></Navbar>
            <LayerJumb/>
            <FormSearch show="true" edit="true"></FormSearch>

            <main className='mt-4'>
            <Container>
                <Row>
                    { this.state.data.map((e,key)=>{ 
                        return (
                                <Col md="4">
                                    <Card key={key} {...e}/>
                                </Col>
                        )}) 
                    }
                </Row>
            </Container>
            </main>

            <Footer></Footer>
        </div>
    )
  }
}
