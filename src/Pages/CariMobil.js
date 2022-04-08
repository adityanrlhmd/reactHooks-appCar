import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Jumbotron from "../Components/Jumbotron/Jumbotron";
import FormSearch from "../Components/FormSearch/FormSearch";
import Footer from "../Components/Footer/Footer";

export default class CariMobil extends React.Component {
    render () {
        return (
            <div>
                <Navbar/>
                <Jumbotron/>
                <FormSearch show="true" cari="false"/>
                <Footer/>
            </div>
        )
    }
}