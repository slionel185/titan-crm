import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

export default function Pricing() {
    return (
        <div className='flex flex-col bg-neutral-200'>
            <Navbar />
            <Header content='Pricing' />
            <div className='flex flex-col items-center py-12 px-12'>
                <div className='grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 w-full gap-12'>
                    <div id='online' className='flex flex-col bg-base-100 p-4 rounded-md w-full shadow-lg'>
                        <h1 className='uppercase text-2xl font-extrabold text-neutral-200 text-left md:text-center'>Online</h1>
                        <h1 className='text-xl font-bold'>Location</h1>
                        <div className='divider my-0' />
                        <div className='text-lg font-semibold'>
                            <h1>0 Locations</h1>
                            <h1>2 Trainers</h1>
                            <h1>20 Clients per trainer*</h1>
                            <h1>7 Workouts per client</h1>
                            <h1>1 Meal Plan per client</h1>
                        </div>
                        <h1 className='text-xl font-bold mt-4'>Website</h1>
                        <div className='divider my-0' />
                        <div className='text-lg font-semibold'>
                            <h1>Customized to your brand</h1>
                            <h1></h1>
                        </div>
                    </div>
                    <div id='online' className='flex flex-col bg-base-100 p-6 rounded-md w-full shadow-lg'>
                        <h1 className='uppercase text-2xl font-extrabold text-neutral-200 text-left md:text-center'>Startup</h1>
                        <div className='divider' />
                        <div className='text-lg font-semibold'>
                            <h1>1 Location</h1>
                            <h1>10 Trainers</h1>
                            <h1>20 Clients per Trainer*</h1>
                            <h1>7 Workouts per Client</h1>
                            <h1>1 Meal Plan per Client</h1>
                        </div>
                    </div>
                    <div id='online' className='flex flex-col bg-base-100 p-6 rounded-md w-full shadow-lg'>
                        <h1 className='uppercase text-2xl font-extrabold text-neutral-200 text-left md:text-center'>Professional</h1>
                        <div className='divider' />
                        <div className='text-lg font-semibold'>
                            <h1>3 Locations</h1>
                            <h1>Unlimited Trainers</h1>
                            <h1>100 Clients per Trainer*</h1>
                            <h1>Unlimited Workouts per Client</h1>
                            <h1>Unlimited Meal Plans per Client</h1>
                        </div>
                    </div>
                    <div id='online' className='flex flex-col bg-base-100 p-6 rounded-md w-full shadow-lg'>
                        <h1 className='uppercase text-2xl font-extrabold text-neutral-200 text-left md:text-center'>Enterprise</h1>
                        <div className='divider' />
                        <div className='text-lg font-semibold'>
                            <h1>0 Locations</h1>
                            <h1>2 Trainers</h1>
                            <h1>20 Clients per Trainer*</h1>
                            <h1>7 Workouts per Client</h1>
                            <h1>1 Meal Plan per Client</h1>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}