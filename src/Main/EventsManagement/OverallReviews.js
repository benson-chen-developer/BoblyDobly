import React from 'react'
import { Header } from '../Shared/Header'
import { Star } from './PerformanceRating'

const reveiws = [
    {
        name:"Dyanne Rose Aceron",
        time: '2 hours ago',
        text: 'Lorem ipsum dolor sit amet, consec tetur adip iscing elit, sed do eius mod...',
        ratings: 3,
        color:'#6E7985'
    },
    {
        name:"Dyanne Rose Aceron",
        time: '2 hours ago',
        text: 'Lorem ipsum dolor sit amet, consec tetur adip iscing elit, sed do eius mod...',
        ratings: 3,
        color:'#6E7985'
    },
    {
        name:"Dyanne Rose Aceron",
        time: '2 hours ago',
        text: 'Lorem ipsum dolor sit amet, consec tetur adip iscing elit, sed do eius mod...',
        ratings: 3,
        color:'#506FD9'
    }
]

export const OverallReviews = () => {
    return (
        <div className='blk' style={{width:'32%'}}>
            <div className='blk2'>
                <Header name="Overall Reviews"/>

                <div style={{
                    width:'100%', display:'flex', flexDirection:'column',
                    alignItems:'center', height:'100%'
                }}>

                    {/* Total Review */}
                    <div style={{
                        width:'100%', height:'100px', display:'flex',flexDirection:'column', marginBottom:'10px',
                        borderBottom: '3px solid #F1F4F8'
                    }}>
                        <div style={{display:"flex"}}>
                            <div style={{display:'flex', justifyContent:'center'}}>
                                <div style={{display:'flex'}}>
                                    <b style={{color:'#000', margin:0, fontSize:'32px'}}>8.3</b>
                                </div>

                                <div style={{display:'flex', justifyContent:'center', alignItems:'center', marginLeft:'10px'}}>
                                    {Array.from({ length: 5 }, (_, starIndex) => (
                                        <Star key={starIndex} filled={starIndex < 5} />
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Text */}
                        <div style={{marginBottom:'10px'}}>
                            <b style={{color:'grey', margin:0, fontSize:'13px'}}>Measures the overall reviews and ratings of your event's performance.</b>
                        </div>
                    </div>

                    {reveiws.map((r, i) => <Review key={i} review={r} isLast={i === reveiws.length-1} /> )}
                    
                </div>
            </div>
        </div>
    )
}

const Review = ({review, isLast}) => {
    return(
        <div style={{
            width:'100%', height:'120px', display:'flex',flexDirection:'column', marginBottom:'10px',
            borderBottom: !isLast ? '3px solid #F1F4F8' : '1px solid "#fff'
        }}>
            {/* Profile */}
            <div style={{display:"flex"}}>
                <div style={{marginRight:'10px', background:review.color, width:'50px', height:'50px', borderRadius:100, display:'flex', alignItems:'center', justifyContent:'center'}}>
                    <p style={{color:'#fff', margin:0, fontSize:'20px'}}>{review.name[0]}</p>
                </div>

                <div style={{display:'flex', justifyContent:'center', flexDirection:'column'}}>
                    <p style={{color:'#000', margin:0, fontSize:'20px'}}>{review.name}</p>
                    <div style={{display:'flex'}}>
                        <div style={{display:'flex', justifyContent:'center', alignItems:'center', marginRight:'10px'}}>
                            {Array.from({ length: 5 }, (_, starIndex) => (
                                <Star key={starIndex} filled={starIndex < review.ratings} />
                            ))}
                        </div>
                        <p style={{color:'grey', margin:0, fontSize:'15px'}}>{review.time}</p>
                    </div>
                </div>
            </div>

            {/* Text */}
            <div style={{marginBottom:'10px'}}>
                <p style={{color:'grey', margin:0, fontSize:'14px'}}>{review.text}</p>
            </div>
        </div>
    )
}