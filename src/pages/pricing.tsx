import { CheckCircle2, XCircle } from 'lucide-react'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import openContactModal from '@/functions/openContactModal'

export default function Pricing() {
    return (
        <div className='flex min-h-screen lg:h-screen flex-col bg-neutral-200'>
            <Navbar />
            <div className='flex h-full flex-col lg:flex-row gap-8 justify-center items-center p-12'>
                <div id='online' className='card w-full max-w-xs p-4 rounded-md bg-neutral-200 text-primary items-center gap-2'>
                    <h1 className='font-black text-3xl'>Online</h1>
                    <h1 className='font-light text-4xl'>$100<span className='font-extrabold text-2xl'>/mo</span></h1>
                    <div className='w-full flex flex-col py-4 gap-2'>
                        <div className='flex gap-4 items-center'>
                            <CheckCircle2 className='text-success' />
                            <h1 className='text-xl'>Up to 2 Trainers</h1>
                        </div>
                        <div className='flex gap-4 items-center'>
                            <CheckCircle2 className='text-success' />
                            <h1 className='text-xl'>Up to 100 Clients</h1>
                        </div>
                        <div className='flex gap-4 items-center'>
                            <CheckCircle2 className='text-success' />
                            <h1 className='text-xl'>Brand specific Website</h1>
                        </div>
                        <div className='flex gap-4 items-center'>
                            <XCircle className='text-red-600' />
                            <h1 className='text-xl'>Unlimited revisions</h1>
                        </div>
                        <div className='flex gap-4 items-center'>
                            <XCircle className='text-red-600' />
                            <h1 className='text-xl'>Locations</h1>
                        </div>
                    </div>
                    <button onClick={openContactModal} className='btn btn-primary normal-case'>Get Started!</button>
                </div>
                <div id='startup' className='card w-full max-w-xs p-4 rounded-md bg-neutral-200 text-primary items-center gap-2'>
                <h1 className='font-black text-3xl'>Professional</h1>
                    <h1 className='font-light text-4xl'>$500<span className='font-extrabold text-2xl'>/mo</span></h1>
                    <div className='w-full flex flex-col py-4 gap-2'>
                        <div className='flex gap-4 items-center'>
                            <CheckCircle2 className='text-success' />
                            <h1 className='text-xl'>Up to 8 Trainers</h1>
                        </div>
                        <div className='flex gap-4 items-center'>
                            <CheckCircle2 className='text-success' />
                            <h1 className='text-xl'>Up to 1000 Clients</h1>
                        </div>
                        <div className='flex gap-4 items-center'>
                            <CheckCircle2 className='text-success' />
                            <h1 className='text-xl'>Customized Website</h1>
                        </div>
                        <div className='flex gap-4 items-center'>
                            <CheckCircle2 className='text-success' />
                            <h1 className='text-xl'>Dedicated Developer</h1>
                        </div>
                        <div className='flex gap-4 items-center'>
                            <CheckCircle2 className='text-success' />
                            <h1 className='text-xl'>Up to 2 Locations</h1>
                        </div>
                    </div>
                    <button onClick={openContactModal} className='btn btn-primary normal-case'>Get Started!</button>
                </div>
                <div id='enterprise' className='card w-full max-w-xs p-4 rounded-md bg-neutral-200 text-primary items-center gap-2'>
                <h1 className='font-black text-3xl'>Enterprise</h1>
                    <h1 className='font-light text-4xl'>Contact</h1>
                    <div className='w-full flex flex-col py-4 gap-2'>
                        <div className='flex gap-4 items-center'>
                            <CheckCircle2 className='text-success' />
                            <h1 className='text-xl'>Unlimited Trainers</h1>
                        </div>
                        <div className='flex gap-4 items-center'>
                            <CheckCircle2 className='text-success' />
                            <h1 className='text-xl'>Unlimited Clients</h1>
                        </div>
                        <div className='flex gap-4 items-center'>
                            <CheckCircle2 className='text-success' />
                            <h1 className='text-xl'>Customized Website</h1>
                        </div>
                        <div className='flex gap-4 items-center'>
                            <CheckCircle2 className='text-success' />
                            <h1 className='text-xl'>Developer Team</h1>
                        </div>
                        <div className='flex gap-4 items-center'>
                            <CheckCircle2 className='text-success' />
                            <h1 className='text-xl'>Unlimited Locations</h1>
                        </div>
                    </div>
                    <button onClick={openContactModal} className='btn btn-primary normal-case'>Contact me!</button>
                </div>
            </div>
            <Footer />
        </div>
    )
}