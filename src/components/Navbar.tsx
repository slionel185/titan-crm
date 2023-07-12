import { Menu } from 'lucide-react'
import { useRouter } from 'next/router'

export default function Navbar() {

    const router = useRouter()
    const currentRoute = router.pathname

    const navigate = (url: string) => {
        router.push(url)
    }

    return (
        <div className='flex justify-center items-center bg-base-100'>
            <div className='navbar bg-base-100 lg:max-w-5xl'>
                <div className='navbar-start gap-4'>
                    <div className='dropdown'>
                        <div tabIndex={0} className='btn rounded-md lg:hidden'>
                            <Menu />
                        </div>
                        <ul tabIndex={0} className='menu menu-md dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-md w-52'>
                            <li className='cursor-pointer hover:bg-primary font-semibold p-2 px-3 rounded-md transition-all ease-in-out duration-300' onClick={() => navigate('/services')}>Services</li>
                            <li className='cursor-pointer hover:bg-primary font-semibold p-2 px-3 rounded-md transition-all ease-in-out duration-300' onClick={() => navigate('/pricing')}>Pricing</li>
                            <li className='cursor-pointer hover:bg-primary font-semibold p-2 px-3 rounded-md transition-all ease-in-out duration-300' onClick={() => navigate('/contact')}>Contact</li>
                        </ul>
                    </div>
                    <h1 onClick={() => navigate('/')} className='font-black text-2xl cursor-pointer uppercase'>Titan</h1>
                </div>
                <div className='navbar-center hidden lg:flex'>
                    <div className='tabs tabs-boxed gap-4 bg-base-100'>
                        <div className='tab'>
                            <h1 onClick={() => navigate('/services')} className={currentRoute.endsWith('services')? 'text-xl font-semibold text-primary-content' : 'text-xl font-medium'}>Services</h1>
                        </div>
                        <div className='tab'>
                            <h1 onClick={() => navigate('/pricing')} className={currentRoute.endsWith('pricing')? 'text-xl font-semibold text-primary-content' : 'text-xl font-medium'}>Pricing</h1>
                        </div>
                        <div className='tab'>
                            <h1 onClick={() => navigate('/contact')} className={currentRoute.endsWith('contact')? 'text-xl font-semibold text-primary-content' : 'text-xl font-medium'}>Contact</h1>
                        </div>
                    </div>
                </div>
                <div className='navbar-end pr-4'>
                    <div className='btn rounded-md btn-sm lg:btn-outline'>Login</div>
                </div>
            </div>
        </div>
    )
}