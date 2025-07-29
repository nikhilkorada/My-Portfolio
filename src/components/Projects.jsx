import React from 'react'
import project1 from '/medisched.png'
import project2 from '/water-quality.png'
import project3 from '/movie-rating.png'
import project4 from '/movie-script.png'
import project5 from '/portfolio.png'
import project6 from '/bus-ticket.png'

const ProjectCard = ({ image, title, description, link}) => {
    return(
        <article className="relative max-w-xs bg-gray-800 rounded-lg overflow-hidden shadow-md group">
            <div className='absolute z-0 w-28 h-28 sm:w-40 sm:h-40 bg-[#cd3cf5] rounded-full blur-2xl opacity-40 -top-4 left-6'></div>

            <div className='relative z-10'>
                <figure className='relative'>
                    <img src={image} alt={title} className='w-full h-36 object-cover transition-transform duration-300 group-hover:scale-105'/>
                    <a href={link} target='_blank' rel='noopener noreferrer' className='absolute h-full inset-0 flex items-center justify-center bg-purple-800/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                        <button className='bg-white text-sm font-medium text-black py-1.5 px-3 rounded-2xl shadow hover:text-white hover:bg-[#2879d5]'>Link</button>
                    </a>
                </figure>
                <div className='px-4 py-3'>
                    <header>
                        <h3 className='text-white font-semibold text-lg mb-1'>{title}</h3>
                    </header>
                    <p className='text-gray-300 text-sm'>{description}</p>
                </div>
            </div>
        </article>
    )
}

   
export default function Projects() {
     const listprojects =[
        {
            image: project1,
            title: 'MediSched',
            description: 'A web application for scheduling and managing medical appointments.',
            link: 'https://github.com/nikhilkorada/doctor-appointment-bookingsystem-medisched'
        },
        {
            image: project2,
            title: 'Water Quality Prediction',
            description: 'A machine learning project that predicts water quality based on various parameters.',
            link: 'https://github.com/nikhilkorada/Water-Quality-Prediction-Using-ML'
        },
        {
            image: project3,
            title: 'Movie Popularity & Rating Analysis',
            description: 'This project analyzes movie popularity and ratings using data visualization techniques. ',
            link: 'https://github.com/nikhilkorada/Movie-Popularity-and-Rating-Analysis'
        },
        {
            image: project4,
            title: 'Movie Script Analyzer',
            description: 'A web application for scheduling and managing medical appointments.',
            link: 'https://github.com/nikhilkorada/movie-script-analyzer'
        },
        {
            image: project5,
            title: 'Portfolio Website',
            description: 'A personal portfolio website showcasing projects and skills.',
            link: 'https://github.com/nikhilkorada/My-Portfolio'
        },
        {
            image: project6,
            title: 'Bus Ticket Booking System',
            description: 'A web application for booking bus tickets online.',
            link: 'https://github.com/nikhilkorada/Bus-Ticket-Booking-System'
        },
    ]
  return (
    <main id='projects' className='p-4'>
        <section data-aos='fade-up' data-aos-delay='300'>
            <header className='text-center'>
                <h1 className='text-3xl text-white sm:text-4xl font-bold mb-6'>My <span className='text-purple-400'>Projects</span></h1>
            </header>
        </section>
        <section data-aos='fade-up' data-aos-delay='500' className='flex flex-wrap gap-4 justify-center mt-6'>
            {listprojects.map((project,index) => (
                <ProjectCard key={index} image={project.image} title={project.title} description={project.description} link={project.link}/>
            ))}
        </section>
    </main>
  )
}
