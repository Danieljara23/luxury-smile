import React from 'react';
import { ReactComponent as Instagram } from '../../components/images/ico-instagram.svg'
import { ReactComponent as Facebook } from '../../components/images/ico-facebook.svg'
import { ReactComponent as Whatsapp } from '../../components/images/ico-whatsapp.svg'
import { ReactComponent as DocCarlos } from '../../components/images/ico-doc-carlos.svg'
import './TopHeader.css'


const TopHeader = () => {
    return(
        <div className="flex w-100 top-header">
            <div className="w-70 top-header-main-text flex items-center justify-end">
                <h4>!20% de DCTO en tu primer tratamiento</h4>
            </div>
            <div className="w-20 top-header-social-network flex flex-row items-center justify-center">
                <div className="w-10 mh1">
                    <Instagram/>
                </div>
                <div className="w-10 mh1">
                    <Facebook/>
                </div>
                <div className="w-10 mh1">
                    <Whatsapp/>
                </div>
                <div className="social-network-number w-50">
                    <p className="pv1 mv0">301 371 90 26</p>
                </div>
            </div>
            <div className="w-20 top-header-doctor flex items-center">
                <DocCarlos/>
            </div>
        </div>
    )
}
export default TopHeader