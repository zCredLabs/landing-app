import Image from 'next/image';

export default function UseCases() {
    return (
        <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="max-w-4xl mx-auto text-center mb-12">
                <h2 className="text-5xl font-bold tracking-tight">
                    Use Cases
                    <br />
                </h2>
                <p className='text-2xl text-gray-600  mb-4' >Get started in minutes.</p>
                <p className="text-lg text-gray-600 mt-4">
                    Welcome the right people to your app, protocol, or content.
                    <br />
                    Serve your audience and exclude the rest using Nebula ID.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* KYC Card */}
                <div className="bg-gradient-to-br from-purple-100 to-purple-400 rounded-3xl p-6 shadow-sm">
                    <div className="flex justify-center mb-6">
                        <div className="relative w-32 h-32">
                            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                                {/* White background card with rounded corners */}
                                <rect x="40" y="30" width="120" height="140" rx="12" fill="white" />
                                
                                {/* Face outline */}
                                <ellipse cx="100" cy="90" rx="40" ry="45" fill="#FFB27D" />
                                <path d="M80,75 Q100,110 120,75" stroke="#6B4226" strokeWidth="2" fill="none" />
                                <circle cx="85" cy="65" r="5" fill="#6B4226" />
                                <circle cx="115" cy="65" r="5" fill="#6B4226" />
                                
                                {/* Green verification check */}
                                <circle cx="150" cy="60" r="20" fill="#4ADE80" />
                                <path d="M140,60 L150,70 L165,50" stroke="white" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                
                                {/* Start face scan button */}
                                <rect x="60" y="150" width="80" height="15" rx="7" fill="#4ADE80" />
                                <text x="75" y="162" fontSize="9" fill="white" fontWeight="bold">Start face scan</text>
                            </svg>
                        </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">KYC (Know your Customer)</h3>
                    <p className="text-gray-700 text-sm">
                        Secure, seamless KYC for effortless compliance and privacy. Verify identity privately, minimize risk.
                    </p>
                </div>

                {/* Human & Machine Identity Card */}
                <div className="bg-gradient-to-br from-purple-100 to-purple-400 rounded-3xl p-6 shadow-sm">
                    <div className="flex justify-center mb-6">
                        <div className="relative w-32 h-32">
                            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                                {/* Two card approach */}
                                <rect x="30" y="40" width="80" height="120" rx="10" fill="white" />
                                <rect x="90" y="60" width="80" height="120" rx="10" fill="#1E1E3F" />
                                
                                {/* Human face on left card */}
                                <ellipse cx="70" cy="90" rx="25" ry="30" fill="#82CFFD" />
                                <path d="M60,85 Q70,100 80,85" stroke="#0C1631" strokeWidth="1.5" fill="none" />
                                <circle cx="60" cy="75" r="3" fill="#0C1631" />
                                <circle cx="80" cy="75" r="3" fill="#0C1631" />
                                <path d="M50,60 Q70,30 90,60" stroke="#0C1631" strokeWidth="2" fill="#0C1631" />
                                
                                {/* Digital pattern in right card */}
                                <path d="M110,80 L150,80 M110,100 L150,100 M110,120 L150,120" stroke="#4ADE80" strokeWidth="2" />
                                <path d="M120,70 L120,130 M130,70 L130,130 M140,70 L140,130" stroke="#FF4D6D" strokeWidth="2" />
                                <circle cx="130" cy="100" r="15" fill="none" stroke="#4ADE80" strokeWidth="2" />
                                <circle cx="130" cy="130" r="8" fill="#4ADE80" />
                                <circle cx="120" cy="80" r="5" fill="#FF4D6D" />
                                <circle cx="140" cy="120" r="5" fill="#FF4D6D" />
                            </svg>
                        </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Human Identity</h3>
                    <p className="text-gray-700 text-sm">
                        Build credible content with tools for sybil resistance.
                    </p>
                </div>

                {/* Age Verification Card */}
                <div className="bg-gradient-to-br from-purple-100 to-purple-400 rounded-3xl p-6 shadow-sm">
                    <div className="flex justify-center mb-6">
                        <div className="relative w-32 h-32">
                            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                                {/* Card/device frame */}
                                <rect x="40" y="30" width="120" height="140" rx="12" fill="white" />
                                
                                {/* Profile picture */}
                                <circle cx="100" cy="80" r="35" fill="#D1D5DB" />
                                <ellipse cx="100" cy="70" rx="20" ry="22" fill="#94A3B8" />
                                <circle cx="100" cy="115" r="15" fill="#94A3B8" />
                                
                                {/* Age verification tag */}
                                <rect x="50" y="130" width="100" height="25" rx="6" fill="#E5E7EB" />
                                <rect x="55" y="135" width="30" height="15" rx="4" fill="#4ADE80" />
                                <text x="60" y="147" fontSize="12" fill="white" fontWeight="bold">18+</text>
                                <line x1="90" y1="142" x2="140" y2="142" stroke="#9CA3AF" strokeWidth="3" strokeLinecap="round" />
                                
                                {/* Verification checkmark */}
                                <circle cx="160" cy="140" r="12" fill="#4ADE80" />
                                <path d="M153,140 L160,147 L168,135" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                            </svg>
                        </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Age Verification</h3>
                    <p className="text-gray-700 text-sm">
                        Protect minors, ensure privacy, prevent fraud, and meet regulatory standards seamlessly across digital platforms.
                    </p>
                </div>

                {/* National ID Card */}
                <div className="bg-gradient-to-br from-purple-100 to-purple-400 rounded-3xl p-6 shadow-sm">
                    <div className="flex justify-center mb-6">
                        <div className="relative w-32 h-32">
                            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                                {/* ID Card background */}
                                <circle cx="100" cy="90" r="60" fill="#F3B49F" />
                                <circle cx="100" cy="90" r="50" fill="#E49C7A" />
                                
                                {/* Profile photo */}
                                <circle cx="100" cy="80" r="35" fill="#FFD6C2" />
                                <ellipse cx="100" cy="70" rx="20" ry="22" fill="#BA7D65" />
                                <path d="M80,85 Q100,100 120,85" stroke="#8A5A48" strokeWidth="2" fill="none" />
                                <circle cx="90" cy="65" r="3" fill="#8A5A48" />
                                <circle cx="110" cy="65" r="3" fill="#8A5A48" />
                                
                                {/* Verification elements */}
                                <circle cx="150" cy="50" r="15" fill="#4ADE80" />
                                <path d="M142,50 L150,58 L158,45" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                
                                {/* ID verification stripe */}
                                <rect x="65" y="140" width="70" height="20" rx="5" fill="white" />
                                <rect x="70" y="145" width="10" height="10" rx="2" fill="#4ADE80" />
                                <text x="85" y="155" fontSize="10" fill="#4B5563" fontWeight="bold">**********</text>
                            </svg>
                        </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">National ID</h3>
                    <p className="text-gray-700 text-sm">
                        Digital identities made secure, private, and interoperable for seamless citizen services and global authentication.
                    </p>
                </div>
            </div>
        </section>
    );
}
