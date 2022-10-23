import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import lodgingList from "../../datas/logements.json"

const Slideshow = () => {
	let {id} = useParams();
    const { pictures } = lodgingList.find((l) => l.id === id);


	const [current, setCurrent] = useState(0);
	const nextSlide = () => {
		setCurrent(current === pictures.length - 1 ? 0 : current + 1);
	};
	const prevSlide = () => {
		setCurrent(current === 0 ? pictures.length - 1 : current - 1);
	};

	return (
		<section id="slideshow">
			{pictures.length > 1 && (
				<i className="fa-solid fa-chevron-left" onClick={prevSlide}></i>
			)}
			{pictures.length > 1 && (
				<i className="fa-solid fa-chevron-right" onClick={nextSlide}></i>
			)}

			
			{pictures.map((picture, index) => {
				return (
					<div key={index}>
						{index === current && (
							<img
								src={picture}
								alt={pictures.description}
								className="slideshow__picture"
							/>
						)}

						{index === current && (
							<span className="slideshow__picture-index">
								{current + 1}/{pictures.length}
							</span>
						)}
					</div>
				);
			})}
		</section>
	);
};

export default Slideshow;