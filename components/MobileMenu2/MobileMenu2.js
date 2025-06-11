import React from 'react';
import Image from 'next/image';
import pumpFunLogo from '/public/images/logos/pump_fun_logo.png';
import xLogo from '/public/images/logos/x_logo.png';

const MobileMenu2 = ({ active, onClose }) => {
    if (!active) return null;
    return (
        <div className="mobile_menu_overlay" style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.85)', zIndex: 9999, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <button onClick={onClose} aria-label="Close menu" style={{ position: 'absolute', top: 24, right: 24, background: 'none', border: 'none', color: '#fff', fontSize: 36, cursor: 'pointer' }}>
                <i className="fa fa-times"></i>
            </button>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 32, alignItems: 'center' }}>
                <li>
                    <a href="https://pump.fun/" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', textDecoration: 'none', fontSize: 24, display: 'flex', alignItems: 'center', gap: 12 }}>
                        <Image src={pumpFunLogo} alt="Pump.fun Logo" width={48} height={48} />
                        Pump.fun
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', textDecoration: 'none', fontSize: 24, display: 'flex', alignItems: 'center', gap: 12 }}>
                        <Image src={xLogo} alt="X Logo" width={48} height={48} />
                       X  
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default MobileMenu2;