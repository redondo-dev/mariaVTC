import React from 'react';
import Footer from "../components/Footer";
import Entete from"../components/Entete";
import TransfertAffaire from '../components/transfert-affaire';
import TransfertAero from '../components/transfert-aero';
import VisiteToursitique from '../components/visite-toursitique';



const Transfert = () => {
    return (
        
     <>
       
     <Entete />  
        <TransfertAffaire/>
        <TransfertAero />
        <VisiteToursitique />
        <Footer />
    </>
       
    );
}

export default Transfert;
