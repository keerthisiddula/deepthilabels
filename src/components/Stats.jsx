import React from 'react'
import { stats } from '../constants'
import styles from '../style'

const Stats = () => {
  return (
    <section
      className={`
        ${styles.flexCenter} flex-wrap
        gap-x-16 gap-y-8 mb-16
        px-4 sm:px-6 md:px-1
        justify-center
      `}
    >
      {stats.map((stat) => (
        <div
          key={stat.id}
          className="flex flex-col items-center sm:flex-row sm:items-center"
          style={{ minWidth: '180px' }} // prevent items from getting too narrow
        >
          <h4 className="font-poppins font-semibold xs:text-[40px] text-[26px] xs:leading-[53px] leading-[43px] text-white">
            {stat.value}
          </h4>
          <p className="font-poppins font-normal xs:text-[20px] text-[17px] xs:leading-[26px] leading-[21px] text-gradient ml-0 sm:ml-2 text-center sm:text-left">
            {stat.title}
          </p>
        </div>
      ))}
    </section>
  )
}

export default Stats
