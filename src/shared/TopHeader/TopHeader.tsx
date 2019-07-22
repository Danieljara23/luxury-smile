import React from 'react';
import { ReactComponent as Instagram } from '../../components/images/ico-instagram.svg'
import { ReactComponent as Facebook } from '../../components/images/ico-facebook.svg'
import { ReactComponent as Whatsapp } from '../../components/images/ico-whatsapp.svg'
import { ReactComponent as DocCarlos } from '../../components/images/ico-doc-carlos.svg'
import './TopHeader.css'

interface Props{
    isFixed: boolean
}

const TopHeader = ( props:Props ) => {
    const { isFixed } = props
    console.log("isFixed from TopHeader", isFixed)
    return(
        <div className={`w-100 top-header ${isFixed! ? 'dn':'flex '}`}>
            <div className="w-70-ns w-100-s top-header-main-text flex items-center justify-end">
                <h4>!20% de DCTO en tu primer tratamiento</h4>
            </div>
            <div className="w-20-ns w-70-s top-header-social-network flex flex-row items-center justify-center">
                <div className="">
                    <a href="https://www.instagram.com/luxurysmilecolombia/" target="_blank">
                        <Instagram/>
                    </a>
                </div>
                <div className="">
                    <a href="https://www.facebook.com/LUXURY-SMILE-526886811114080/" target="_blank">
                        <Facebook/>
                    </a>
                </div>
                <div className="">
                    <a href="https://wa.me/573013719026" target="_blank">
                        <Whatsapp/>
                    </a>
                </div>
                <div className="social-network-number w-50">
                    <p className="pv1 mv0">301 371 90 26</p>
                </div>
            </div>
            <div className="w-20-ns w-30-s top-header-doctor flex items-center">
                <DocCarlos/>
            </div>
        </div>
    )
}
export default TopHeader