import React from 'react';
import Skeleton from '../Skeleton';

const SkeletonCard = () => {
    return (
        <div className='skeleton-wrapper'>
            <div className="SkeletonProduct">
                <div className='card link'>
                    <div className="card-img">
                        <Skeleton type='img-box' />
                    </div>
                    <div className="card-info">
                        <Skeleton type='heading' />
                        <Skeleton type='heading' />
                        <Skeleton type='heading' />
                        <Skeleton type='short-p' />
                        <Skeleton type='short-p' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkeletonCard;