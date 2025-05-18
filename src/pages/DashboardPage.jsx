import React from 'react'
import HeaderDashboard from '../components/HeaderDashboard'
import Information from '../components/Information'

function DashboardPage() {
    return (
        <div className='bg-[#f5f9fc] h-screen'>
            <HeaderDashboard/>
            <Information/>
        </div>
    )
}

export default DashboardPage
