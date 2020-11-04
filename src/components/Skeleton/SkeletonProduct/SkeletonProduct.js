import React from 'react';
import './SkeletonProduct.css'
import Skeleton from '../Skeleton';

const SkeletonProduct = () => {
    return (
        <div className='skeleton-wrapper'>
            <div className="SkeletonProduct">
                <div className='product'>
                    <div className="img">
                        <Skeleton type='img-box' />
                    </div>
                    <div className="info">
                        <Skeleton type='heading' />
                        <Skeleton type='heading' />
                        <Skeleton type='sub-heading' />
                        <div className="tow-side-con">
                            <div className="lift-side">
                                <Skeleton type='short-p' />
                                <Skeleton type='short-p' />
                                <Skeleton type='short-p' />
                            </div>
                            {
                                <div className="right-side">
                                    <Skeleton type='short-p' />

                                    <ul>
                                        <Skeleton type='short-p' />
                                        <Skeleton type='short-p' />
                                        <Skeleton type='short-p' />

                                    </ul>
                                </div>
                            }
                        </div>
                        <Skeleton type='btn-SK' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkeletonProduct;