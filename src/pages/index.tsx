import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

import openContactModal from '@/functions/openContactModal'

export default function Home() {
    return (
        <div className={`flex xl:h-screen flex-col bg-neutral-200`}>
            <Navbar />
            <div className="hero min-h-screen xl:min-h-full" style={{backgroundImage: 'url(/Hero.jpg)'}}>
                <div className="hero-overlay bg-opacity-80"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-lg">
                        <h1 className="mb-5 text-7xl font-bold uppercase">Titan</h1>
                        <p className="mb-5 text-lg">Welcome to Titan, the CRM for gyms! With our easy-to-use platform, you can manage your customers, memberships, and appointments all in one place. Plus, our powerful reporting and analysis tools will help you grow your business and stay ahead of the competition. Get started today and see the difference Titan can make for your gym!</p>
                        <button onClick={openContactModal} className="btn bg-base-100 hover:bg-base-300 rounded-md">Contact Us</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}