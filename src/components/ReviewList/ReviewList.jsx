import React from 'react'
import styles from './reviewList.module.css'

const ReviewList = ({ reviews }) => {
  return (
    <ul className={styles.reviewList}>
        {reviews.results?.map((review) => (
          <li key={review.id}>
            <span>Author: {review.author}</span>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
  )
}

export default ReviewList