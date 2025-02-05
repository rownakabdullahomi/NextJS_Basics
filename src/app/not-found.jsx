import Link from 'next/link';
import React from 'react';

const NotFoundPage404 = () => {
    return (
        <div className='flex flex-col gap-10 justify-center items-center w-full h-full'>
            <h1>404 Not Found</h1>
            <Link href={"/"}>Go back to home</Link>
        </div>
    );
};

export default NotFoundPage404;