import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <div className='flex items-center justify-center w-full my-16 font-sans'>
            <div className='flex justify-center flex-col w-[95%]'>
                
                {/* Heading */}
                <div className='flex flex-col gap-4 justify-center items-center'>
                    <h3 className='text-2xl md:text-4xl font-bold tracking-wide'>
                        About HOPPY
                    </h3>
                </div>

                {/* Content */}
                <div className='flex flex-col w-full justify-center items-center gap-8'>
                    <div className="w-[70%] mt-8 p-5 bg-[#63681e] rounded-2xl gap-8 flex flex-col text-white leading-relaxed tracking-wide font-bold">

                        <p>
                            Hoppy is a community-driven creative brand and blockchain-powered ecosystem 
                            inspired by internet culture, art, and storytelling. We blend digital innovation 
                            with real-world products and experiences, building a global community around 
                            creativity, entertainment, and utility.
                        </p>

                        <p className='font-bold text-xl'>What We Do</p>

                        {/* Token Section */}
                        <div className='flex flex-col'>
                            <p className='text-lg font-bold'>Token & Digital Ecosystem</p>
                            <p>• Hoppy Token — A memecoin and cultural asset designed to unite and reward the community.</p>
                            <p>• Crypto Utility Tools — Telegram bots and digital tools that simplify Web3 interaction and deliver real-time analytics, engagement features, and reward systems.</p>
                            <p>• NFT Collections — Original digital art expanding the Hoppy universe with collectible characters and creative storytelling.</p>
                        </div>

                        {/* Consumer Products */}
                        <div className='flex flex-col'>
                            <p className='text-lg font-bold'>Consumer Products & Merchandising</p>
                            <p>• Collectible Toys & Plushies — Original character-based toys and plush products designed for fans and collectors.</p>
                            <p>• Lifestyle Merchandise — Clothing, accessories, and creative goods featuring Hoppy branding and artwork.</p>
                        </div>

                        {/* Community Section */}
                        <div className='flex flex-col'>
                            <p className='text-lg font-bold'>Community, Media & Experiences</p>
                            <p>• Community Projects — Collaborative events, campaigns, and creative programs driven by fans and partners.</p>
                            <p>• Content & Brand Experiences — Memes, storytelling, digital art, and experiential activations celebrating internet culture.</p>
                        </div>

                        <p className='font-bold text-xl'>Our Vision</p>
                        <p>
                            To bridge Web3 culture with real-world creativity — turning memes, art, and community 
                            energy into global entertainment, collectible products, and utility-driven digital tools.
                        </p>
                    </div>

                    <div className='flex flex-col md:flex-row gap-6 md:gap-20'></div>
                </div>
            </div>
        </div>
    )
}

export default page
