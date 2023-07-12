export default function Header({ content }: { content: string }) {
    return (
        <div className='hero min-h-[20vh] shadow-xl' style={{ backgroundImage: 'url(/Hero.jpg)' }}>
            <div className="hero-overlay bg-opacity-80"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-lg">
                    <h1 className="text-4xl font-bold uppercase">{content}</h1>
                </div>
            </div>
        </div>
    )
}