import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SparklesCore } from './ui/sparkles';

const AppNavbar: React.FC = () => {
    const navigate = useNavigate();
    const isAuthenticated = !!localStorage.getItem('token');

    const handleNavigation = (path: string) => {
        navigate(path);
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/');
    };

    return (
        <>
            <nav className="bg-gray-800 p-4 w-full">
                <div className="flex justify-between items-center w-full">

                    {/* Center buttons on mobile devices */}
                    <div className="flex space-x-4 justify-center w-full mobile:justify-center">
                        {isAuthenticated ? (
                            <>
                                <button
                                    className="bg-blue-500 text-white px-4 py-2 rounded-md relative z-20"
                                    onClick={() => handleNavigation('/createblog')}
                                >
                                    Create Blog
                                </button>
                                <button
                                    className="bg-green-500 text-white px-4 py-2 rounded-md relative z-20"
                                    onClick={() => handleNavigation('/allblogs')}
                                >
                                    Read All Blogs
                                </button>
                                <button
                                    className="bg-red-500 text-white px-4 py-2 rounded-md"
                                    onClick={handleLogout}
                                >
                                    Logout
                                </button>
                            </>
                        ) : (
                            <>
                            <button
                                className="bg-blue-500 text-white px-4 py-2 rounded-md mobile: ml-[60%]"
                                onClick={() => handleNavigation('/auth')}
                            >
                                Login
                            </button>
                            <button
                                className="bg-blue-500 text-white px-4 py-2 rounded-md mobile: ml-[60%]"
                                onClick={() => handleNavigation('/auth')}
                            >
                                Signup
                            </button>

       
                            </>

                            
                            
                        )}
                    </div>
                </div>
            </nav>
            <SparklesCore
                background="transparent"
                minSize={0.4}
                maxSize={1}
                particleDensity={200}
                className="w-full h-full"
                particleColor="#FFFFFF"
            />
        </>
    );
};

export default AppNavbar;
